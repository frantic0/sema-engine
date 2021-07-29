
(function(l, r) { if (!l || l.getElementById('livereloadscript')) return; r = l.createElement('script'); r.async = 1; r.src = '//' + (self.location.host || 'localhost').split(':')[0] + ':35730/livereload.js?snipver=1'; r.id = 'livereloadscript'; r.crossOrigin='anonymous'; l.getElementsByTagName('head')[0].appendChild(r) })(self.document);
// Send audio interleaved audio frames between threads, wait-free.

// A Single Producer - Single Consumer thread-safe wait-free ring buffer.
//
// The producer and the consumer can be separate thread, but cannot change role,
// except with external synchronization.

class RingBuffer {
  static getStorageForCapacity(capacity, type) {
    if (!type.BYTES_PER_ELEMENT) {
      throw "Pass in a ArrayBuffer subclass";
    }
    var bytes = 8 + (capacity + 1) * type.BYTES_PER_ELEMENT;
    return new SharedArrayBuffer(bytes);
  }
  // `sab` is a SharedArrayBuffer with a capacity calculated by calling
  // `getStorageForCapacity` with the desired capacity.
  constructor(sab, type) {
    if (!ArrayBuffer.__proto__.isPrototypeOf(type) &&
      type.BYTES_PER_ELEMENT !== undefined) {
      throw "Pass a concrete typed array class as second argument";
    }

    // Maximum usable size is 1<<32 - type.BYTES_PER_ELEMENT bytes in the ring
    // buffer for this version, easily changeable.
    // -4 for the write ptr (uint32_t offsets)
    // -4 for the read ptr (uint32_t offsets)
    // capacity counts the empty slot to distinguish between full and empty.
    this._type = type;
    this.capacity = (sab.byteLength - 8) / type.BYTES_PER_ELEMENT;
    this.buf = sab;
    this.write_ptr = new Uint32Array(this.buf, 0, 1);
    this.read_ptr = new Uint32Array(this.buf, 4, 1);
    this.storage = new type(this.buf, 8, this.capacity);
  }
  // Returns the type of the underlying ArrayBuffer for this RingBuffer. This
  // allows implementing crude type checking.
  type() {
    return this._type.name;
  }
  // Push bytes to the ring buffer. `bytes` is an typed array of the same type
  // as passed in the ctor, to be written to the queue.
  // Returns the number of elements written to the queue.
  push(elements) {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);

    if ((wr + 1) % this._storage_capacity() == rd) {
      // full
      return 0;
    }

    let to_write = Math.min(this._available_write(rd, wr), elements.length);
    let first_part = Math.min(this._storage_capacity() - wr, to_write);
    let second_part = to_write - first_part;

    this._copy(elements, 0, this.storage, wr, first_part);
    this._copy(elements, first_part, this.storage, 0, second_part);

    // publish the enqueued data to the other side
    Atomics.store(
      this.write_ptr,
      0,
      (wr + to_write) % this._storage_capacity()
    );

    return to_write;
  }
  // Read `elements.length` elements from the ring buffer. `elements` is a typed
  // array of the same type as passed in the ctor.
  // Returns the number of elements read from the queue, they are placed at the
  // beginning of the array passed as parameter.
  pop(elements) {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);

    if (wr == rd) {
      return 0;
    }

    let to_read = Math.min(this._available_read(rd, wr), elements.length);

    let first_part = Math.min(this._storage_capacity() - rd, elements.length);
    let second_part = to_read - first_part;

    this._copy(this.storage, rd, elements, 0, first_part);
    this._copy(this.storage, 0, elements, first_part, second_part);

    Atomics.store(this.read_ptr, 0, (rd + to_read) % this._storage_capacity());

    return to_read;
  }

  // True if the ring buffer is empty false otherwise. This can be late on the
  // reader side: it can return true even if something has just been pushed.
  empty() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);

    return wr == rd;
  }

  // True if the ring buffer is full, false otherwise. This can be late on the
  // write side: it can return true when something has just been poped.
  full() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);

    return (wr + 1) % this.capacity != rd;
  }

  // The usable capacity for the ring buffer: the number of elements that can be
  // stored.
  capacity() {
    return this.capacity - 1;
  }

  // Number of elements available for reading. This can be late, and report less
  // elements that is actually in the queue, when something has just been
  // enqueued.
  available_read() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    return this._available_read(rd, wr);
  }

  // Number of elements available for writing. This can be late, and report less
  // elemtns that is actually available for writing, when something has just
  // been dequeued.
  available_write() {
    var rd = Atomics.load(this.read_ptr, 0);
    var wr = Atomics.load(this.write_ptr, 0);
    return this._available_write(rd, wr);
  }

  // private methods //

  // Number of elements available for reading, given a read and write pointer..
  _available_read(rd, wr) {
    if (wr > rd) {
      return wr - rd;
    } else {
      return wr + this._storage_capacity() - rd;
    }
  }

  // Number of elements available from writing, given a read and write pointer.
  _available_write(rd, wr) {
    let rv = rd - wr - 1;
    if (wr >= rd) {
      rv += this._storage_capacity();
    }
    return rv;
  }

  // The size of the storage for elements not accounting the space for the index.
  _storage_capacity() {
    return this.capacity;
  }

  // Copy `size` elements from `input`, starting at offset `offset_input`, to
  // `output`, starting at offset `offset_output`.
  _copy(input, offset_input, output, offset_output, size) {
    for (var i = 0; i < size; i++) {
      output[offset_output + i] = input[offset_input + i];
    }
  }
}

const getBase64 = (str) => {
  //check if the string is a data URI
  if (str.indexOf(';base64,') !== -1) {
    //see where the actual data begins
    var dataStart = str.indexOf(';base64,') + 8;
    //check if the data is base64-encoded, if yes, return it
    // taken from
    // http://stackoverflow.com/a/8571649
    return str.slice(dataStart).match(/^([A-Za-z0-9+\/]{4})*([A-Za-z0-9+\/]{4}|[A-Za-z0-9+\/]{3}=|[A-Za-z0-9+\/]{2}==)$/) ? str.slice(dataStart) : false;
  } else return false;
};

const _keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";

const removePaddingFromBase64 = (input) => {
  var lkey = Module.maxiTools._keyStr.indexOf(input.charAt(input.length - 1));
  if (lkey === 64) {
    return input.substring(0, input.length - 1);
  }
  return input;
};


const loadSampleToArray = (audioContext, sampleObjectName, url, audioWorkletNode) => {
  var data = [];

  //check if url is actually a base64-encoded string
  var b64 = getBase64(url);
  if (b64) {
    //convert to arraybuffer
    //modified version of this:
    // https://github.com/danguer/blog-examples/blob/master/js/base64-binary.js
    var ab_bytes = (b64.length / 4) * 3;
    var arrayBuffer = new ArrayBuffer(ab_bytes);

    b64 = removePaddingFromBase64(removePaddingFromBase64(b64));

    var bytes = parseInt((b64.length / 4) * 3, 10);

    var uarray;
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;
    var j = 0;

    uarray = new Uint8Array(arrayBuffer);

    b64 = b64.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    for (i = 0; i < bytes; i += 3) {
      //get the 3 octects in 4 ascii chars
      enc1 = _keyStr.indexOf(b64.charAt(j++));
      enc2 = _keyStr.indexOf(b64.charAt(j++));
      enc3 = _keyStr.indexOf(b64.charAt(j++));
      enc4 = _keyStr.indexOf(b64.charAt(j++));

      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;

      uarray[i] = chr1;
      if (enc3 !== 64) {
        uarray[i + 1] = chr2;
      }
      if (enc4 !== 64) {
        uarray[i + 2] = chr3;
      }
    }

    // https://webaudio.github.io/web-audio-api/#dom-baseaudiocontext-decodeaudiodata
    // Asynchronously decodes the audio file data contained in the ArrayBuffer.
    audioContext.decodeAudioData(
      arrayBuffer, // has its content-type determined by sniffing
      function (buffer) { // successCallback, argument is an AudioBuffer representing the decoded PCM audio data.
        // source.buffer = buffer;
        // source.loop = true;
        // source.start(0);
        let float32ArrayBuffer = buffer.getChannelData(0);
        if (data !== undefined && audioWorkletNode !== undefined) {
          // console.log('f32array: ' + float32Array);
          audioWorkletNode.port.postMessage({
            "sample":sampleObjectName,
            "buffer": float32ArrayBuffer,
          });
        }
      },
      function (buffer) { // errorCallback
        console.log("Error decoding source!");
      }
    );
  } else {
    // Load asynchronously
    // NOTE: This is giving me an error
    // Uncaught ReferenceError: XMLHttpRequest is not defined (index):97 MaxiProcessor Error detected: undefined
    // NOTE: followed the trail to the wasmmodule.js
    // when loading on if (typeof XMLHttpRequest !== 'undefined') {
    // throw new Error("Lazy loading should have been performed (contents set) in createLazyFile, but it was not. Lazy loading only works in web workers.
    // Use --embed-file or --preload-file in emcc on the main thread.");
    var request = new XMLHttpRequest();
    request.addEventListener("load", () =>
			console.info(`loading sample '${sampleObjectName}'`)
		);
    request.open("GET", url, true);
    request.responseType = "arraybuffer";
    request.onload = function () {
      audioContext.decodeAudioData(
        request.response,
        function (buffer) {
          let float32ArrayBuffer = buffer.getChannelData(0);
          if (data !== undefined && audioWorkletNode !== undefined) {
            // console.log('f32array: ' + float32Array);
            audioWorkletNode.port.postMessage({
              "sample":sampleObjectName,
              "buffer": float32ArrayBuffer,
            });
          }
        },
        function (buffer) {
          console.log("Error decoding source!");
        }
      );
    };
    request.send();
  }
  return "Loading module";
};

class Event {
	constructor(eventName) {
		this.eventName = eventName;
		this.callbacks = [];
	}

	registerCallback(callback) {
    this.callbacks.push(callback);
	}

	unregisterCallback(callback) {
    const index = this.callbacks.indexOf(callback);
		if (index > -1) {
			this.callbacks.splice(index, 1);
		}
	}

	emit(data) {
    const callbacks = this.callbacks.slice(0);
		callbacks.forEach( callback => {
			callback(data);
		});
	}
}

class Dispatcher {

  constructor() {
		this.events = {};
	}

	dispatch(eventName, data) {
		// console.log("dispatch is getting called.");
		const event = this.events[eventName];
		//let event = Event()

		// console.log("event", this.events, "data", data);
		// console.log("data", data, event);
		if (event) {
			// console.log("data being emitted", data)
			event.emit(data);
		}
	}

	addEventListener(eventName, callback) {
		let event = this.events[eventName];
		if (!event) {
			event = new Event(eventName);
			this.events[eventName] = event;
		}
		event.registerCallback(callback);
	}

	removeEventListener(eventName, callback) {
		const event = this.events[eventName];
		if (event && event.callbacks.indexOf(callback) > -1) {
			event.unregisterCallback(callback);
			if (event.callbacks.length === 0) {
				delete this.events[eventName];
			}
		}
	}
}

// var cl, ci, cw, ce;

class Logger {
	/**
	 * @constructor
	 */
	constructor() {
		if (Logger.instance) {
			return Logger.instance; // Singleton pattern
		}
		Logger.instance = this;

		this.log = [];
		this.rawLog = ""; //raw log of string data
		this.originTypes = {main: "[MAIN]", processor:"[PROCESSOR]", learner:"[LEARNER]"};

		this.dispatcher = new Dispatcher();
	}



	//pass in svelte store, of log
	// setStore(storeLog){
	// 	storeLog.set = this.rawLog;
	// }

	addEventListener(event, callback) {
		// console.log("registering", event, callback);
		if (this.dispatcher && event && callback) {
			this.dispatcher.addEventListener(event, callback);
			// console.log("registered");
		} else throw new Error("Error adding event listener to Logger");
	}

	push(data) {
		this.log.push(data);
		this.rawLog =
		this.rawLog + "\n" + data.origin + " " + [...data.payload].join();
		this.dispatcher.dispatch("onLog");
		//console.log("getting dispatched", this.rawLog);
		//this.dispatcher.dispatch("onConsoleLogsUpdate", {test:10});
	}

	//clears all logs
	clear(){
		this.log = [];
		this.rawLog = "";
	}

	//console.log = overrideConsoleLog();

	takeOverConsole() {
		if (window.console) {
// this.onMessageHandler.bind(this);
			let cl, ci, cw, ce;

			if (window.console.log) cl = console.log;
			if (window.console.info) ci = console.info;
			if (window.console.warn) cw = console.warn;
			if (window.console.error) ce = console.error;
			if (cl && ci && cw && ce) {
				cw("taking over MAIN console");

				console.log = function (text) {
					this.push({
						func: "logs",
						payload: [...arguments],
						logLevel: "log",
						origin: this.originTypes.main,
					});
					cl.apply(this, arguments);
				}.bind(this);

				console.info = function (text) {
					this.push({
						func: "logs",
						payload: [...arguments],
						logLevel: "info",
						origin: this.originTypes.main,
					});
					ci.apply(this, arguments);
				}.bind(this);

				console.warn = function (text) {
					// window.postMessage({
					this.push({
						func: "logs",
						payload: [...arguments],
						logLevel: "warn",
						origin: this.originTypes.main,
					});
					cw.apply(this, arguments);
				}.bind(this);

				console.error = function (text) {
					// window.postMessage({
					this.push({
						func: "logs",
						payload: [...arguments],
						logLevel: "error",
						origin: this.originTypes.main,
					});
					ce.apply(this, arguments);
				}.bind(this);

				ce("MAIN console taken over");
			}
		}
	}

	// takeOverConsole(f) {
	// 	if (f) {
	// 		try {
	// 			var original = window.console;

	// 			function handle(method, args) {
	// 				var message = Array.prototype.slice.apply(args).join(" ");
	// 				if (original) original[method]("> " + message);
	// 			}

	// 			window.console = {
	// 				log: function () {
	// 					handle("log", arguments);
	// 				},
	// 				warn: function () {
	// 					handle("warn", arguments);
	// 				},
	// 				error: function () {
	// 					handle("error", arguments);
	// 				},
	// 				info: function () {
	// 					handle("info", arguments);
	// 				},
	// 			};
	// 		} catch (error) {
	// 			console.error(error);
	// 		}
	// 	}
	// }
}

// NOTE: this imports RingBuffer directly from node_modules
// }

/**
 * The Engine is a singleton class that encapsulates the AudioContext
 * and all WASM and Maximilian -powered Audio Worklet Processor
 * @class AudioEngine
 * TODO more error handling
 * TODO more checking of arguments passed to methods
 * TODO optimise performance, especially on analysers which are pumping data continuously
 */
class Engine {
	/**
	 * @constructor
	 */
	constructor() {
		if (Engine.instance) {
			return Engine.instance; // Singleton pattern
		}
		Engine.instance = this;

		this.origin = "";

		this.learners = {};

		// Hash of on-demand analysers (e.g. spectrogram, oscilloscope)
		// NOTE: analysers serialized to localStorage are de-serialized
		// and loaded from localStorage before user-triggered audioContext init
		this.analysers = {};

		this.mediaStreamSource = {};
		this.mediaStream = {};

		// Shared array buffers for sharing client side data to the audio engine- e.g. mouse coords
		this.sharedArrayBuffers = {};

		// Event emitter that should be subscribed by SAB receivers
		this.dispatcher = new Dispatcher();
		this.logger = new Logger();

		this.samplesLoaded = false;
    this.isHushed = false;
	}

	/**
	 * Add learner instance
	 */
	async addLearner(id, learner) {
		if (learner) {
			try {
				// `this` is the scope that will
				await learner.init(this.origin);

				this.addEventListener("onSharedBuffer", (e) =>
					learner.addSharedBuffer(e)
				); // Engine's SAB emissions subscribed by Learner

				learner.addEventListener("onSharedBuffer", (e) =>
					this.addSharedBuffer(e)
				); // Learner's SAB emissions subscribed by Engine

				this.learners[id] = learner;

			} catch (error) {
				console.error("Error adding Learner to Engine: ", error);
			}
		} else throw new Error("Error adding Learner instance to Engine");
	}

	removeLearner(id) {
		if (id){
			if (this.learners && ( id in this.learners ) ) {
				let learner = this.learners[id];
				learner.removeEventListener("onSharedBuffer", (e) =>
					this.addSharedBuffer(e)
				);
				learner = null;
				delete this.learners[id];
			}
			// else throw new Error("Error removing Learner from Engine: ");
		} else throw new Error("Error with learner ID when removing Learner from Engine");
	}

	/**
	 * Engine's event subscription
	 * @addEventListener
	 * @param {*} event
	 * @param {*} callback
	 */
	addEventListener(event, callback) {
		if (this.dispatcher && event && callback)
			this.dispatcher.addEventListener(event, callback);
		else throw new Error("Error adding event listener to Engine");
	}

	/* #region SharedBuffers */

	/**
	 * Create a shared array buffer for communicating with the audio engine
	 * @param channelId
	 * @param ttype
	 * @param blocksize
	 */
	createSharedBuffer(channelId, ttype, blocksize) {
		let sab = RingBuffer.getStorageForCapacity(32 * blocksize, Float64Array);
		let ringbuf = new RingBuffer(sab, Float64Array);

		this.audioWorkletNode.port.postMessage({
			func: "sab",
			value: sab,
			ttype: ttype,
			channelID: channelId,
			blocksize: blocksize,
		});

		this.sharedArrayBuffers[channelId] = {
			sab: sab, // TODO: this is redundant, you can access the sab from the rb,
			// TODO change hashmap name it is confusing and induces error
			rb: ringbuf,
		};

		return sab;
	}

	/**
	 * Push data to shared array buffer for communicating with the audio engine and ML worker
	 * @param {*} e
	 */
	addSharedBuffer(e) {
		if (e) {
			if (e.value && e.value instanceof SharedArrayBuffer) {
				try {
					let ringbuf = new RingBuffer(e.value, Float64Array);
					this.audioWorkletNode.port.postMessage({
						func: "sab",
						value: e.value,
						ttype: e.ttype,
						channelID: e.channelID,
						blocksize: e.blocksize,
					});

					this.sharedArrayBuffers[e.channelID] = {
						sab: e.value, // TODO this is redundant, you can access the sab from the rb,
						// TODO also change hashmap name it is confusing and induces error
						rb: ringbuf,
					};
				} catch (err) {
					console.error("Error pushing SharedBuffer to engine");
				}
			} else if (e.name && e.data) {
				this.audioWorkletNode.port.postMessage({
					func: "sendbuf",
					name: e.name,
					data: e.data,
				});
			}
		} else throw new Error("Error with onSharedBuffer event");
	}

	/**
	 * Push data to shared array buffer for communicating with the audio engine and ML worker
	 * @param {*} e
	 * @param {*} channelId
	 */
	pushDataToSharedBuffer(channelId, data) {
		if (channelId && data && typeof Array.isArray(data)) {
			if (this.sharedArrayBuffers && this.sharedArrayBuffers[channelId]) {
				this.sharedArrayBuffers[channelId].rb.push(data);
			}
		} else throw new Error("Error in function parameters");
	}

	/* #region Analysers */

	/**
	 * Polls data from connected WAAPI analyser return structured object with data and time data in arrays
	 * @param {*} analyser
	 */
	pollAnalyserData(analyser) {
		if (analyser !== undefined) {
			const timeDataArray = new Uint8Array(analyser.fftSize); // Uint8Array should be the same length as the fftSize
			const frequencyDataArray = new Uint8Array(analyser.fftSize);

			analyser.getByteTimeDomainData(timeDataArray);
			analyser.getByteFrequencyData(frequencyDataArray);

			return {
				smoothingTimeConstant: analyser.smoothingTimeConstant,
				fftSize: analyser.fftSize,
				frequencyDataArray: frequencyDataArray,
				timeDataArray: timeDataArray,
			};
		}
	}

	/**
	 * Creates a WAAPI analyser node
	 * @todo configuration object as argumen
	 * @createAnalyser
	 */
	createAnalyser(analyserID, callback) {
		// If Analyser creation happens after AudioContext intialization, create and connect WAAPI analyser
		if (analyserID && callback){
      if(this.audioContext && this.audioWorkletNode ) {

        let analyser = this.audioContext.createAnalyser();
        analyser.smoothingTimeConstant = 0.25;
        analyser.fftSize = 256; // default 2048;
        analyser.minDecibels = -90; // default
        analyser.maxDecibels = -0; // default -10; max 0
        this.audioWorkletNode.connect(analyser);

        let analyserFrameId = -1,
            analyserData = {};

        this.analysers[analyserID] = {
          analyser,
          analyserFrameId,
          callback,
        };

        /**
         * Creates requestAnimationFrame loop for polling data and publishing
         * Returns Analyser Frame ID for adding to Analysers hash
         * and cancelling animation frame
         */
        const analyserPollingLoop = () => {
          analyserData = this.pollAnalyserData(
            this.analysers[analyserID].analyser
          );
          this.analysers[analyserID].callback(analyserData); // Invoke callback that carries
          // This will guarantee feeding poll request at steady animation framerate
          this.analysers[analyserID].analyserFrameId = requestAnimationFrame(
            analyserPollingLoop
          );
          return analyserFrameId;
        };

				console.info("Created analyser");

        analyserPollingLoop();

			// Other if AudioContext is NOT created yet (after app load, before splashScreen click)
      } else {
        this.analysers[analyserID] = { callback };
      }
    } else throw new Error('Parameters to createAnalyser incorrect')
	}

	/**
	 * Connects WAAPI analyser nodes to the main audio worklet for visualisation.
	 * @connectAnalysers
	 */
	connectAnalysers() {
		Object.keys(this.analysers).map((id) =>
			this.createAnalyser(id, this.analysers[id].callback)
		);
	}

	/**
	 * Removes a WAAPI analyser node, disconnects graph, cancels animation frame, deletes from hash
	 * @removeAnalyser
	 */
	removeAnalyser(event) {
		if ( this.audioContext && this.audioWorkletNode ) {
			let analyser = this.analysers[event.id];
			if (analyser !== undefined) {
				cancelAnimationFrame(this.analysers[event.id].analyserFrameId);
				delete this.analysers[event.id];
				// this.audioWorkletNode.disconnect(analyser);
			}
		}
	}

	/* #endregion */

	/**
	 * Initialises audio context and sets worklet processor code
	 * @play
	 */
	async init(origin) {
		if (origin && new URL(origin)) {

      let isWorkletProcessorLoaded;

      try{
        // AudioContext needs lazy loading to workaround the Chrome warning
        // Audio Engine first play() call, triggered by user, prevents the warning
        // by setting this.audioContext = new AudioContext();
        this.audioContext;
        this.origin = origin;
        this.audioWorkletName = "maxi-processor";
        this.audioWorkletUrl = origin + "/" + this.audioWorkletName + ".js";

        if (this.audioContext === undefined) {
          this.audioContext = new AudioContext({
            // create audio context with latency optimally configured for playback
            latencyHint: "playback",
            // latencyHint: 32/44100,  //this doesn't work below 512 on chrome (?)
            // sampleRate: 48000
          });
        }

        isWorkletProcessorLoaded = await this.loadWorkletProcessorCode();
				console.log("Processor loaded");
      }
      catch(err){
        return false;
      }

			if (isWorkletProcessorLoaded) {

				this.connectWorkletNode();



				return true;
			} else return false;

			// No need to inject the callback here, messaging is built in KuraClock
			// this.kuraClock = new kuramotoNetClock((phase, idx) => {
			//   // console.log( `DEBUG:AudioEngine:sendPeersMyClockPhase:phase:${phase}:id:${idx}`);
			//   // This requires an initialised audio worklet
			//   this.audioWorkletNode.port.postMessage({ phase: phase, i: idx });
			// });
			// if (this.kuraClock.connected()) {
			// 	this.kuraClock.queryPeers(async numClockPeers => {
			// 		console.log(`DEBUG:AudioEngine:init:numClockPeers: ${numClockPeers}`);
			// 	});
			// }
		} else {
			throw new Error("Name and valid URL required for AudioWorklet processor");
		}
	}

	/**
	 * Initialises audio context and sets worklet processor code
	 * or re-starts audio playback by stopping and running the latest Audio Worklet Processor code
	 * @play
	 */
	play() {
		if (this.audioContext !== undefined) {
			if (this.audioContext.state === "suspended") {
				this.audioContext.resume();
				return true;
			} else {
				this.hush();
				// this.stop();
				return false;
			}
		}
	}

	/**
	 * Suspends AudioContext (Pause)
	 * @stop
	 */
	stop() {
		if (this.audioWorkletNode !== undefined) {
			this.hush();
			// this.audioContext.suspend();
		}
	}

	/**
	 * Stops audio by disconnecting AudioNode with AudioWorkletProcessor code
	 * from Web Audio graph TODO Investigate when it is best to just STOP the graph exectution
	 * @stop
	 */
	stopAndRelease() {
		if (this.audioWorkletNode !== undefined) {
			this.audioWorkletNode.disconnect(this.audioContext.destination);
			this.audioWorkletNode = undefined;
		}
	}

	setGain(gain) {
		if (this.audioWorkletNode !== undefined && gain >= 0 && gain <= 1) {
			const gainParam = this.audioWorkletNode.parameters.get("gain");
			gainParam.value = gain;
			console.log(gainParam.value); // DEBUG
			return true;
		} else return false;
	}

	more() {
		if (this.audioWorkletNode !== undefined) {
			const gainParam = this.audioWorkletNode.parameters.get("gain");
			gainParam.value += 0.05;
			console.info(gainParam.value); // DEBUG
			return gainParam.value;
		} else throw new Error("error increasing sound level");
	}

	less() {
		if (this.audioWorkletNode !== undefined) {
			const gainParam = this.audioWorkletNode.parameters.get("gain");
			gainParam.value -= 0.05;
			console.info(gainParam.value); // DEBUG
			return gainParam.value;
		} else throw new Error("error decreasing sound level");
	}

	hush() {
		if (this.audioWorkletNode !== undefined) {
			this.audioWorkletNode.port.postMessage({
				hush: 1,
			});
      this.isHushed = true;
			return true;
		} else return false;
	}

	unHush() {
		if (this.audioWorkletNode !== undefined) {
			this.audioWorkletNode.port.postMessage({
				unhush: 1,
			});
      this.isHushed = false;
			return true;
		} else return false;
	}

	eval(dspFunction) {
		if (this.audioWorkletNode && this.audioWorkletNode.port) {
			if (this.audioContext.state === "suspended") {
				this.audioContext.resume();
			}
			this.audioWorkletNode.port.postMessage({
				eval: 1,
				setup: dspFunction.setup,
				loop: dspFunction.loop,
			});
      this.isHushed = false;
			return true;
		} else return false;
	}

	/**
	 * Handler of the Pub/Sub message events
	 * whose topics are subscribed to in the audio engine constructor
	 * @asyncPostToProcessor
	 * @param {*} event
	 */
	asyncPostToProcessor(event) {
		if (event && this.audioWorkletNode && this.audioWorkletNode.port) {
			// Receive notification from 'model-output-data' topic
			console.log("DEBUG:AudioEngine:onMessagingEventHandler:");
			console.log(event);
			this.audioWorkletNode.port.postMessage(event);
		} else throw new Error("Error async posting to processor");
	}

	sendClockPhase(phase, idx) {
		if (this.audioWorkletNode !== undefined) {
			this.audioWorkletNode.port.postMessage({
				phase: phase,
				i: idx,
			});
		}
	}

	onAudioInputInit(stream) {
    try {
      this.mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
      this.mediaStreamSource.connect(this.audioWorkletNode);
      this.mediaStream = stream;
      this.mediaStreamSourceConnected = true;
    } catch (error) {
      console.error(error);
    }
	}

	onAudioInputFail(error) {
		this.mediaStreamSourceConnected = false;
		console.error(
			`ERROR:Engine:AudioInputFail: ${error.message} ${error.name}`
		);
	}

	onAudioInputDisconnect() {

	}

	/**
	 * Sets up an AudioIn WAAPI sub-graph
	 * @connectMediaStreamSourceInput
	 */
	async connectMediaStream() {
		const constraints = ( window.constraints = {
      audio: {
        latency: 0.02,
        echoCancellation: false,
        mozNoiseSuppression: false,
        mozAutoGainControl: false
      },
			video: false,
		});
    // onAudioInputDisconnect();
		await navigator.mediaDevices
			.getUserMedia(constraints)
			.then( s => this.onAudioInputInit(s) )
			.catch(this.onAudioInputFail);

		return this.mediaStreamSourceConnected;
	}

	/**
	 * Breaks up an AudioIn WAAPI sub-graph
	 * @disconnectMediaStreamSourceInput
	 */
	async disconnectMediaStream() {

    try {
			this.mediaStreamSource.disconnect(this.audioWorkletNode);
			this.mediaStream.getAudioTracks().forEach((at) => at.stop());
			this.mediaStreamSource = null;
			this.mediaStreamSourceConnected = false;
		} catch (error) {
			console.error(error);
		}
    finally {
      return this.mediaStreamSourceConnected;
    }
		// await navigator.mediaDevices
		// 	.getUserMedia(constraints)
		// 	.then((s) => this.onAudioInputDisconnect(s))
		// 	.catch(this.onAudioInputFail);


	}

	/**
	 * Loads audioWorklet processor code into a worklet,
	 * setups up all handlers (errors, async messaging, etc),
	 * connects the worklet processor to the WAAPI graph
	 */
	async loadWorkletProcessorCode() {
		if (this.audioContext !== undefined) {
			try {
				await this.audioContext.audioWorklet.addModule(this.audioWorkletUrl)
					.then(
						console.info(
							"running %csema-engine v0.1.0",
							"font-weight: bold; color: #ffb7c5"
							// "font-weight: bold; background: #000; color: #bada55"
						)
				);
			} catch (err) {
				console.error(
					"ERROR:Engine:loadWorkletProcessorCode: AudioWorklet not supported in this browser: ",
					err.message
				);
				return false;
			}
			try {
				// Custom node constructor with required parameters
				// this.audioWorkletNode = new CustomMaxiNode(
				this.audioWorkletNode = new AudioWorkletNode(
					this.audioContext,
					this.audioWorkletName
				);

				this.audioWorkletNode.channelInterpretation = "discrete";
				this.audioWorkletNode.channelCountMode = "explicit";
				this.audioWorkletNode.channelCount = this.audioContext.destination.maxChannelCount;

				return true;
			} catch (err) {
				console.error("Error loading worklet processor code: ", err);
				return false;
			}
		} else {
			return false;
		}
	}

	/**
	 * connects all error event handlers and default processor message callback
	 */
	connectWorkletNode() {
		if (this.audioWorkletNode !== undefined) {
			try {
				this.audioContext.destination.channelInterpretation = "discrete";
				this.audioContext.destination.channelCountMode = "explicit";
				this.audioContext.destination.channelCount = this.audioContext.destination.maxChannelCount;

				// Connect the worklet node to the audio graph
				this.audioWorkletNode.connect(this.audioContext.destination);

				// All possible error event handlers subscribed
				this.audioWorkletNode.onprocessorerror = (e) =>
					// Errors from the processor
					console.error(`Engine processor error detected`, e);

				// Subscribe state changes in the audio worklet processor
				this.audioWorkletNode.onprocessorstatechange = (e) =>
					console.info(
						`Engine processor state change: ` + audioWorkletNode.processorState
					);

				// Subscribe errors from the processor port
				this.audioWorkletNode.port.onmessageerror = (e) =>
					console.error(`Engine processor port error: ` + e);

				// Default worklet processor message handler
				// gets replaced by user callback with 'subscribeAsyncMessage'
				this.audioWorkletNode.port.onmessage = (e) =>
					this.onProcessorMessageHandler(e);

			} catch (err) {
				console.error("Error connecting WorkletNode: ", err);
			}
		}
	}

	/**
	 * Default worklet processor message handler
	 * gets replaced by user-supplied callback through 'subscribeProcessorMessage'
	 * @param {*} event
	 */
	onProcessorMessageHandler(event) {

		if (event && event.data) {
			if (event.data.func === 'logs') {
				this.logger.push(event.data); //recieve data from the worker.js and push it to the logger.
			}
			else if (event.data.rq && event.data.rq === "send") {
				switch (event.data.ttype) {
					case "ML":
						// this.messaging.publish("model-input-data", {
						//   type: "model-input-data",
						//   value: event.data.value,
						//   ch: event.data.ch
						// });
						break;
					case "NET":
						this.peerNet.send(
							event.data.ch[0],
							event.data.value,
							event.data.ch[1]
						);
						break;
				}
			} else if (event.data.rq && event.data.rq === "buf") {
				switch (event.data.ttype) {
					case "ML":
						this.dispatcher.dispatch("onSharedBuffer", {
							sab: event.data.value,
							channelID: event.data.channelID, //channel ID
							blocksize: event.data.blocksize,
						});
						break;
					case "scope":
						// this.dispatcher.dispatch("onSharedBuffer", {
						// 	sab: event.data.value,
						// 	channelID: event.data.channelID, //channel ID
						// 	blocksize: event.data.blocksize,
						// });

						let ringbuf = new RingBuffer(event.data.value, Float64Array);

						this.sharedArrayBuffers[event.data.channelID] = {
							sab: event.data.value, // TODO: this is redundant, you can access the sab from the rb,
							// TODO change hashmap name it is confusing and induces error
							rb: ringbuf,
							ttype: event.data.ttype,
							channelID: event.data.channelID, //channel ID
							blocksize: event.data.blocksize,
						};
						break;
				}
			} else if (event.data.rq && event.data.rq === "rts") { // ready to suspend
		  	this.audioContext.suspend();
        this.isHushed = true;
		  }
      else if (event.data instanceof Error){
        // TODO use a logger to inject error
        console.error(`On Processor Message ${event.data}`);
      }

		}
	}

	/**
	 * Public method for subscribing async messaging from the Audio Worklet Processor scope
	 * @param callback
	 */
	subscribeProcessorMessage(callback) {
		if (callback && this.audioWorkletNode)
			this.audioWorkletNode.port.onmessage = callback;
		else throw new Error("Error subscribing processor message");
	}

	/**
	 * Load individual audio sample, assuming an origin URL with which the engine
	 * is initialised
	 * @param {*} objectName name of the sample
	 * @param {*} url relative URL to the origin URL, startgin with `/`
	 */
	loadSample(objectName, url) {
		if (this.audioContext && this.audioWorkletNode) {
			if (
				url &&
				url.length !== 0 &&
				this.origin &&
				this.origin.length !== 0 &&
				new URL(this.origin + url)
			) {
				try {
					loadSampleToArray(
						this.audioContext,
						objectName,
						this.origin + url,
						this.audioWorkletNode
					);
				} catch (error) {
					console.error(
						`Error loading sample ${objectName} from ${url}: `,
						error
					);
				}
			} else throw "Problem with sample relative URL";
		} else throw "Engine is not initialised!";
	}
}

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function createCommonjsModule(fn) {
  var module = { exports: {} };
	return fn(module, module.exports), module.exports;
}

var nearley = createCommonjsModule(function (module) {
(function(root, factory) {
    if (module.exports) {
        module.exports = factory();
    } else {
        root.nearley = factory();
    }
}(commonjsGlobal, function() {

    function Rule(name, symbols, postprocess) {
        this.id = ++Rule.highestId;
        this.name = name;
        this.symbols = symbols;        // a list of literal | regex class | nonterminal
        this.postprocess = postprocess;
        return this;
    }
    Rule.highestId = 0;

    Rule.prototype.toString = function(withCursorAt) {
        var symbolSequence = (typeof withCursorAt === "undefined")
                             ? this.symbols.map(getSymbolShortDisplay).join(' ')
                             : (   this.symbols.slice(0, withCursorAt).map(getSymbolShortDisplay).join(' ')
                                 + " ● "
                                 + this.symbols.slice(withCursorAt).map(getSymbolShortDisplay).join(' ')     );
        return this.name + " → " + symbolSequence;
    };


    // a State is a rule at a position from a given starting point in the input stream (reference)
    function State(rule, dot, reference, wantedBy) {
        this.rule = rule;
        this.dot = dot;
        this.reference = reference;
        this.data = [];
        this.wantedBy = wantedBy;
        this.isComplete = this.dot === rule.symbols.length;
    }

    State.prototype.toString = function() {
        return "{" + this.rule.toString(this.dot) + "}, from: " + (this.reference || 0);
    };

    State.prototype.nextState = function(child) {
        var state = new State(this.rule, this.dot + 1, this.reference, this.wantedBy);
        state.left = this;
        state.right = child;
        if (state.isComplete) {
            state.data = state.build();
            // Having right set here will prevent the right state and its children
            // form being garbage collected
            state.right = undefined;
        }
        return state;
    };

    State.prototype.build = function() {
        var children = [];
        var node = this;
        do {
            children.push(node.right.data);
            node = node.left;
        } while (node.left);
        children.reverse();
        return children;
    };

    State.prototype.finish = function() {
        if (this.rule.postprocess) {
            this.data = this.rule.postprocess(this.data, this.reference, Parser.fail);
        }
    };


    function Column(grammar, index) {
        this.grammar = grammar;
        this.index = index;
        this.states = [];
        this.wants = {}; // states indexed by the non-terminal they expect
        this.scannable = []; // list of states that expect a token
        this.completed = {}; // states that are nullable
    }


    Column.prototype.process = function(nextColumn) {
        var states = this.states;
        var wants = this.wants;
        var completed = this.completed;

        for (var w = 0; w < states.length; w++) { // nb. we push() during iteration
            var state = states[w];

            if (state.isComplete) {
                state.finish();
                if (state.data !== Parser.fail) {
                    // complete
                    var wantedBy = state.wantedBy;
                    for (var i = wantedBy.length; i--; ) { // this line is hot
                        var left = wantedBy[i];
                        this.complete(left, state);
                    }

                    // special-case nullables
                    if (state.reference === this.index) {
                        // make sure future predictors of this rule get completed.
                        var exp = state.rule.name;
                        (this.completed[exp] = this.completed[exp] || []).push(state);
                    }
                }

            } else {
                // queue scannable states
                var exp = state.rule.symbols[state.dot];
                if (typeof exp !== 'string') {
                    this.scannable.push(state);
                    continue;
                }

                // predict
                if (wants[exp]) {
                    wants[exp].push(state);

                    if (completed.hasOwnProperty(exp)) {
                        var nulls = completed[exp];
                        for (var i = 0; i < nulls.length; i++) {
                            var right = nulls[i];
                            this.complete(state, right);
                        }
                    }
                } else {
                    wants[exp] = [state];
                    this.predict(exp);
                }
            }
        }
    };

    Column.prototype.predict = function(exp) {
        var rules = this.grammar.byName[exp] || [];

        for (var i = 0; i < rules.length; i++) {
            var r = rules[i];
            var wantedBy = this.wants[exp];
            var s = new State(r, 0, this.index, wantedBy);
            this.states.push(s);
        }
    };

    Column.prototype.complete = function(left, right) {
        var copy = left.nextState(right);
        this.states.push(copy);
    };


    function Grammar(rules, start) {
        this.rules = rules;
        this.start = start || this.rules[0].name;
        var byName = this.byName = {};
        this.rules.forEach(function(rule) {
            if (!byName.hasOwnProperty(rule.name)) {
                byName[rule.name] = [];
            }
            byName[rule.name].push(rule);
        });
    }

    // So we can allow passing (rules, start) directly to Parser for backwards compatibility
    Grammar.fromCompiled = function(rules, start) {
        var lexer = rules.Lexer;
        if (rules.ParserStart) {
          start = rules.ParserStart;
          rules = rules.ParserRules;
        }
        var rules = rules.map(function (r) { return (new Rule(r.name, r.symbols, r.postprocess)); });
        var g = new Grammar(rules, start);
        g.lexer = lexer; // nb. storing lexer on Grammar is iffy, but unavoidable
        return g;
    };


    function StreamLexer() {
      this.reset("");
    }

    StreamLexer.prototype.reset = function(data, state) {
        this.buffer = data;
        this.index = 0;
        this.line = state ? state.line : 1;
        this.lastLineBreak = state ? -state.col : 0;
    };

    StreamLexer.prototype.next = function() {
        if (this.index < this.buffer.length) {
            var ch = this.buffer[this.index++];
            if (ch === '\n') {
              this.line += 1;
              this.lastLineBreak = this.index;
            }
            return {value: ch};
        }
    };

    StreamLexer.prototype.save = function() {
      return {
        line: this.line,
        col: this.index - this.lastLineBreak,
      }
    };

    StreamLexer.prototype.formatError = function(token, message) {
        // nb. this gets called after consuming the offending token,
        // so the culprit is index-1
        var buffer = this.buffer;
        if (typeof buffer === 'string') {
            var lines = buffer
                .split("\n")
                .slice(
                    Math.max(0, this.line - 5), 
                    this.line
                );

            buffer.indexOf('\n', this.index);
            var col = this.index - this.lastLineBreak;
            var lastLineDigits = String(this.line).length;
            message += " at line " + this.line + " col " + col + ":\n\n";
            message += lines
                .map(function(line, i) {
                    return pad(this.line - lines.length + i + 1, lastLineDigits) + " " + line;
                }, this)
                .join("\n");
            message += "\n" + pad("", lastLineDigits + col) + "^\n";
            return message;
        } else {
            return message + " at index " + (this.index - 1);
        }

        function pad(n, length) {
            var s = String(n);
            return Array(length - s.length + 1).join(" ") + s;
        }
    };

    function Parser(rules, start, options) {
        if (rules instanceof Grammar) {
            var grammar = rules;
            var options = start;
        } else {
            var grammar = Grammar.fromCompiled(rules, start);
        }
        this.grammar = grammar;

        // Read options
        this.options = {
            keepHistory: false,
            lexer: grammar.lexer || new StreamLexer,
        };
        for (var key in (options || {})) {
            this.options[key] = options[key];
        }

        // Setup lexer
        this.lexer = this.options.lexer;
        this.lexerState = undefined;

        // Setup a table
        var column = new Column(grammar, 0);
        this.table = [column];

        // I could be expecting anything.
        column.wants[grammar.start] = [];
        column.predict(grammar.start);
        // TODO what if start rule is nullable?
        column.process();
        this.current = 0; // token index
    }

    // create a reserved token for indicating a parse fail
    Parser.fail = {};

    Parser.prototype.feed = function(chunk) {
        var lexer = this.lexer;
        lexer.reset(chunk, this.lexerState);

        var token;
        while (true) {
            try {
                token = lexer.next();
                if (!token) {
                    break;
                }
            } catch (e) {
                // Create the next column so that the error reporter
                // can display the correctly predicted states.
                var nextColumn = new Column(this.grammar, this.current + 1);
                this.table.push(nextColumn);
                var err = new Error(this.reportLexerError(e));
                err.offset = this.current;
                err.token = e.token;
                throw err;
            }
            // We add new states to table[current+1]
            var column = this.table[this.current];

            // GC unused states
            if (!this.options.keepHistory) {
                delete this.table[this.current - 1];
            }

            var n = this.current + 1;
            var nextColumn = new Column(this.grammar, n);
            this.table.push(nextColumn);

            // Advance all tokens that expect the symbol
            var literal = token.text !== undefined ? token.text : token.value;
            var value = lexer.constructor === StreamLexer ? token.value : token;
            var scannable = column.scannable;
            for (var w = scannable.length; w--; ) {
                var state = scannable[w];
                var expect = state.rule.symbols[state.dot];
                // Try to consume the token
                // either regex or literal
                if (expect.test ? expect.test(value) :
                    expect.type ? expect.type === token.type
                                : expect.literal === literal) {
                    // Add it
                    var next = state.nextState({data: value, token: token, isToken: true, reference: n - 1});
                    nextColumn.states.push(next);
                }
            }

            // Next, for each of the rules, we either
            // (a) complete it, and try to see if the reference row expected that
            //     rule
            // (b) predict the next nonterminal it expects by adding that
            //     nonterminal's start state
            // To prevent duplication, we also keep track of rules we have already
            // added

            nextColumn.process();

            // If needed, throw an error:
            if (nextColumn.states.length === 0) {
                // No states at all! This is not good.
                var err = new Error(this.reportError(token));
                err.offset = this.current;
                err.token = token;
                throw err;
            }

            // maybe save lexer state
            if (this.options.keepHistory) {
              column.lexerState = lexer.save();
            }

            this.current++;
        }
        if (column) {
          this.lexerState = lexer.save();
        }

        // Incrementally keep track of results
        this.results = this.finish();

        // Allow chaining, for whatever it's worth
        return this;
    };

    Parser.prototype.reportLexerError = function(lexerError) {
        var tokenDisplay, lexerMessage;
        // Planning to add a token property to moo's thrown error
        // even on erroring tokens to be used in error display below
        var token = lexerError.token;
        if (token) {
            tokenDisplay = "input " + JSON.stringify(token.text[0]) + " (lexer error)";
            lexerMessage = this.lexer.formatError(token, "Syntax error");
        } else {
            tokenDisplay = "input (lexer error)";
            lexerMessage = lexerError.message;
        }
        return this.reportErrorCommon(lexerMessage, tokenDisplay);
    };

    Parser.prototype.reportError = function(token) {
        var tokenDisplay = (token.type ? token.type + " token: " : "") + JSON.stringify(token.value !== undefined ? token.value : token);
        var lexerMessage = this.lexer.formatError(token, "Syntax error");
        return this.reportErrorCommon(lexerMessage, tokenDisplay);
    };

    Parser.prototype.reportErrorCommon = function(lexerMessage, tokenDisplay) {
        var lines = [];
        lines.push(lexerMessage);
        var lastColumnIndex = this.table.length - 2;
        var lastColumn = this.table[lastColumnIndex];
        var expectantStates = lastColumn.states
            .filter(function(state) {
                var nextSymbol = state.rule.symbols[state.dot];
                return nextSymbol && typeof nextSymbol !== "string";
            });

        if (expectantStates.length === 0) {
            lines.push('Unexpected ' + tokenDisplay + '. I did not expect any more input. Here is the state of my parse table:\n');
            this.displayStateStack(lastColumn.states, lines);
        } else {
            lines.push('Unexpected ' + tokenDisplay + '. Instead, I was expecting to see one of the following:\n');
            // Display a "state stack" for each expectant state
            // - which shows you how this state came to be, step by step.
            // If there is more than one derivation, we only display the first one.
            var stateStacks = expectantStates
                .map(function(state) {
                    return this.buildFirstStateStack(state, []) || [state];
                }, this);
            // Display each state that is expecting a terminal symbol next.
            stateStacks.forEach(function(stateStack) {
                var state = stateStack[0];
                var nextSymbol = state.rule.symbols[state.dot];
                var symbolDisplay = this.getSymbolDisplay(nextSymbol);
                lines.push('A ' + symbolDisplay + ' based on:');
                this.displayStateStack(stateStack, lines);
            }, this);
        }
        lines.push("");
        return lines.join("\n");
    };
    
    Parser.prototype.displayStateStack = function(stateStack, lines) {
        var lastDisplay;
        var sameDisplayCount = 0;
        for (var j = 0; j < stateStack.length; j++) {
            var state = stateStack[j];
            var display = state.rule.toString(state.dot);
            if (display === lastDisplay) {
                sameDisplayCount++;
            } else {
                if (sameDisplayCount > 0) {
                    lines.push('    ^ ' + sameDisplayCount + ' more lines identical to this');
                }
                sameDisplayCount = 0;
                lines.push('    ' + display);
            }
            lastDisplay = display;
        }
    };

    Parser.prototype.getSymbolDisplay = function(symbol) {
        return getSymbolLongDisplay(symbol);
    };

    /*
    Builds a the first state stack. You can think of a state stack as the call stack
    of the recursive-descent parser which the Nearley parse algorithm simulates.
    A state stack is represented as an array of state objects. Within a
    state stack, the first item of the array will be the starting
    state, with each successive item in the array going further back into history.

    This function needs to be given a starting state and an empty array representing
    the visited states, and it returns an single state stack.

    */
    Parser.prototype.buildFirstStateStack = function(state, visited) {
        if (visited.indexOf(state) !== -1) {
            // Found cycle, return null
            // to eliminate this path from the results, because
            // we don't know how to display it meaningfully
            return null;
        }
        if (state.wantedBy.length === 0) {
            return [state];
        }
        var prevState = state.wantedBy[0];
        var childVisited = [state].concat(visited);
        var childResult = this.buildFirstStateStack(prevState, childVisited);
        if (childResult === null) {
            return null;
        }
        return [state].concat(childResult);
    };

    Parser.prototype.save = function() {
        var column = this.table[this.current];
        column.lexerState = this.lexerState;
        return column;
    };

    Parser.prototype.restore = function(column) {
        var index = column.index;
        this.current = index;
        this.table[index] = column;
        this.table.splice(index + 1);
        this.lexerState = column.lexerState;

        // Incrementally keep track of results
        this.results = this.finish();
    };

    // nb. deprecated: use save/restore instead!
    Parser.prototype.rewind = function(index) {
        if (!this.options.keepHistory) {
            throw new Error('set option `keepHistory` to enable rewinding')
        }
        // nb. recall column (table) indicies fall between token indicies.
        //        col 0   --   token 0   --   col 1
        this.restore(this.table[index]);
    };

    Parser.prototype.finish = function() {
        // Return the possible parsings
        var considerations = [];
        var start = this.grammar.start;
        var column = this.table[this.table.length - 1];
        column.states.forEach(function (t) {
            if (t.rule.name === start
                    && t.dot === t.rule.symbols.length
                    && t.reference === 0
                    && t.data !== Parser.fail) {
                considerations.push(t);
            }
        });
        return considerations.map(function(c) {return c.data; });
    };

    function getSymbolLongDisplay(symbol) {
        var type = typeof symbol;
        if (type === "string") {
            return symbol;
        } else if (type === "object") {
            if (symbol.literal) {
                return JSON.stringify(symbol.literal);
            } else if (symbol instanceof RegExp) {
                return 'character matching ' + symbol;
            } else if (symbol.type) {
                return symbol.type + ' token';
            } else if (symbol.test) {
                return 'token matching ' + String(symbol.test);
            } else {
                throw new Error('Unknown symbol type: ' + symbol);
            }
        }
    }

    function getSymbolShortDisplay(symbol) {
        var type = typeof symbol;
        if (type === "string") {
            return symbol;
        } else if (type === "object") {
            if (symbol.literal) {
                return JSON.stringify(symbol.literal);
            } else if (symbol instanceof RegExp) {
                return symbol.toString();
            } else if (symbol.type) {
                return '%' + symbol.type;
            } else if (symbol.test) {
                return '<' + String(symbol.test) + '>';
            } else {
                throw new Error('Unknown symbol type: ' + symbol);
            }
        }
    }

    return {
        Parser: Parser,
        Grammar: Grammar,
        Rule: Rule,
    };

}));
});

var moo = createCommonjsModule(function (module) {
(function(root, factory) {
  if (module.exports) {
    module.exports = factory();
  } else {
    root.moo = factory();
  }
}(commonjsGlobal, function() {

  var hasOwnProperty = Object.prototype.hasOwnProperty;
  var toString = Object.prototype.toString;
  var hasSticky = typeof new RegExp().sticky === 'boolean';

  /***************************************************************************/

  function isRegExp(o) { return o && toString.call(o) === '[object RegExp]' }
  function isObject(o) { return o && typeof o === 'object' && !isRegExp(o) && !Array.isArray(o) }

  function reEscape(s) {
    return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&')
  }
  function reGroups(s) {
    var re = new RegExp('|' + s);
    return re.exec('').length - 1
  }
  function reCapture(s) {
    return '(' + s + ')'
  }
  function reUnion(regexps) {
    if (!regexps.length) return '(?!)'
    var source =  regexps.map(function(s) {
      return "(?:" + s + ")"
    }).join('|');
    return "(?:" + source + ")"
  }

  function regexpOrLiteral(obj) {
    if (typeof obj === 'string') {
      return '(?:' + reEscape(obj) + ')'

    } else if (isRegExp(obj)) {
      // TODO: consider /u support
      if (obj.ignoreCase) throw new Error('RegExp /i flag not allowed')
      if (obj.global) throw new Error('RegExp /g flag is implied')
      if (obj.sticky) throw new Error('RegExp /y flag is implied')
      if (obj.multiline) throw new Error('RegExp /m flag is implied')
      return obj.source

    } else {
      throw new Error('Not a pattern: ' + obj)
    }
  }

  function objectToRules(object) {
    var keys = Object.getOwnPropertyNames(object);
    var result = [];
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var thing = object[key];
      var rules = [].concat(thing);
      if (key === 'include') {
        for (var j = 0; j < rules.length; j++) {
          result.push({include: rules[j]});
        }
        continue
      }
      var match = [];
      rules.forEach(function(rule) {
        if (isObject(rule)) {
          if (match.length) result.push(ruleOptions(key, match));
          result.push(ruleOptions(key, rule));
          match = [];
        } else {
          match.push(rule);
        }
      });
      if (match.length) result.push(ruleOptions(key, match));
    }
    return result
  }

  function arrayToRules(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
      var obj = array[i];
      if (obj.include) {
        var include = [].concat(obj.include);
        for (var j = 0; j < include.length; j++) {
          result.push({include: include[j]});
        }
        continue
      }
      if (!obj.type) {
        throw new Error('Rule has no type: ' + JSON.stringify(obj))
      }
      result.push(ruleOptions(obj.type, obj));
    }
    return result
  }

  function ruleOptions(type, obj) {
    if (!isObject(obj)) {
      obj = { match: obj };
    }
    if (obj.include) {
      throw new Error('Matching rules cannot also include states')
    }

    // nb. error and fallback imply lineBreaks
    var options = {
      defaultType: type,
      lineBreaks: !!obj.error || !!obj.fallback,
      pop: false,
      next: null,
      push: null,
      error: false,
      fallback: false,
      value: null,
      type: null,
      shouldThrow: false,
    };

    // Avoid Object.assign(), so we support IE9+
    for (var key in obj) {
      if (hasOwnProperty.call(obj, key)) {
        options[key] = obj[key];
      }
    }

    // type transform cannot be a string
    if (typeof options.type === 'string' && type !== options.type) {
      throw new Error("Type transform cannot be a string (type '" + options.type + "' for token '" + type + "')")
    }

    // convert to array
    var match = options.match;
    options.match = Array.isArray(match) ? match : match ? [match] : [];
    options.match.sort(function(a, b) {
      return isRegExp(a) && isRegExp(b) ? 0
           : isRegExp(b) ? -1 : isRegExp(a) ? +1 : b.length - a.length
    });
    return options
  }

  function toRules(spec) {
    return Array.isArray(spec) ? arrayToRules(spec) : objectToRules(spec)
  }

  var defaultErrorRule = ruleOptions('error', {lineBreaks: true, shouldThrow: true});
  function compileRules(rules, hasStates) {
    var errorRule = null;
    var fast = Object.create(null);
    var fastAllowed = true;
    var unicodeFlag = null;
    var groups = [];
    var parts = [];

    // If there is a fallback rule, then disable fast matching
    for (var i = 0; i < rules.length; i++) {
      if (rules[i].fallback) {
        fastAllowed = false;
      }
    }

    for (var i = 0; i < rules.length; i++) {
      var options = rules[i];

      if (options.include) {
        // all valid inclusions are removed by states() preprocessor
        throw new Error('Inheritance is not allowed in stateless lexers')
      }

      if (options.error || options.fallback) {
        // errorRule can only be set once
        if (errorRule) {
          if (!options.fallback === !errorRule.fallback) {
            throw new Error("Multiple " + (options.fallback ? "fallback" : "error") + " rules not allowed (for token '" + options.defaultType + "')")
          } else {
            throw new Error("fallback and error are mutually exclusive (for token '" + options.defaultType + "')")
          }
        }
        errorRule = options;
      }

      var match = options.match.slice();
      if (fastAllowed) {
        while (match.length && typeof match[0] === 'string' && match[0].length === 1) {
          var word = match.shift();
          fast[word.charCodeAt(0)] = options;
        }
      }

      // Warn about inappropriate state-switching options
      if (options.pop || options.push || options.next) {
        if (!hasStates) {
          throw new Error("State-switching options are not allowed in stateless lexers (for token '" + options.defaultType + "')")
        }
        if (options.fallback) {
          throw new Error("State-switching options are not allowed on fallback tokens (for token '" + options.defaultType + "')")
        }
      }

      // Only rules with a .match are included in the RegExp
      if (match.length === 0) {
        continue
      }
      fastAllowed = false;

      groups.push(options);

      // Check unicode flag is used everywhere or nowhere
      for (var j = 0; j < match.length; j++) {
        var obj = match[j];
        if (!isRegExp(obj)) {
          continue
        }

        if (unicodeFlag === null) {
          unicodeFlag = obj.unicode;
        } else if (unicodeFlag !== obj.unicode && options.fallback === false) {
          throw new Error('If one rule is /u then all must be')
        }
      }

      // convert to RegExp
      var pat = reUnion(match.map(regexpOrLiteral));

      // validate
      var regexp = new RegExp(pat);
      if (regexp.test("")) {
        throw new Error("RegExp matches empty string: " + regexp)
      }
      var groupCount = reGroups(pat);
      if (groupCount > 0) {
        throw new Error("RegExp has capture groups: " + regexp + "\nUse (?: … ) instead")
      }

      // try and detect rules matching newlines
      if (!options.lineBreaks && regexp.test('\n')) {
        throw new Error('Rule should declare lineBreaks: ' + regexp)
      }

      // store regex
      parts.push(reCapture(pat));
    }


    // If there's no fallback rule, use the sticky flag so we only look for
    // matches at the current index.
    //
    // If we don't support the sticky flag, then fake it using an irrefutable
    // match (i.e. an empty pattern).
    var fallbackRule = errorRule && errorRule.fallback;
    var flags = hasSticky && !fallbackRule ? 'ym' : 'gm';
    var suffix = hasSticky || fallbackRule ? '' : '|';

    if (unicodeFlag === true) flags += "u";
    var combined = new RegExp(reUnion(parts) + suffix, flags);
    return {regexp: combined, groups: groups, fast: fast, error: errorRule || defaultErrorRule}
  }

  function compile(rules) {
    var result = compileRules(toRules(rules));
    return new Lexer({start: result}, 'start')
  }

  function checkStateGroup(g, name, map) {
    var state = g && (g.push || g.next);
    if (state && !map[state]) {
      throw new Error("Missing state '" + state + "' (in token '" + g.defaultType + "' of state '" + name + "')")
    }
    if (g && g.pop && +g.pop !== 1) {
      throw new Error("pop must be 1 (in token '" + g.defaultType + "' of state '" + name + "')")
    }
  }
  function compileStates(states, start) {
    var all = states.$all ? toRules(states.$all) : [];
    delete states.$all;

    var keys = Object.getOwnPropertyNames(states);
    if (!start) start = keys[0];

    var ruleMap = Object.create(null);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      ruleMap[key] = toRules(states[key]).concat(all);
    }
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var rules = ruleMap[key];
      var included = Object.create(null);
      for (var j = 0; j < rules.length; j++) {
        var rule = rules[j];
        if (!rule.include) continue
        var splice = [j, 1];
        if (rule.include !== key && !included[rule.include]) {
          included[rule.include] = true;
          var newRules = ruleMap[rule.include];
          if (!newRules) {
            throw new Error("Cannot include nonexistent state '" + rule.include + "' (in state '" + key + "')")
          }
          for (var k = 0; k < newRules.length; k++) {
            var newRule = newRules[k];
            if (rules.indexOf(newRule) !== -1) continue
            splice.push(newRule);
          }
        }
        rules.splice.apply(rules, splice);
        j--;
      }
    }

    var map = Object.create(null);
    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      map[key] = compileRules(ruleMap[key], true);
    }

    for (var i = 0; i < keys.length; i++) {
      var name = keys[i];
      var state = map[name];
      var groups = state.groups;
      for (var j = 0; j < groups.length; j++) {
        checkStateGroup(groups[j], name, map);
      }
      var fastKeys = Object.getOwnPropertyNames(state.fast);
      for (var j = 0; j < fastKeys.length; j++) {
        checkStateGroup(state.fast[fastKeys[j]], name, map);
      }
    }

    return new Lexer(map, start)
  }

  function keywordTransform(map) {
    var reverseMap = Object.create(null);
    var byLength = Object.create(null);
    var types = Object.getOwnPropertyNames(map);
    for (var i = 0; i < types.length; i++) {
      var tokenType = types[i];
      var item = map[tokenType];
      var keywordList = Array.isArray(item) ? item : [item];
      keywordList.forEach(function(keyword) {
        (byLength[keyword.length] = byLength[keyword.length] || []).push(keyword);
        if (typeof keyword !== 'string') {
          throw new Error("keyword must be string (in keyword '" + tokenType + "')")
        }
        reverseMap[keyword] = tokenType;
      });
    }

    // fast string lookup
    // https://jsperf.com/string-lookups
    function str(x) { return JSON.stringify(x) }
    var source = '';
    source += 'switch (value.length) {\n';
    for (var length in byLength) {
      var keywords = byLength[length];
      source += 'case ' + length + ':\n';
      source += 'switch (value) {\n';
      keywords.forEach(function(keyword) {
        var tokenType = reverseMap[keyword];
        source += 'case ' + str(keyword) + ': return ' + str(tokenType) + '\n';
      });
      source += '}\n';
    }
    source += '}\n';
    return Function('value', source) // type
  }

  /***************************************************************************/

  var Lexer = function(states, state) {
    this.startState = state;
    this.states = states;
    this.buffer = '';
    this.stack = [];
    this.reset();
  };

  Lexer.prototype.reset = function(data, info) {
    this.buffer = data || '';
    this.index = 0;
    this.line = info ? info.line : 1;
    this.col = info ? info.col : 1;
    this.queuedToken = info ? info.queuedToken : null;
    this.queuedThrow = info ? info.queuedThrow : null;
    this.setState(info ? info.state : this.startState);
    this.stack = info && info.stack ? info.stack.slice() : [];
    return this
  };

  Lexer.prototype.save = function() {
    return {
      line: this.line,
      col: this.col,
      state: this.state,
      stack: this.stack.slice(),
      queuedToken: this.queuedToken,
      queuedThrow: this.queuedThrow,
    }
  };

  Lexer.prototype.setState = function(state) {
    if (!state || this.state === state) return
    this.state = state;
    var info = this.states[state];
    this.groups = info.groups;
    this.error = info.error;
    this.re = info.regexp;
    this.fast = info.fast;
  };

  Lexer.prototype.popState = function() {
    this.setState(this.stack.pop());
  };

  Lexer.prototype.pushState = function(state) {
    this.stack.push(this.state);
    this.setState(state);
  };

  var eat = hasSticky ? function(re, buffer) { // assume re is /y
    return re.exec(buffer)
  } : function(re, buffer) { // assume re is /g
    var match = re.exec(buffer);
    // will always match, since we used the |(?:) trick
    if (match[0].length === 0) {
      return null
    }
    return match
  };

  Lexer.prototype._getGroup = function(match) {
    var groupCount = this.groups.length;
    for (var i = 0; i < groupCount; i++) {
      if (match[i + 1] !== undefined) {
        return this.groups[i]
      }
    }
    throw new Error('Cannot find token type for matched text')
  };

  function tokenToString() {
    return this.value
  }

  Lexer.prototype.next = function() {
    var index = this.index;

    // If a fallback token matched, we don't need to re-run the RegExp
    if (this.queuedGroup) {
      var token = this._token(this.queuedGroup, this.queuedText, index);
      this.queuedGroup = null;
      this.queuedText = "";
      return token
    }

    var buffer = this.buffer;
    if (index === buffer.length) {
      return // EOF
    }

    // Fast matching for single characters
    var group = this.fast[buffer.charCodeAt(index)];
    if (group) {
      return this._token(group, buffer.charAt(index), index)
    }

    // Execute RegExp
    var re = this.re;
    re.lastIndex = index;
    var match = eat(re, buffer);

    // Error tokens match the remaining buffer
    var error = this.error;
    if (match == null) {
      return this._token(error, buffer.slice(index, buffer.length), index)
    }

    var group = this._getGroup(match);
    var text = match[0];

    if (error.fallback && match.index !== index) {
      this.queuedGroup = group;
      this.queuedText = text;

      // Fallback tokens contain the unmatched portion of the buffer
      return this._token(error, buffer.slice(index, match.index), index)
    }

    return this._token(group, text, index)
  };

  Lexer.prototype._token = function(group, text, offset) {
    // count line breaks
    var lineBreaks = 0;
    if (group.lineBreaks) {
      var matchNL = /\n/g;
      var nl = 1;
      if (text === '\n') {
        lineBreaks = 1;
      } else {
        while (matchNL.exec(text)) { lineBreaks++; nl = matchNL.lastIndex; }
      }
    }

    var token = {
      type: (typeof group.type === 'function' && group.type(text)) || group.defaultType,
      value: typeof group.value === 'function' ? group.value(text) : text,
      text: text,
      toString: tokenToString,
      offset: offset,
      lineBreaks: lineBreaks,
      line: this.line,
      col: this.col,
    };
    // nb. adding more props to token object will make V8 sad!

    var size = text.length;
    this.index += size;
    this.line += lineBreaks;
    if (lineBreaks !== 0) {
      this.col = size - nl + 1;
    } else {
      this.col += size;
    }

    // throw, if no rule with {error: true}
    if (group.shouldThrow) {
      throw new Error(this.formatError(token, "invalid syntax"))
    }

    if (group.pop) this.popState();
    else if (group.push) this.pushState(group.push);
    else if (group.next) this.setState(group.next);

    return token
  };

  if (typeof Symbol !== 'undefined' && Symbol.iterator) {
    var LexerIterator = function(lexer) {
      this.lexer = lexer;
    };

    LexerIterator.prototype.next = function() {
      var token = this.lexer.next();
      return {value: token, done: !token}
    };

    LexerIterator.prototype[Symbol.iterator] = function() {
      return this
    };

    Lexer.prototype[Symbol.iterator] = function() {
      return new LexerIterator(this)
    };
  }

  Lexer.prototype.formatError = function(token, message) {
    if (token == null) {
      // An undefined token indicates EOF
      var text = this.buffer.slice(this.index);
      var token = {
        text: text,
        offset: this.index,
        lineBreaks: text.indexOf('\n') === -1 ? 0 : 1,
        line: this.line,
        col: this.col,
      };
    }
    var start = Math.max(0, token.offset - token.col + 1);
    var eol = token.lineBreaks ? token.text.indexOf('\n') : token.text.length;
    var firstLine = this.buffer.substring(start, token.offset + eol);
    message += " at line " + token.line + " col " + token.col + ":\n\n";
    message += "  " + firstLine + "\n";
    message += "  " + Array(token.col).join(" ") + "^";
    return message
  };

  Lexer.prototype.clone = function() {
    return new Lexer(this.states, this.state)
  };

  Lexer.prototype.has = function(tokenType) {
    return true
  };


  return {
    compile: compile,
    states: compileStates,
    error: Object.freeze({error: true}),
    fallback: Object.freeze({fallback: true}),
    keywords: keywordTransform,
  }

}));
});

var nearleyLanguageBootstrapped = createCommonjsModule(function (module) {
// Generated automatically by nearley, version 2.19.5
// http://github.com/Hardmath123/nearley
(function () {
function id(x) { return x[0]; }

function getValue(d) {
    return d[0].value
}

function literals(list) {
    var rules = {};
    for (var lit of list) {
        rules[lit] = {match: lit, next: 'main'};
    }
    return rules
}

var moo$1 = moo;
var rules = Object.assign({
    ws: {match: /\s+/, lineBreaks: true, next: 'main'},
    comment: /\#.*/,
    arrow: {match: /[=-]+\>/, next: 'main'},
    js: {
        match: /\{\%(?:[^%]|\%[^}])*\%\}/,
        value: x => x.slice(2, -2),
        lineBreaks: true,
    },
    word: {match: /[\w\?\+]+/, next: 'afterWord'},
    string: {
        match: /"(?:[^\\"\n]|\\["\\/bfnrt]|\\u[a-fA-F0-9]{4})*"/,
        value: x => JSON.parse(x),
        next: 'main',
    },
    btstring: {
        match: /`[^`]*`/,
        value: x => x.slice(1, -1),
        next: 'main',
        lineBreaks: true,
    },
}, literals([
    ",", "|", "$", "%", "(", ")",
    ":?", ":*", ":+",
    "@include", "@builtin", "@",
    "]",
]));

var lexer = moo$1.states({
    main: Object.assign({}, rules, {
        charclass: {
            match: /\.|\[(?:\\.|[^\\\n])+?\]/,
            value: x => new RegExp(x),
        },
    }),
    // Both macro arguments and charclasses are both enclosed in [ ].
    // We disambiguate based on whether the previous token was a `word`.
    afterWord: Object.assign({}, rules, {
        "[": {match: "[", next: 'main'},
    }),
});

function insensitive(sl) {
    var s = sl.literal;
    var result = [];
    for (var i=0; i<s.length; i++) {
        var c = s.charAt(i);
        if (c.toUpperCase() !== c || c.toLowerCase() !== c) {
            result.push(new RegExp("[" + c.toLowerCase() + c.toUpperCase() + "]"));
            } else {
            result.push({literal: c});
        }
    }
    return {subexpression: [{tokens: result, postprocess: function(d) {return d.join(""); }}]};
}

var grammar = {
    Lexer: lexer,
    ParserRules: [
    {"name": "final$ebnf$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "final$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "final", "symbols": ["_", "prog", "_", "final$ebnf$1"], "postprocess": function(d) { return d[1]; }},
    {"name": "prog", "symbols": ["prod"], "postprocess": function(d) { return [d[0]]; }},
    {"name": "prog", "symbols": ["prod", "ws", "prog"], "postprocess": function(d) { return [d[0]].concat(d[2]); }},
    {"name": "prod", "symbols": ["word", "_", (lexer.has("arrow") ? {type: "arrow"} : arrow), "_", "expression+"], "postprocess": function(d) { return {name: d[0], rules: d[4]}; }},
    {"name": "prod", "symbols": ["word", {"literal":"["}, "_", "wordlist", "_", {"literal":"]"}, "_", (lexer.has("arrow") ? {type: "arrow"} : arrow), "_", "expression+"], "postprocess": function(d) {return {macro: d[0], args: d[3], exprs: d[9]}}},
    {"name": "prod", "symbols": [{"literal":"@"}, "_", "js"], "postprocess": function(d) { return {body: d[2]}; }},
    {"name": "prod", "symbols": [{"literal":"@"}, "word", "ws", "word"], "postprocess": function(d) { return {config: d[1], value: d[3]}; }},
    {"name": "prod", "symbols": [{"literal":"@include"}, "_", "string"], "postprocess": function(d) {return {include: d[2].literal, builtin: false}}},
    {"name": "prod", "symbols": [{"literal":"@builtin"}, "_", "string"], "postprocess": function(d) {return {include: d[2].literal, builtin: true }}},
    {"name": "expression+", "symbols": ["completeexpression"]},
    {"name": "expression+", "symbols": ["expression+", "_", {"literal":"|"}, "_", "completeexpression"], "postprocess": function(d) { return d[0].concat([d[4]]); }},
    {"name": "expressionlist", "symbols": ["completeexpression"]},
    {"name": "expressionlist", "symbols": ["expressionlist", "_", {"literal":","}, "_", "completeexpression"], "postprocess": function(d) { return d[0].concat([d[4]]); }},
    {"name": "wordlist", "symbols": ["word"]},
    {"name": "wordlist", "symbols": ["wordlist", "_", {"literal":","}, "_", "word"], "postprocess": function(d) { return d[0].concat([d[4]]); }},
    {"name": "completeexpression", "symbols": ["expr"], "postprocess": function(d) { return {tokens: d[0]}; }},
    {"name": "completeexpression", "symbols": ["expr", "_", "js"], "postprocess": function(d) { return {tokens: d[0], postprocess: d[2]}; }},
    {"name": "expr_member", "symbols": ["word"], "postprocess": id},
    {"name": "expr_member", "symbols": [{"literal":"$"}, "word"], "postprocess": function(d) {return {mixin: d[1]}}},
    {"name": "expr_member", "symbols": ["word", {"literal":"["}, "_", "expressionlist", "_", {"literal":"]"}], "postprocess": function(d) {return {macrocall: d[0], args: d[3]}}},
    {"name": "expr_member$ebnf$1", "symbols": [{"literal":"i"}], "postprocess": id},
    {"name": "expr_member$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "expr_member", "symbols": ["string", "expr_member$ebnf$1"], "postprocess": function(d) { if (d[1]) {return insensitive(d[0]); } else {return d[0]; } }},
    {"name": "expr_member", "symbols": [{"literal":"%"}, "word"], "postprocess": function(d) {return {token: d[1]}}},
    {"name": "expr_member", "symbols": ["charclass"], "postprocess": id},
    {"name": "expr_member", "symbols": [{"literal":"("}, "_", "expression+", "_", {"literal":")"}], "postprocess": function(d) {return {'subexpression': d[2]} ;}},
    {"name": "expr_member", "symbols": ["expr_member", "_", "ebnf_modifier"], "postprocess": function(d) {return {'ebnf': d[0], 'modifier': d[2]}; }},
    {"name": "ebnf_modifier", "symbols": [{"literal":":+"}], "postprocess": getValue},
    {"name": "ebnf_modifier", "symbols": [{"literal":":*"}], "postprocess": getValue},
    {"name": "ebnf_modifier", "symbols": [{"literal":":?"}], "postprocess": getValue},
    {"name": "expr", "symbols": ["expr_member"]},
    {"name": "expr", "symbols": ["expr", "ws", "expr_member"], "postprocess": function(d){ return d[0].concat([d[2]]); }},
    {"name": "word", "symbols": [(lexer.has("word") ? {type: "word"} : word)], "postprocess": getValue},
    {"name": "string", "symbols": [(lexer.has("string") ? {type: "string"} : string)], "postprocess": d => ({literal: d[0].value})},
    {"name": "string", "symbols": [(lexer.has("btstring") ? {type: "btstring"} : btstring)], "postprocess": d => ({literal: d[0].value})},
    {"name": "charclass", "symbols": [(lexer.has("charclass") ? {type: "charclass"} : charclass)], "postprocess": getValue},
    {"name": "js", "symbols": [(lexer.has("js") ? {type: "js"} : js)], "postprocess": getValue},
    {"name": "_$ebnf$1", "symbols": ["ws"], "postprocess": id},
    {"name": "_$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "_", "symbols": ["_$ebnf$1"]},
    {"name": "ws", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)]},
    {"name": "ws$ebnf$1", "symbols": [(lexer.has("ws") ? {type: "ws"} : ws)], "postprocess": id},
    {"name": "ws$ebnf$1", "symbols": [], "postprocess": function(d) {return null;}},
    {"name": "ws", "symbols": ["ws$ebnf$1", (lexer.has("comment") ? {type: "comment"} : comment), "_"]}
]
  , ParserStart: "final"
};
{
   module.exports = grammar;
}
})();
});

/*
  MIT License
  Copyright (c) 2019 Guillermo Webster
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function compileLowLevel(structure, opts) {
	var unique = uniquer();
	if (!opts.alreadycompiled) {
		opts.alreadycompiled = [];
	}

	var result = {
		rules: [],
		body: [], // @directives list
		config: {}, // @config value
		customTokens: [], // %tokens
		macros: {},
		start: ""
	};

	for (var i = 0; i < structure.length; i++) {
		var productionRule = structure[i];
		markRange(
			productionRule.name,
			productionRule.pos,
			productionRule.name && productionRule.name.length
		);

		if (productionRule.body) {
			// This isn't a rule, it's an @directive.
			if (!opts.nojs) {
				result.body.push(productionRule.body);
			}
		} else if (productionRule.include) {
			// Include file
			var path;
			if (!productionRule.builtin) {
				path = require("path").resolve(
					opts.file ? require("path").dirname(opts.file) : process.cwd(),
					productionRule.include
				);
			} else {
				path = productionRule.include;
			}
			if (opts.alreadycompiled.indexOf(path) === -1) {
				opts.alreadycompiled.push(path);
				if (path === "postprocessors.ne") {
					var f = require("nearley/builtin/postprocessors.ne");
				} else if (path === "whitespace.ne") {
					var f = require("nearley/builtin/whitespace.ne");
				} else if (path === "string.ne") {
					var f = require("nearley/builtin/string.ne");
				} else if (path === "number.ne") {
					var f = require("nearley/builtin/number.ne");
				} else if (path === "cow.ne") {
					var f = require("nearley/builtin/cow.ne");
				}

				var parserGrammar = nearley.Grammar.fromCompiled(nearleyLanguageBootstrapped);
				var parser = new nearley.Parser(parserGrammar);
				parser.feed(f);
				var c = Compile(parser.results[0], {
					file: path,
					__proto__: opts
				});

				result.rules = result.rules.concat(c.rules);
				result.body = result.body.concat(c.body);
				// result.customTokens = result.customTokens.concat(c.customTokens);
				Object.keys(c.config).forEach(function(k) {
					result.config[k] = c.config[k];
				});
				Object.keys(c.macros).forEach(function(k) {
					result.macros[k] = c.macros[k];
				});
			}
		} else if (productionRule.macro) {
			result.macros[productionRule.macro] = {
				args: productionRule.args,
				exprs: productionRule.exprs
			};
		} else if (productionRule.config) {
			// This isn't a rule, it's an @config.
			result.config[productionRule.config] = productionRule.value;
		} else {
			produceRules(productionRule.name, productionRule.rules, {});
			if (!result.start) {
				result.start = productionRule.name;
			}
		}
	}

	return result;

	function markRange(name, start, length) {
		// console.log(name, [start, start + length])
		if (opts.rangeCallback) {
			opts.rangeCallback(name, start, start + length);
		}
	}

	function produceRules(name, rules, env) {
		for (var i = 0; i < rules.length; i++) {
			var rule = buildRule(name, rules[i], env);
			if (opts.nojs) {
				rule.postprocess = null;
			}
			result.rules.push(rule);
		}
	}

	function buildRule(ruleName, rule, env) {
		var tokens = [];
		for (var i = 0; i < rule.tokens.length; i++) {
			var token = buildToken(ruleName, rule.tokens[i], env);
			if (token !== null) {
				tokens.push(token);
			}
		}
		return new nearley.Rule(ruleName, tokens, rule.postprocess);
	}

	function buildToken(ruleName, token, env) {
		if (typeof token === "string") {
			if (token === "null") {
				return null;
			}
			return token;
		}

		if (token instanceof RegExp) {
			return token;
		}

		if (token.literal) {
			if (!token.literal.length) {
				return null;
			}
			if (token.literal.length === 1 || result.config.lexer) {
				return token;
			}
			return buildStringToken(ruleName, token, env);
		}
		if (token.token) {
			if (result.config.lexer) {
				var name = token.token;
				if (result.customTokens.indexOf(name) === -1) {
					result.customTokens.push(name);
				}
				var expr =
					result.config.lexer +
					".has(" +
					JSON.stringify(name) +
					") ? {type: " +
					JSON.stringify(name) +
					"} : " +
					name;
				return { token: "(" + expr + ")" };
			}

			return token;
		}

		if (token.subexpression) {
			return buildSubExpressionToken(ruleName, token, env);
		}

		if (token.ebnf) {
			return buildEBNFToken(ruleName, token, env);
		}

		if (token.macrocall) {
			return buildMacroCallToken(ruleName, token, env);
		}

		if (token.mixin) {
			if (env[token.mixin]) {
				return buildToken(ruleName, env[token.mixin], env);
			} else {
				throw new Error("Unbound variable: " + token.mixin);
			}
		}

		throw new Error("unrecognized token: " + JSON.stringify(token));
	}

	function buildStringToken(ruleName, token, env) {
		var newname = unique(ruleName + "$string");
		markRange(newname, token.pos, JSON.stringify(token.literal).length);

		produceRules(
			newname,
			[
				{
					tokens: token.literal.split("").map(function charLiteral(d) {
						return {
							literal: d
						};
					}),
					postprocess: { builtin: "joiner" }
				}
			],
			env
		);
		return newname;
	}

	function buildSubExpressionToken(ruleName, token, env) {
		var data = token.subexpression;
		var name = unique(ruleName + "$subexpression");
		//structure.push({"name": name, "rules": data});
		produceRules(name, data, env);
		return name;
	}

	function buildEBNFToken(ruleName, token, env) {
		switch (token.modifier) {
			case ":+":
				return buildEBNFPlus(ruleName, token, env);
			case ":*":
				return buildEBNFStar(ruleName, token, env);
			case ":?":
				return buildEBNFOpt(ruleName, token, env);
		}
	}

	function buildEBNFPlus(ruleName, token, env) {
		var name = unique(ruleName + "$ebnf");
		/*
        structure.push({
            name: name,
            rules: [{
                tokens: [token.ebnf],
            }, {
                tokens: [token.ebnf, name],
                postprocess: {builtin: "arrconcat"}
            }]
        });
        */
		produceRules(
			name,
			[
				{
					tokens: [token.ebnf]
				},
				{
					tokens: [token.ebnf, name],
					postprocess: { builtin: "arrconcat" }
				}
			],
			env
		);
		return name;
	}

	function buildEBNFStar(ruleName, token, env) {
		var name = unique(ruleName + "$ebnf");
		/*
        structure.push({
            name: name,
            rules: [{
                tokens: [],
            }, {
                tokens: [token.ebnf, name],
                postprocess: {builtin: "arrconcat"}
            }]
        });
        */
		produceRules(
			name,
			[
				{
					tokens: []
				},
				{
					tokens: [token.ebnf, name],
					postprocess: { builtin: "arrconcat" }
				}
			],
			env
		);
		return name;
	}

	function buildEBNFOpt(ruleName, token, env) {
		var name = unique(ruleName + "$ebnf");
		/*
        structure.push({
            name: name,
            rules: [{
                tokens: [token.ebnf],
                postprocess: {builtin: "id"}
            }, {
                tokens: [],
                postprocess: {builtin: "nuller"}
            }]
        });
        */
		produceRules(
			name,
			[
				{
					tokens: [token.ebnf],
					postprocess: { builtin: "id" }
				},
				{
					tokens: [],
					postprocess: { builtin: "nuller" }
				}
			],
			env
		);
		return name;
	}

	function buildMacroCallToken(ruleName, token, env) {
		var name = unique(ruleName + "$macrocall");
		var macro = result.macros[token.macrocall];
		if (!macro) {
			throw new Error("Unkown macro: " + token.macrocall);
		}
		if (macro.args.length !== token.args.length) {
			throw new Error("Argument count mismatch.");
		}
		var newenv = { __proto__: env };
		for (var i = 0; i < macro.args.length; i++) {
			var argrulename = unique(ruleName + "$macrocall");
			newenv[macro.args[i]] = argrulename;
			produceRules(argrulename, [token.args[i]], env);
			//structure.push({"name": argrulename, "rules":[token.args[i]]});
			//buildRule(name, token.args[i], env);
		}
		produceRules(name, macro.exprs, newenv);
		return name;
	}
}

function uniquer() {
	var uns = {};
	return unique;
	function unique(name) {
		var un = (uns[name] = (uns[name] || 0) + 1);
		return name + "$" + un;
	}
}

var generate = createCommonjsModule(function (module) {
(function(root, factory) {
    if (module.exports) {
        module.exports = factory(nearley);
    } else {
        root.generate = factory(root.nearley);
    }
}(commonjsGlobal, function(nearley) {

    function serializeRules(rules, builtinPostprocessors, extraIndent) {
        if (extraIndent == null) {
            extraIndent = '';
        }

        return '[\n    ' + rules.map(function(rule) {
            return serializeRule(rule, builtinPostprocessors);
        }).join(',\n    ') + '\n' + extraIndent + ']';
    }

    function dedentFunc(func) {
        var lines = func.toString().split(/\n/);

        if (lines.length === 1) {
            return [lines[0].replace(/^\s+|\s+$/g, '')];
        }

        var indent = null;
        var tail = lines.slice(1);
        for (var i = 0; i < tail.length; i++) {
            var match = /^\s*/.exec(tail[i]);
            if (match && match[0].length !== tail[i].length) {
                if (indent === null ||
                    match[0].length < indent.length) {
                    indent = match[0];
                }
            }
        }

        if (indent === null) {
            return lines;
        }

        return lines.map(function dedent(line) {
            if (line.slice(0, indent.length) === indent) {
                return line.slice(indent.length);
            }
            return line;
        });
    }

    function tabulateString(string, indent, options) {
        var lines;
        if(Array.isArray(string)) {
          lines = string;
        } else {
          lines = string.toString().split('\n');
        }

        options = options || {};
        var tabulated = lines.map(function addIndent(line, i) {
            var shouldIndent = true;

            if(i == 0 && !options.indentFirst) {
              shouldIndent = false;
            }

            if(shouldIndent) {
                return indent + line;
            } else {
                return line;
            }
        }).join('\n');

        return tabulated;
    }

    function serializeSymbol(s) {
        if (s instanceof RegExp) {
            return s.toString();
        } else if (s.token) {
            return s.token;
        } else {
            return JSON.stringify(s);
        }
    }

    function serializeRule(rule, builtinPostprocessors) {
        var ret = '{';
        ret += '"name": ' + JSON.stringify(rule.name);
        ret += ', "symbols": [' + rule.symbols.map(serializeSymbol).join(', ') + ']';
        if (rule.postprocess) {
            if(rule.postprocess.builtin) {
                rule.postprocess = builtinPostprocessors[rule.postprocess.builtin];
            }
            ret += ', "postprocess": ' + tabulateString(dedentFunc(rule.postprocess), '        ', {indentFirst: false});
        }
        ret += '}';
        return ret;
    }

    var generate = function (parser, exportName) {
        if(!parser.config.preprocessor) {
            parser.config.preprocessor = "_default";
        }

        if(!generate[parser.config.preprocessor]) {
            throw new Error("No such preprocessor: " + parser.config.preprocessor)
        }

        return generate[parser.config.preprocessor](parser, exportName);
    };

    generate.js = generate._default = generate.javascript = function (parser, exportName) {
        var output = "// Generated automatically by nearley, version " + parser.version + "\n";
        output +=  "// http://github.com/Hardmath123/nearley\n";
        output += "(function () {\n";
        output += "function id(x) { return x[0]; }\n";
        output += parser.body.join('\n');
        output += "var grammar = {\n";
        output += "    Lexer: " + parser.config.lexer + ",\n";
        output += "    ParserRules: " +
            serializeRules(parser.rules, generate.javascript.builtinPostprocessors)
            + "\n";
        output += "  , ParserStart: " + JSON.stringify(parser.start) + "\n";
        output += "}\n";
        output += "if (typeof module !== 'undefined'"
            + "&& typeof module.exports !== 'undefined') {\n";
        output += "   module.exports = grammar;\n";
        output += "} else {\n";
        output += "   window." + exportName + " = grammar;\n";
        output += "}\n";
        output += "})();\n";
        return output;
    };

    generate.javascript.builtinPostprocessors = {
        "joiner": "function joiner(d) {return d.join('');}",
        "arrconcat": "function arrconcat(d) {return [d[0]].concat(d[1]);}",
        "arrpush": "function arrpush(d) {return d[0].concat([d[1]]);}",
        "nuller": "function(d) {return null;}",
        "id": "id"
    };

    generate.module = generate.esmodule = function (parser, exportName) {
        var output = "// Generated automatically by nearley, version " + parser.version + "\n";
        output +=  "// http://github.com/Hardmath123/nearley\n";
        output += "function id(x) { return x[0]; }\n";
        output += parser.body.join('\n');
        output += "let Lexer = " + parser.config.lexer + ";\n";
        output += "let ParserRules = " + serializeRules(parser.rules, generate.javascript.builtinPostprocessors) + ";\n";
        output += "let ParserStart = " + JSON.stringify(parser.start) + ";\n";
        output += "export default { Lexer, ParserRules, ParserStart };\n";
        return output;
    };

    generate.cs = generate.coffee = generate.coffeescript = function (parser, exportName) {
        var output = "# Generated automatically by nearley, version " + parser.version + "\n";
        output +=  "# http://github.com/Hardmath123/nearley\n";
        output += "do ->\n";
        output += "  id = (d) -> d[0]\n";
        output += tabulateString(dedentFunc(parser.body.join('\n')), '  ') + '\n';
        output += "  grammar = {\n";
        output += "    Lexer: " + parser.config.lexer + ",\n";
        output += "    ParserRules: " +
            tabulateString(
                    serializeRules(parser.rules, generate.coffeescript.builtinPostprocessors),
                    '      ',
                    {indentFirst: false})
        + ",\n";
        output += "    ParserStart: " + JSON.stringify(parser.start) + "\n";
        output += "  }\n";
        output += "  if typeof module != 'undefined' "
            + "&& typeof module.exports != 'undefined'\n";
        output += "    module.exports = grammar;\n";
        output += "  else\n";
        output += "    window." + exportName + " = grammar;\n";
        return output;
    };

    generate.coffeescript.builtinPostprocessors = {
        "joiner": "(d) -> d.join('')",
        "arrconcat": "(d) -> [d[0]].concat(d[1])",
        "arrpush": "(d) -> d[0].concat([d[1]])",
        "nuller": "() -> null",
        "id": "id"
    };

    generate.ts = generate.typescript = function (parser, exportName) {
        var output = "// Generated automatically by nearley, version " + parser.version + "\n";
        output +=  "// http://github.com/Hardmath123/nearley\n";
        output +=  "// Bypasses TS6133. Allow declared but unused functions.\n";
        output +=  "// @ts-ignore\n";
        output += "function id(d: any[]): any { return d[0]; }\n";
        output += parser.customTokens.map(function (token) { return "declare var " + token + ": any;\n" }).join("");
        output += parser.body.join('\n');
        output += "\n";
        output += "interface NearleyToken {\n";
        output += "  value: any;\n";
        output += "  [key: string]: any;\n";
        output += "};\n";
        output += "\n";
        output += "interface NearleyLexer {\n";
        output += "  reset: (chunk: string, info: any) => void;\n";
        output += "  next: () => NearleyToken | undefined;\n";
        output += "  save: () => any;\n";
        output += "  formatError: (token: never) => string;\n";
        output += "  has: (tokenType: string) => boolean;\n";
        output += "};\n";
        output += "\n";
        output += "interface NearleyRule {\n";
        output += "  name: string;\n";
        output += "  symbols: NearleySymbol[];\n";
        output += "  postprocess?: (d: any[], loc?: number, reject?: {}) => any;\n";
        output += "};\n";
        output += "\n";
        output += "type NearleySymbol = string | { literal: any } | { test: (token: any) => boolean };\n";
        output += "\n";
        output += "interface Grammar {\n";
        output += "  Lexer: NearleyLexer | undefined;\n";
        output += "  ParserRules: NearleyRule[];\n";
        output += "  ParserStart: string;\n";
        output += "};\n";
        output += "\n";
        output += "const grammar: Grammar = {\n";
        output += "  Lexer: " + parser.config.lexer + ",\n";
        output += "  ParserRules: " + serializeRules(parser.rules, generate.typescript.builtinPostprocessors, "  ") + ",\n";
        output += "  ParserStart: " + JSON.stringify(parser.start) + ",\n";
        output += "};\n";
        output += "\n";
        output += "export default grammar;\n";

        return output;
    };

    generate.typescript.builtinPostprocessors = {
        "joiner": "(d) => d.join('')",
        "arrconcat": "(d) => [d[0]].concat(d[1])",
        "arrpush": "(d) => d[0].concat([d[1]])",
        "nuller": "() => null",
        "id": "id"
    };

    return generate;

}));
});

// Node-only

var warn = function (opts, str) {
    opts.out.write("WARN"+"\t" + str + "\n");
};

function lintNames(grm, opts) {
    var all = [];
    grm.rules.forEach(function(rule) {
        all.push(rule.name);
    });
    grm.rules.forEach(function(rule) {
        rule.symbols.forEach(function(symbol) {
            if (!symbol.literal && !symbol.token && symbol.constructor !== RegExp) {
                if (all.indexOf(symbol) === -1) {
                    warn(opts,"Undefined symbol `" + symbol + "` used.");
                }
            }
        });
    });
}

function lint(grm, opts) {
    if (!opts.out) opts.out = process.stderr;
    lintNames(grm, opts);
}

var lint_1 = lint;

var objectID = 0;

var vars = {};

var jsFuncMap = {
	saw: {
		setup: (o, p) => `${o} = new Module.maxiOsc();
                      ${o}.phaseReset(${p.length > 1 ? p[1].loop : 0.0});`,
		loop: (o, p) => `${o}.saw(${p[0].loop})`,
	},
	sin: {
		setup: (o, p) => `${o} = new Module.maxiOsc();
                      ${o}.phaseReset(${p.length > 1 ? p[1].loop : 0.0});`,
		loop: (o, p) => `${o}.sinewave(${p[0].loop})`,
	},
	tri: {
		setup: (o, p) => `${o} = new Module.maxiOsc();
                      ${o}.phaseReset(${p.length > 1 ? p[1].loop : 0.0});`,
		loop: (o, p) => `${o}.triangle(${p[0].loop})`,
	},
	pha: {
		setup: (o, p) => `${o} = new Module.maxiOsc();
                      ${o}.phaseReset(${p.length > 1 ? p[1].loop : 0.0});`,
		loop: (o, p) => `${o}.phasor(${p[0].loop})`,
	},
	ph2: {
		setup: (o, p) => `${o} = new Module.maxiOsc();
                      ${o}.phaseReset(${p.length > 3 ? p[3].loop : 0.0});`,
		loop: (o, p) =>
			`${o}.phasorBetween(${p[0].loop},${p[1].loop},${p[2].loop})`,
	},
	sqr: {
		setup: (o, p) => `${o} = new Module.maxiOsc();
                      ${o}.phaseReset(${p.length > 1 ? p[1].loop : 0.0});`,
		loop: (o, p) => `${o}.square(${p[0].loop})`,
	},
	pul: {
		setup: (o, p) => `${o} = new Module.maxiOsc();
                      ${o}.phaseReset(${p.length > 2 ? p[2].loop : 0.0});`,
		loop: (o, p) => `${o}.pulse(${p[0].loop},${p[1].loop})`,
	},
	imp: {
		setup: (o, p) => `${o} = new Module.maxiOsc();
                      ${o}.phaseReset(${p.length > 1 ? p[1].loop : 0.0});`,
		loop: (o, p) => `${o}.impulse(${p[0].loop})`,
	},
	sawn: {
		setup: (o, p) => `${o} = new Module.maxiOsc();
                      ${o}.phaseReset(${p.length > 1 ? p[1].loop : 0.0});`,
		loop: (o, p) => `${o}.sawn(${p[0].loop})`,
	},
	noiz: {
		setup: (o, p) => `${o} = new Module.maxiOsc()`,
		loop: (o, p) => `${o}.noise()*${p[0].loop}`,
	},
	gt: {
		setup: (o, p) => "",
		loop: (o, p) => `((${p[0].loop} > ${p[1].loop}) ? 1 : 0)`,
	},
	lt: {
		setup: (o, p) => "",
		loop: (o, p) => `((${p[0].loop} < ${p[1].loop}) ? 1 : 0)`,
	},
	mod: {
		setup: (o, p) => "",
		loop: (o, p) => `(${p[0].loop} % ${p[1].loop})`,
	},
	add: {
		setup: (o, p) => "",
		loop: (o, p) => `(${p[0].loop} + ${p[1].loop})`,
	},
	mul: {
		setup: (o, p) => "",
		loop: (o, p) => `(${p[0].loop} * ${p[1].loop})`,
	},
	sub: {
		setup: (o, p) => "",
		loop: (o, p) => `(${p[0].loop} - ${p[1].loop})`,
	},
	div: {
		setup: (o, p) => "",
		loop: (o, p) => `(${p[1].loop} != 0 ? ${p[0].loop}/${p[1].loop} : 0)`,
	},
	pow: {
		setup: (o, p) => "",
		loop: (o, p) => `Math.pow(${p[0].loop},${p[1].loop})`,
	},
	abs: {
		setup: (o, p) => "",
		loop: (o, p) => `Math.abs(${p[0].loop})`,
	},
	env: {
		setup: (o, p) => `${o} = new Module.maxiEnv();
                      ${o}.setAttack(${p[1].loop});
                      ${o}.setDecay(${p[2].loop});
                      ${o}.setSustain(${p[3].loop});
                      ${o}.setRelease(${p[4].loop})`,
		loop: (o, p) => `${o}.adsr(1,${p[0].loop})`,
	},
	sum: {
		setup: (o, p) => "",
		loop: (o, p) => {
			let s = `(${p[0].loop}`;
			for (let i = 1; i < p.length; i++) s += `+${p[i].loop}`;
			return s + ")";
		},
	},
	mix: {
		setup: (o, p) => "",
		loop: (o, p) => {
			let s = `((${p[0].loop}`;
			for (let i = 1; i < p.length; i++) s += `+${p[i].loop}`;
			return s + `)/${p.length})`;
		},
	},
	prod: {
		setup: (o, p) => "",
		loop: (o, p) => {
			let s = `(${p[0].loop}`;
			for (let i = 1; i < p.length; i++) s += `*${p[i].loop}`;
			return s + ")";
		},
	},
	blin: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`Module.maxiMap.linlin(${p[0].loop}, -1, 1, ${p[1].loop}, ${p[2].loop})`,
	},
	ulin: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`Module.maxiMap.linlin(${p[0].loop}, 0, 1, ${p[1].loop}, ${p[2].loop})`,
	},
	bexp: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`Module.maxiMap.linexp(${p[0].loop}, -1, 1, ${p[1].loop}, ${p[2].loop})`,
	},
	uexp: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`Module.maxiMap.linexp(${p[0].loop}, 0.0000001, 1, ${p[1].loop}, ${p[2].loop})`,
	},
	linlin: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`Module.maxiMap.linlin(${p[0].loop}, ${p[1].loop}, ${p[2].loop},${p[3].loop}, ${p[4].loop})`,
	},
	linexp: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`Module.maxiMap.linexp(${p[0].loop}, ${p[1].loop}, ${p[2].loop}, ${p[3].loop}, ${p[4].loop})`,
	},
	dist: {
		setup: (o, p) => `${o} = new Module.maxiNonlinearity()`,
		loop: (o, p) => `${o}.atanDist(${p[0].loop},${p[1].loop})`,
	},
	softclip: {
		setup: (o, p) => `${o} = new Module.maxiNonlinearity()`,
		loop: (o, p) => `${o}.softclip(${p[0].loop})`,
	},
	hardclip: {
		setup: (o, p) => `${o} = new Module.maxiNonlinearity()`,
		loop: (o, p) => `${o}.hardclip(${p[0].loop})`,
	},
	asymclip: {
		setup: (o, p) => `${o} = new Module.maxiNonlinearity()`,
		loop: (o, p) => `${o}.asymclip(${p[0].loop},${p[1].loop},${p[2].loop})`,
	},
	flange: {
		setup: (o, p) => `${o} = new Module.maxiFlanger()`,
		loop: (o, p) =>
			`${o}.flange(${p[0].loop},${p[1].loop},${p[2].loop},${p[3].loop},${p[4].loop})`,
	},
	chor: {
		setup: (o, p) => `${o} = new Module.maxiChorus()`,
		loop: (o, p) =>
			`${o}.chorus(${p[0].loop},${p[1].loop},${p[2].loop},${p[3].loop},${p[4].loop})`,
	},
	dl: {
		setup: (o, p) => `${o} = new Module.maxiDelayline()`,
		loop: (o, p) => `${o}.dl(${p[0].loop},${p[1].loop},${p[2].loop})`,
	},
	lpf: {
		setup: (o, p) => `${o} = new Module.maxiFilter()`,
		loop: (o, p) => `${o}.lopass(${p[0].loop},${p[1].loop})`,
	},
	hpf: {
		setup: (o, p) => `${o} = new Module.maxiFilter()`,
		loop: (o, p) => `${o}.hipass(${p[0].loop},${p[1].loop})`,
	},
	lpz: {
		setup: (o, p) => `${o} = new Module.maxiFilter()`,
		loop: (o, p) => `${o}.lores(${p[0].loop},${p[1].loop},${p[2].loop})`,
	},
	hpz: {
		setup: (o, p) => `${o} = new Module.maxiFilter()`,
		loop: (o, p) => `${o}.hires(${p[0].loop},${p[1].loop},${p[2].loop})`,
	},

	// `toJS`: { //freq, data, channel
	// 	setup: (o, p) => `${o} = this.createMLOutputTransducer(${p[0].loop})`,
	// 	loop:  (o, p) => `${o}.send(${p[1].loop}, ${p[2].loop})`
	// },
	scop: {
		//freq, data, channel, [blocksize]
		setup: (o, p) =>
			`${o} = new SABOutputTransducer(outputSABs,
                                      this.port,
                                      'scope',
                                      ${p[1].loop},
                                      this.currentSample,
                                      ${p.length == 3 ? 1 : p[3].loop})`,
		loop: (o, p) => `${o}.send(${p[0].loop}, ${p[2].loop})`,
	},

	toJS: {
		//freq, data, channel, [blocksize]
		setup: (o, p) =>
			`${o} = new SABOutputTransducer(outputSABs,
                                      this.port,
                                      'ML',
                                      ${p[1].loop},
                                      this.currentSample,
                                      ${p.length == 3 ? 1 : p[3].loop})`,
		loop: (o, p) => `${o}.send(${p[0].loop}, ${p[2].loop})`,
	},
	fromJS: {
		//channel
		// setup: (o, p) => `${o} = this.registerInputTransducer('ML', ${p[0].loop})`,
		// loop:  (o, p) => `${o}.getValue()`
		setup: (o, p) =>
			`${o} = new SABInputTransducer(${p[0].loop}, ${p.length == 2 ? 1 : 0})`,
		loop: (o, p) =>
			`${o}.getSABValue(inputSABs, ${p.length == 2 ? p[1].loop : 0})`,
	},
	mouseX: {
		setup: (o, p) => ``,
		loop: (o, p) => `this.getSABValue('mxy')[0]`,
	},
	mouseY: {
		setup: (o, p) => ``,
		loop: (o, p) => `this.getSABValue('mxy')[1]`,
	},
	at: {
		setup: (o, p) => ``,
		loop: (o, p) =>
			`${p[0].loop}[Math.min(${p[1].loop}, ${p[0].loop}.length-1)]`,
	},

	// toPeer: { //value, dest, channel, frequency
	//   setup: (o, p) => `${o} = this.createNetOutputTransducer(${p[3].loop})`,
	// 	loop:  (o, p) => `${o}.send(${p[0].loop},[${p[1].loop},${p[2].loop}])`
	// },
	// fromPeer: { //source, channel
	// 	setup: (o, p) => `${o} = this.registerInputTransducer('NET', [${p[0].loop}, ${p[1].loop}])`,
	// 	loop:  (o, p) => `${o}.getValue()`
	// },

	// oscin: {
	// 	setup: (o, p) => "",
	// 	loop:  (o, p) => `this.OSCTransducer(${p[0].loop},${p[1].loop})`
	// },
	// oscout: {
	// 	setup: (o, p) => "",
	// 	loop:  (o, p) => `this.OSCTransducer(${p[0].loop},${p[1].loop})`
	// },

	sah: {
		setup: (o, p) => `${o} = new Module.maxiSampleAndHold();`,
		loop: (o, p) => `${o}.sah(${p[0].loop},${p[1].loop})`,
	},
	stretch: {
		setup: (o, p) => `${o} = new Module.maxiSample();
                      ${o}.setSample(this.getSampleBuffer(${p[4].loop}));
                      ${o}stretch = new Module.maxiStretch();
                      ${o}stretch.setSample(${o});`,
		loop: (o, p) =>
			`(${o}.isReady() ? ${o}stretch.play(${p[0].loop},${p[1].loop},${p[2].loop},${p[3].loop},0.0) : 0.0)`,
	},
	// 'adc': {"setup":(o,p)=>"", "loop":(o,p)=>`inputs[${p[0].loop}]`},
	adc: { setup: (o, p) => "", loop: (o, p) => `(inputs * ${p[0].loop})` },
	sampler: {
		setup: (o, p) => `${o} = new Module.maxiSample();
                      ${o}.setSample(this.getSampleBuffer(${
			p[p.length - 1].loop
		}));`,
		loop: (o, p) => {
			let playArgs = `${p[0].loop}`;
			if (p.length == 3) {
				playArgs += `,${p[1].loop}`;
			} else if (p.length == 4) {
				playArgs += `,${p[1].loop},${p[2].loop}`;
			}
			return `(${o}.isReady() ? ${o}.playOnZX(${playArgs}) : 0.0)`;
		},
	},
	loop: {
		setup: (o, p) => `${o} = new Module.maxiSample();
                      ${o}.setSample(this.getSampleBuffer(${p[1].loop}));`,
		loop: (o, p) => `(${o}.isReady() ? ${o}.play(${p[0].loop}) : 0.0)`,
	},
	slice: {
		setup: (o, p) => `${o} = new Module.maxiSample();
                      ${o}.setSample(this.getSampleBuffer(${p[2].loop}));`,
		loop: (o, p) =>
			`(${o}.isReady() ? ${o}.loopSetPosOnZX(${p[0].loop},${p[1].loop}) : 0.0)`,
	},
	oscin: {
		setup: (o, p) => "",
		loop: (o, p) => `this.OSCTransducer(${p[0].loop},${p[1].loop})`,
	},
	oscout: {
		setup: (o, p) => "",
		loop: (o, p) => `this.OSCTransducer(${p[0].loop},${p[1].loop})`,
	},
	sah: {
		setup: (o, p) => `${o} = new Module.maxiSampleAndHold();`,
		loop: (o, p) => `${o}.sah(${p[0].loop},${p[1].loop})`,
	},
	stretch: {
		setup: (o, p) => `${o} = new Module.maxiSample();
                      ${o}.setSample(this.getSampleBuffer(${p[4].loop}));
                      ${o}stretch = new Module.maxiStretch();
                      ${o}stretch.setSample(${o});`,
		loop: (o, p) =>
			`(${o}.isReady() ? ${o}stretch.play(${p[0].loop},${p[1].loop},${p[2].loop},${p[3].loop},0.0) : 0.0)`,
	},
	bitToSig: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.toSignal(${p[0].loop})`,
	},
	bitToTrigSig: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.toTrigSignal(${p[0].loop})`,
	},
	bitNeg: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.neg(${p[0].loop})`,
	},
	bitInc: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.inc(${p[0].loop})`,
	},
	bitDec: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.dec(${p[0].loop})`,
	},
	bitAnd: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.land(${p[0].loop},${p[1].loop})`,
	},
	bitOr: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.lor(${p[0].loop},${p[1].loop})`,
	},
	bitXor: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.lxor(${p[0].loop},${p[1].loop})`,
	},
	bitShl: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.shl(${p[0].loop},${p[1].loop})`,
	},
	bitShr: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.shr(${p[0].loop},${p[1].loop})`,
	},
	bitAt: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.at(${p[0].loop},${p[1].loop})`,
	},
	bitAdd: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.add(${p[0].loop},${p[1].loop})`,
	},
	bitSub: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.sub(${p[0].loop},${p[1].loop})`,
	},
	bitMul: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.mul(${p[0].loop},${p[1].loop})`,
	},
	bitEq: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.eq(${p[0].loop},${p[1].loop})`,
	},
	bitGt: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.gt(${p[0].loop},${p[1].loop})`,
	},
	bitGte: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.gte(${p[0].loop},${p[1].loop})`,
	},
	bitLte: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.lte(${p[0].loop},${p[1].loop})`,
	},
	bitLt: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.lt(${p[0].loop},${p[1].loop})`,
	},
	setup: (o, p) => "",
	bitDiv: {
		loop: (o, p) => `Module.maxiBits.div(${p[0].loop},${p[1].loop})`,
	},
	bitr: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`Module.maxiBits.at(${p[0].loop},${p[1].loop},${p[2].loop})`,
	},
	bitnoise: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.noise()`,
	},
	btime: {
		setup: (o, p) => ``,
		loop: (o, p) => `this.bitTime`,
	},
	bitFromSig: {
		setup: (o, p) => "",
		loop: (o, p) => `Module.maxiBits.fromSignal(${p[0].loop})`,
	},
	//basic clock functions
	clp: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`this.clockPhase(${p[0].loop},${p.length > 1 ? p[1].loop : 0})`,
	},
	clt: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`this.clockTrig(${p[0].loop},${p.length > 1 ? p[1].loop : 0})`,
	},
	//clock meta
	clk: {
		setup: (o, p) => "",
		loop: (o, p) =>
			`(()=>{this.setBPM(${p[0].loop}); this.setBeatsPerBar(${p[1].loop});})()`,
	},
	/*quantise code evaluations to the bar.
	values from maxiProcessor
		this.codeQuantModes = {
			QUANTISE_TO_BAR: 0,
			DONTQUANTISE:1
		};
*/
	quantise: {
		setup: (o, p) => `this.setCodeQuantiseMode(${p[0].loop > 0 ? 0 : 1})`,
		loop: (o, p) =>
			"",
	},


	onzx: {
		setup: (o, p) => `${o} = new Module.maxiTrigger();`,
		loop: (o, p) => `${o}.onZX(${p[0].loop})`,
	},
	onchange: {
		setup: (o, p) => `${o} = new Module.maxiTrigger();`,
		loop: (o, p) => `${o}.onChanged(${p[0].loop},${p[1].loop})`,
	},
	count: {
		setup: (o, p) => `${o} = new Module.maxiCounter();`,
		loop: (o, p) => `${o}.count(${p[0].loop},${p[1].loop})`,
	},
	idx: {
		setup: (o, p) => `${o} = new Module.maxiIndex();`,
		loop: (o, p) => `${o}.pull(${p[0].loop},${p[1].loop},${p[2].loop})`,
	},
	svf: {
		//set cutoff and resonance only when params change to save CPU
		setup: (o, p) => `${o} = new Module.maxiSVF();
                      ${o}_p1 = new Module.maxiTrigger();
                      ${o}_p2 = new Module.maxiTrigger();`,
		loop: (o, p) => `( () => { ${o}_cutoff = ${p[1].loop};
                                if (${o}_p1.onChanged(${o}_cutoff, 1e-5)) {${o}.setCutoff(${o}_cutoff)};
                                ${o}_res = ${p[2].loop};
                                if (${o}_p2.onChanged(${o}_res, 1e-5)) {${o}.setResonance(${o}_res)};
                                return ${o}.play(${p[0].loop},${p[3].loop},${p[4].loop},${p[5].loop},${p[6].loop})})()`,
	},
	bitclock: {
		setup: (o, p) => "",
		loop: (o, p) => `this.bitclock`,
	},
	pvshift: {
		setup: (o, p) => `${o} = new pvshift();`,
		loop: (o, p) => `${o}.play(${p[0].loop},${p[1].loop})`,
	},

	rsq: {
		setup: (o, p) => `${o} = new Module.maxiRatioSeq();`,
		loop: (o, p) => {
			return p.length == 2
				? `${o}.playTrig(${p[0].loop},${p[1].loop})`
				: `${o}.playValues(${p[0].loop},${p[1].loop},${p[2].loop})`;
		},
	},
	o303: {
		setup: (o, p) => `${o} = new Module.Open303();
                      ${o}.setSampleRate(sampleRate);
                      ${o}_tnote = new Module.maxiTrigger();
                      ${o}_twf = new Module.maxiTrigger();
                      ${o}_tcut = new Module.maxiTrigger();
                      ${o}_tres = new Module.maxiTrigger();
                      ${o}_tenvm = new Module.maxiTrigger();
                      ${o}_tdec = new Module.maxiTrigger();
                      ${o}_tnoteoff = new Module.maxiTrigger();
                      ${o}_tatt = new Module.maxiTrigger();`,
		loop: (o, p) => `(()=>{
			let newNote = ${o}_tnote.onZX(${p[0].loop});
			let accent = ${p[3].loop};
			if (newNote) {
				if (${p[2].loop}>0) {
					${o}.slideToNote(${p[1].loop},accent);
				}else{
					${o}.triggerNote(${p[1].loop},accent);
				}
			};

			if (${o}_tnoteoff.onChanged(${p[4].loop}, 1e-5)) {${o}.allNotesOff()};
			if (${o}_twf.onChanged(${p[5].loop}, 1e-5)) {${o}.setWaveform(${p[5].loop})};
			if (${o}_tcut.onChanged(${p[6].loop}, 1e-5)) {${o}.setCutoff(${p[6].loop})};
			if (${o}_tres.onChanged(${p[7].loop}, 1e-5)) {${o}.setResonance(${p[7].loop})};
			if (${o}_tenvm.onChanged(${p[8].loop}, 1e-5)) {${o}.setEnvMod(${p[8].loop})};
			if (${o}_tatt.onChanged(${p[9].loop}, 1e-5)) {${o}.setNormalAttack(${p[9].loop})};
			if (${o}_tdec.onChanged(${p[10].loop}, 1e-5)) {${o}.setDecay(${p[10].loop})};
			${o}.setAccent(${p[11].loop});
			return ${o}.play();})()`,
	},
	freeverb: {
		setup: (o, p) => `${o} = new Module.maxiFreeVerb();`,
		loop: (o, p) => `${o}.play(${p[0].loop},${p[1].loop},${p[2].loop})`,
	},
	line: {
		//creates a triggered line from 0-1 - use other functions to shape the line
		setup: (o, p) =>
			`${o} = new Module.maxiLine(); ${o}.prepare(0,1,${p[1].loop}, false); ${o}.triggerEnable(1);`,
		loop: (o, p) => `${o}.play(${p[0].loop})`,
	},
	const: {
		setup: (o, p) => ``,
		loop: (o, p) => `${p[0].loop}`,
	},
	poll: {
		setup: (o, p) => `${o} = new poll()`,
		loop: (o, p) => `${o}.play(${p[0].loop})`,
	},
	dac: {
		setup: (o, p) => ``,
		loop: (o, p) => {
			if (p.length == 1) {
				return `this.dacOutAll(${p[0].loop})`;
			} else {
				return `this.dacOut(${p[0].loop},${p[1].loop})`;
			}
		},
	},
	fft: {
		setup: (o, p) => `${o} = new fft(${p[1].loop}, ${p[2].loop})`,
		loop: (o, p) => `${o}.play(${p[0].loop})`,
	},
	ifft: {
		setup: (o, p) => `${o} = new ifft(${p[3].loop}, ${p[4].loop})`,
		loop: (o, p) => `${o}.play(${p[0].loop}, ${p[1].loop}, ${p[2].loop})`,
	},
	mfcc: {
		setup: (o, p) =>
			`${o} = new mfcc(${p[1].loop}, ${p[2].loop}, ${p[3].loop})`,
		loop: (o, p) => `${o}.play(${p[0].loop})`,
	},
};

// if (${o}_twf.onChanged(${p[2].loop}, 1e-5)) {${o}.setWaveform(${p[2].loop})};
// if (${o}_tcut.onChanged(${p[3].loop}, 1e-5)) {${o}.setCutoff(${p[3].loop})};
// if (${o}_tres.onChanged(${p[4].loop}, 1e-5)) {${o}.setResonance(${p[4].loop})};
// if (${o}_tenvm.onChanged(${p[5].loop}, 1e-5)) {${o}.setEnvMod(${p[5].loop})};
// if (${o}_tdec.onChanged(${p[6].loop}, 1e-5)) {${o}.setDecay(${p[6].loop})};
// if (newPitch || newVel) {${o}.noteOn(${p[0].loop},${p[1].loop})};

class ASTreeToJavascript {

  static getNextID() {
    objectID = objectID > 9999 ? 0 : ++objectID;
    return objectID;
  }

  static emptyCode() {
    return {
      "setup": "",
      "loop": "",
      "paramMarkers": []
    };
  }

  static traverseTree(t, code, level, vars, blockIdx) {
    // console.log(`DEBUG:IR:traverseTree:level: ${level}`);
    // console.log(`DEBUG:IR:traverseTree:vars:`);
    // console.log(vars);
    let attribMap = {
      '@lang': (ccode, el) => {
        el.map((langEl) => {
          let statementCode = ASTreeToJavascript.traverseTree(langEl, ASTreeToJavascript.emptyCode(), level, vars, blockIdx);
          // console.log("@lang: " + statementCode.loop);
          ccode.setup += statementCode.setup;
          ccode.loop += statementCode.loop;
          // ccode.paramMarkers
        });
        return ccode;
      },
      // '@sigOut': (ccode, el) => {
      //   ccode = ASTreeToJavascript.traverseTree(el, ccode, level, vars, blockIdx);
      //   ccode.loop = `q.sigOut = ${ccode.loop};`;
      //   return ccode;
      // },
      '@spawn': (ccode, el) => {
        ccode = ASTreeToJavascript.traverseTree(el, ccode, level, vars, blockIdx);
        ccode.loop += ";";
        return ccode;
      },
      '@sigp': (ccode, el) => {
        let paramMarkers = [{"s":el['paramBegin'], "e":el['paramEnd'], "l":level}];
        ccode.paramMarkers = ccode.paramMarkers.concat(paramMarkers);

        let functionName = el['@func'].value;
        let funcInfo = jsFuncMap[functionName];
        let objName = "q.b" + blockIdx + "u" + ASTreeToJavascript.getNextID();

        let allParams=[];

        for (let p = 0; p < el['@params'].length; p++) {
          let params = ASTreeToJavascript.emptyCode();
          params = ASTreeToJavascript.traverseTree(el['@params'][p], params, level+1, vars, blockIdx);
          // console.log(params);
          allParams[p] = params;
        }
        // console.log(allParams);
        let setupCode = "";
        for (let param in allParams) {
          setupCode += allParams[param].setup;
          ccode.paramMarkers = ccode.paramMarkers.concat(allParams[param].paramMarkers);
        }
        ccode.setup += `${setupCode} ${funcInfo.setup(objName, allParams)};`;
        ccode.loop += `${funcInfo.loop(objName, allParams)}`;
        return ccode;
      },
      '@setvar': (ccode, el) => {
        // console.log("DEBUG:traverseTree:@setvar");
        // console.log(vars);
        // console.log(el['@varname']);
        let variableName = el['@varname'];
        // console.log(variableName);
        let memIdx = vars[variableName];
        // console.log(memIdx);
        if (memIdx == undefined) {
          // console.log("var not found");
          memIdx = Object.keys(vars).length;
          vars[variableName] = memIdx;
          // console.log(memIdx);
        }
        let varValueCode = ASTreeToJavascript.traverseTree(el['@varvalue'], ASTreeToJavascript.emptyCode(), level+1, vars, blockIdx);
        ccode.setup += varValueCode.setup;
        // ccode.loop = `this.setvar(q, '${el['@varname']}', ${varValueCode.loop})`;
        ccode.loop = `(mem[${memIdx}] = ${varValueCode.loop})`;
        return ccode;
      },
      '@getvar': (ccode, el) => {
        let memIdx = vars[el];
        if (memIdx == undefined) {
					memIdx = Object.keys(vars).length;
          vars[el] = memIdx;
        }
        // ccode.loop += `this.getvar(q, '${el.value}')`;
        ccode.loop += `(mem[${memIdx}] != undefined ? mem[${memIdx}] : 0)`;
        return ccode;
      },
      '@string': (ccode, el) => {
        // console.log(el.value);
        if (typeof el === 'string' || el instanceof String) {
          ccode.loop += `'${el}'`;
        }
        // else {
        //   ccode = ASTreeToJavascript.traverseTree(el, ccode, level, vars, blockIdx);
        // }
        return ccode;
      },
      '@num': (ccode, el) => {
        if (el.value != undefined) {
          ccode.loop += `${el.value}`;
        }
        //  else {
        //   ccode = ASTreeToJavascript.traverseTree(el, ccode, level);
        // }
        return ccode;
      },
      '@list': (ccode, el) => {
        //a list can be static and/or dynamic
        //create a vector for the list
        let objName = "q.b" + blockIdx + "l" + ASTreeToJavascript.getNextID();
				// ccode.setup += `${objName} = new Module.VectorDouble();`;
        // ccode.setup += `${objName}.resize(${el.length},0);`;
				ccode.setup += `${objName} = new Float64Array(${el.length});`;

        //in the loop, we create a function that returns the list. It might also update dynamic elements of the list
        ccode.loop += `(()=>{`;
        let extraSetupCode = "";

        for(let i_list=0; i_list < el.length; i_list++) {
          //if the element is a static number, set this element once in the setup code
          let element =  ASTreeToJavascript.traverseTree(el[i_list], ASTreeToJavascript.emptyCode(), level, vars, blockIdx);
          if(Object.keys(el[i_list])[0] == '@num') {
						// ccode.setup += `${objName}.set(${i_list}, ${element.loop});`;
						ccode.setup += `${objName}[${i_list}] = ${element.loop};`;
          }else {
              //if the element not a number, set this element each update before returning the list
              extraSetupCode += element.setup;
              ccode.loop += `${objName}[${i_list}] = ${element.loop};`;
          }
        }

        ccode.loop += `return ${objName}})()`;
        ccode.setup += extraSetupCode;
        // ccode.loop+=`${objName}`;
        // console.log(ccode);
        return ccode;
      }
    };

    if (Array.isArray(t)) {
      t.map((el) => {
        Object.keys(el).map((k) => {
          // console.log("DEBUG:traverseTree:@ARRAYAttribMap");
          // console.log(k);
          code = attribMap[k](code, el[k]);
        });
      });
    } else {
      Object.keys(t).map((k) => {
        // console.log("DEBUG:traverseTree:@OBJECTAttribMap");
        // console.log(k);
        code = attribMap[k](code, t[k]);
      });
    }
    return code;
  }

  static treeToCode(tree, blockIdx=0) {
    // console.log(tree);
    vars = {};
    let code = ASTreeToJavascript.traverseTree(tree, ASTreeToJavascript.emptyCode(), 0, vars, blockIdx);
    // console.log(vars);
		// code.setup = `() => {let q=this.newq(); q.sigOut=0; ${code.setup}; return q;}`;
    // code.loop = `(q, inputs, mem) => {${code.loop} return q.sigOut;}`
		code.setup = `() => {let q=this.newq(); ${code.setup}; return q;}`;
    code.loop = `(q, inputs, mem) => {${code.loop}}`;
    // console.log("DEBUG:treeToCode");
		// console.log(code.setup);
		// console.log(code.loop);
    return code;
  }
}

var IR = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': ASTreeToJavascript
});

var sema = createCommonjsModule(function (module) {
(function(root, factory) {
  if (module.exports) {
    module.exports = factory();
  } else {
    root.sema = factory();
  }
}(commonjsGlobal, function() {


  // create the tree structure for a number
  function num(val) {
    return { "@num": { value: val } };
  }

  // create the tree structure for a string - useful for naming samples
  function str(val) {
    return { "@string": val };
  }

  // create the tree structure for a DSP function
  function synth(functionName, params) {
    let branch = {
      "@sigp": { "@params": params, "@func": { value: functionName } }
    };
    return branch;
  }

  // create the tree structure for setting a variable
  function setvar(name, value) {
    return { "@setvar": { "@varname": name, "@varvalue": value } };
  }

  // create the tree structure for reading a variable
  function getvar(name) {
    return { "@getvar": name };
  }

  return {
		num: num,
		str: str,
		synth: synth,
		setvar: setvar,
		getvar: getvar
	}

}));
});

/**
 * Loads the modules dependencies in the compiled parser source code (moo, sema)
 * before dynamically loading it with eval
 * @param {*} source
 * * sema.num('3') is a hack to force the module to load before eval,
 * TODO need to check how the module is built differently from moo
 */
function getParserModuleExports(source) {
	let sema$1 = sema; // does NOT work with Geval, works with eval
	sema$1.num("3"); // hack to force the module to load before eval
	let module = { exports: "" };
	eval(source); // works but gets flagged by Rollup!
	return module.exports;
}


/**
 * Given a livecode's grammar source code, compile a livecode's source
 * @param {*} grammarSource
 * @param {*} livecodeSource
 */
function compile(grammarSource, livecodeSource) {
  try {
		let dspCode;
		let sema$1 = sema;

		const { errors, output } = compileGrammar(grammarSource);

		// const grammar = getModuleExports(output);

		// evalToGlobalScope(output); // FAILS in unit testing, `ReferenceError: window is not defined`
		// const compiledParser = new nearley.Parser(window.grammar);

		const grammar = getParserModuleExports(output);
		const compiledParser = new nearley.Parser(grammar);

		// let worker = new compilerWorker();
		// worker.postMessage({ livecodeSource, grammarSource });

		if (!errors && compiledParser) {
			const livecodeParseTree = compiledParser.feed(livecodeSource);
			if (livecodeParseTree) {
				dspCode = ASTreeToJavascript.treeToCode(livecodeParseTree.results, 0);
			}
		}
		return { dspCode };
	} catch (error) {
 		return { errors: error };
  }
}

/**
 * Given a livecode's grammar source code, compile a livecode's source
 * @param {*} grammarSource
 * @param {*} livecodeSource
 */
function parse(grammarSource, livecodeSource) {
  try {
		let dspCode;
		let sema$1 = sema;

		const { errors, output } = compileGrammar(grammarSource);

		// const grammar = getModuleExports(output);

		// evalToGlobalScope(output); // FAILS in unit testing, `ReferenceError: window is not defined`
		// const compiledParser = new nearley.Parser(window.grammar);

		const grammar = getParserModuleExports(output);
		const compiledParser = new nearley.Parser(grammar);

		// let worker = new compilerWorker();
		// worker.postMessage({ livecodeSource, grammarSource });

		if (!errors && compiledParser) {
			const livecodeParseTree = compiledParser.feed(livecodeSource).results;
			return { livecodeParseTree }
		}
		else return { errors };
	} catch (error) {
 		return { errors: error };
  }
}

/**
 * Given an abstract syntax tree, generate Javascript DSP code
 * @param {*} liveCodeParseTree
 */
function ASTreeToDSPcode(livecodeParseTree) {
	if (livecodeParseTree) {
    try {
			const dspCode = ASTreeToJavascript.treeToCode(livecodeParseTree, 0);
      return { dspCode };
    }
    catch (error) {
      return { errors: error };
    }
  }
  else throw new Error('Problem with livecodeParseTree argument passed to ASTreeToDSPCode');
}

/*
  MIT License
  Copyright (c) 2019 Guillermo Webster
  Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
  The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

function stream() {
	let out = "";
	return {
		write(str) {
			out += str;
		},
		dump() {
			return out;
		}
	};
}

function AnnotatePositions(rules) {
	return rules.map(
		rule =>
			new nearley.Rule(
				rule.name,
				rule.symbols,
				rule.postprocess &&
					((data, ref, reject) => {
						var orig = rule.postprocess(data, ref, reject);
						if (orig === null) return null;
						if (typeof orig == "object" && !orig.slice) {
							orig.pos = ref;
						}
						return orig;
					})
			)
	);
}

function compileGrammar(grammar) {

	let parser = new nearley.Parser( AnnotatePositions(nearleyLanguageBootstrapped.ParserRules), nearleyLanguageBootstrapped.ParserStart, { lexer: nearleyLanguageBootstrapped.Lexer } );

	let errors = stream();
	let output = "";
	let positions = {};

	try {
		parser.feed(grammar);
		if (parser.results[0]) {
			function rangeCallback(name, start, end) {
				positions[name] = [start, end];
			}
			var c = compileLowLevel(parser.results[0], {
				rangeCallback: rangeCallback
			});
			lint_1(c, { out: errors });

			output = generate(c, "grammar");
		}
	} catch (e) {
		errors.write(e);
	}

	return {
		errors: errors.dump(),
		positions,
		output
	};
}

var WorkerClass = null;

try {
    var WorkerThreads =
        typeof module !== 'undefined' && typeof module.require === 'function' && module.require('worker_threads') ||
        typeof __non_webpack_require__ === 'function' && __non_webpack_require__('worker_threads') ||
        typeof require === 'function' && require('worker_threads');
    WorkerClass = WorkerThreads.Worker;
} catch(e) {} // eslint-disable-line

function decodeBase64$1(base64, enableUnicode) {
    return Buffer.from(base64, 'base64').toString(enableUnicode ? 'utf16' : 'utf8');
}

function createBase64WorkerFactory$2(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64$1(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    return function WorkerFactory(options) {
        return new WorkerClass(body, Object.assign({}, options, { eval: true }));
    };
}

function decodeBase64(base64, enableUnicode) {
    var binaryString = atob(base64);
    if (enableUnicode) {
        var binaryView = new Uint8Array(binaryString.length);
        for (var i = 0, n = binaryString.length; i < n; ++i) {
            binaryView[i] = binaryString.charCodeAt(i);
        }
        return String.fromCharCode.apply(null, new Uint16Array(binaryView.buffer));
    }
    return binaryString;
}

function createURL(base64, sourcemapArg, enableUnicodeArg) {
    var sourcemap = sourcemapArg === undefined ? null : sourcemapArg;
    var enableUnicode = enableUnicodeArg === undefined ? false : enableUnicodeArg;
    var source = decodeBase64(base64, enableUnicode);
    var start = source.indexOf('\n', 10) + 1;
    var body = source.substring(start) + (sourcemap ? '\/\/# sourceMappingURL=' + sourcemap : '');
    var blob = new Blob([body], { type: 'application/javascript' });
    return URL.createObjectURL(blob);
}

function createBase64WorkerFactory$1(base64, sourcemapArg, enableUnicodeArg) {
    var url;
    return function WorkerFactory(options) {
        url = url || createURL(base64, sourcemapArg, enableUnicodeArg);
        return new Worker(url, options);
    };
}

var kIsNodeJS = Object.prototype.toString.call(typeof process !== 'undefined' ? process : 0) === '[object process]';

function isNodeJS() {
    return kIsNodeJS;
}

function createBase64WorkerFactory(base64, sourcemapArg, enableUnicodeArg) {
    if (isNodeJS()) {
        return createBase64WorkerFactory$2(base64, sourcemapArg, enableUnicodeArg);
    }
    return createBase64WorkerFactory$1(base64, sourcemapArg, enableUnicodeArg);
}

var WorkerFactory = createBase64WorkerFactory('Lyogcm9sbHVwLXBsdWdpbi13ZWItd29ya2VyLWxvYWRlciAqLwooZnVuY3Rpb24gKCkgewogICd1c2Ugc3RyaWN0JzsKCiAgLy8gU2VuZCBhdWRpbyBpbnRlcmxlYXZlZCBhdWRpbyBmcmFtZXMgYmV0d2VlbiB0aHJlYWRzLCB3YWl0LWZyZWUuCgogIC8vIEEgU2luZ2xlIFByb2R1Y2VyIC0gU2luZ2xlIENvbnN1bWVyIHRocmVhZC1zYWZlIHdhaXQtZnJlZSByaW5nIGJ1ZmZlci4KICAvLwogIC8vIFRoZSBwcm9kdWNlciBhbmQgdGhlIGNvbnN1bWVyIGNhbiBiZSBzZXBhcmF0ZSB0aHJlYWQsIGJ1dCBjYW5ub3QgY2hhbmdlIHJvbGUsCiAgLy8gZXhjZXB0IHdpdGggZXh0ZXJuYWwgc3luY2hyb25pemF0aW9uLgoKICBjbGFzcyBSaW5nQnVmZmVyIHsKICAgIHN0YXRpYyBnZXRTdG9yYWdlRm9yQ2FwYWNpdHkoY2FwYWNpdHksIHR5cGUpIHsKICAgICAgaWYgKCF0eXBlLkJZVEVTX1BFUl9FTEVNRU5UKSB7CiAgICAgICAgdGhyb3cgIlBhc3MgaW4gYSBBcnJheUJ1ZmZlciBzdWJjbGFzcyI7CiAgICAgIH0KICAgICAgdmFyIGJ5dGVzID0gOCArIChjYXBhY2l0eSArIDEpICogdHlwZS5CWVRFU19QRVJfRUxFTUVOVDsKICAgICAgcmV0dXJuIG5ldyBTaGFyZWRBcnJheUJ1ZmZlcihieXRlcyk7CiAgICB9CiAgICAvLyBgc2FiYCBpcyBhIFNoYXJlZEFycmF5QnVmZmVyIHdpdGggYSBjYXBhY2l0eSBjYWxjdWxhdGVkIGJ5IGNhbGxpbmcKICAgIC8vIGBnZXRTdG9yYWdlRm9yQ2FwYWNpdHlgIHdpdGggdGhlIGRlc2lyZWQgY2FwYWNpdHkuCiAgICBjb25zdHJ1Y3RvcihzYWIsIHR5cGUpIHsKICAgICAgaWYgKCFBcnJheUJ1ZmZlci5fX3Byb3RvX18uaXNQcm90b3R5cGVPZih0eXBlKSAmJgogICAgICAgIHR5cGUuQllURVNfUEVSX0VMRU1FTlQgIT09IHVuZGVmaW5lZCkgewogICAgICAgIHRocm93ICJQYXNzIGEgY29uY3JldGUgdHlwZWQgYXJyYXkgY2xhc3MgYXMgc2Vjb25kIGFyZ3VtZW50IjsKICAgICAgfQoKICAgICAgLy8gTWF4aW11bSB1c2FibGUgc2l6ZSBpcyAxPDwzMiAtIHR5cGUuQllURVNfUEVSX0VMRU1FTlQgYnl0ZXMgaW4gdGhlIHJpbmcKICAgICAgLy8gYnVmZmVyIGZvciB0aGlzIHZlcnNpb24sIGVhc2lseSBjaGFuZ2VhYmxlLgogICAgICAvLyAtNCBmb3IgdGhlIHdyaXRlIHB0ciAodWludDMyX3Qgb2Zmc2V0cykKICAgICAgLy8gLTQgZm9yIHRoZSByZWFkIHB0ciAodWludDMyX3Qgb2Zmc2V0cykKICAgICAgLy8gY2FwYWNpdHkgY291bnRzIHRoZSBlbXB0eSBzbG90IHRvIGRpc3Rpbmd1aXNoIGJldHdlZW4gZnVsbCBhbmQgZW1wdHkuCiAgICAgIHRoaXMuX3R5cGUgPSB0eXBlOwogICAgICB0aGlzLmNhcGFjaXR5ID0gKHNhYi5ieXRlTGVuZ3RoIC0gOCkgLyB0eXBlLkJZVEVTX1BFUl9FTEVNRU5UOwogICAgICB0aGlzLmJ1ZiA9IHNhYjsKICAgICAgdGhpcy53cml0ZV9wdHIgPSBuZXcgVWludDMyQXJyYXkodGhpcy5idWYsIDAsIDEpOwogICAgICB0aGlzLnJlYWRfcHRyID0gbmV3IFVpbnQzMkFycmF5KHRoaXMuYnVmLCA0LCAxKTsKICAgICAgdGhpcy5zdG9yYWdlID0gbmV3IHR5cGUodGhpcy5idWYsIDgsIHRoaXMuY2FwYWNpdHkpOwogICAgfQogICAgLy8gUmV0dXJucyB0aGUgdHlwZSBvZiB0aGUgdW5kZXJseWluZyBBcnJheUJ1ZmZlciBmb3IgdGhpcyBSaW5nQnVmZmVyLiBUaGlzCiAgICAvLyBhbGxvd3MgaW1wbGVtZW50aW5nIGNydWRlIHR5cGUgY2hlY2tpbmcuCiAgICB0eXBlKCkgewogICAgICByZXR1cm4gdGhpcy5fdHlwZS5uYW1lOwogICAgfQogICAgLy8gUHVzaCBieXRlcyB0byB0aGUgcmluZyBidWZmZXIuIGBieXRlc2AgaXMgYW4gdHlwZWQgYXJyYXkgb2YgdGhlIHNhbWUgdHlwZQogICAgLy8gYXMgcGFzc2VkIGluIHRoZSBjdG9yLCB0byBiZSB3cml0dGVuIHRvIHRoZSBxdWV1ZS4KICAgIC8vIFJldHVybnMgdGhlIG51bWJlciBvZiBlbGVtZW50cyB3cml0dGVuIHRvIHRoZSBxdWV1ZS4KICAgIHB1c2goZWxlbWVudHMpIHsKICAgICAgdmFyIHJkID0gQXRvbWljcy5sb2FkKHRoaXMucmVhZF9wdHIsIDApOwogICAgICB2YXIgd3IgPSBBdG9taWNzLmxvYWQodGhpcy53cml0ZV9wdHIsIDApOwoKICAgICAgaWYgKCh3ciArIDEpICUgdGhpcy5fc3RvcmFnZV9jYXBhY2l0eSgpID09IHJkKSB7CiAgICAgICAgLy8gZnVsbAogICAgICAgIHJldHVybiAwOwogICAgICB9CgogICAgICBsZXQgdG9fd3JpdGUgPSBNYXRoLm1pbih0aGlzLl9hdmFpbGFibGVfd3JpdGUocmQsIHdyKSwgZWxlbWVudHMubGVuZ3RoKTsKICAgICAgbGV0IGZpcnN0X3BhcnQgPSBNYXRoLm1pbih0aGlzLl9zdG9yYWdlX2NhcGFjaXR5KCkgLSB3ciwgdG9fd3JpdGUpOwogICAgICBsZXQgc2Vjb25kX3BhcnQgPSB0b193cml0ZSAtIGZpcnN0X3BhcnQ7CgogICAgICB0aGlzLl9jb3B5KGVsZW1lbnRzLCAwLCB0aGlzLnN0b3JhZ2UsIHdyLCBmaXJzdF9wYXJ0KTsKICAgICAgdGhpcy5fY29weShlbGVtZW50cywgZmlyc3RfcGFydCwgdGhpcy5zdG9yYWdlLCAwLCBzZWNvbmRfcGFydCk7CgogICAgICAvLyBwdWJsaXNoIHRoZSBlbnF1ZXVlZCBkYXRhIHRvIHRoZSBvdGhlciBzaWRlCiAgICAgIEF0b21pY3Muc3RvcmUoCiAgICAgICAgdGhpcy53cml0ZV9wdHIsCiAgICAgICAgMCwKICAgICAgICAod3IgKyB0b193cml0ZSkgJSB0aGlzLl9zdG9yYWdlX2NhcGFjaXR5KCkKICAgICAgKTsKCiAgICAgIHJldHVybiB0b193cml0ZTsKICAgIH0KICAgIC8vIFJlYWQgYGVsZW1lbnRzLmxlbmd0aGAgZWxlbWVudHMgZnJvbSB0aGUgcmluZyBidWZmZXIuIGBlbGVtZW50c2AgaXMgYSB0eXBlZAogICAgLy8gYXJyYXkgb2YgdGhlIHNhbWUgdHlwZSBhcyBwYXNzZWQgaW4gdGhlIGN0b3IuCiAgICAvLyBSZXR1cm5zIHRoZSBudW1iZXIgb2YgZWxlbWVudHMgcmVhZCBmcm9tIHRoZSBxdWV1ZSwgdGhleSBhcmUgcGxhY2VkIGF0IHRoZQogICAgLy8gYmVnaW5uaW5nIG9mIHRoZSBhcnJheSBwYXNzZWQgYXMgcGFyYW1ldGVyLgogICAgcG9wKGVsZW1lbnRzKSB7CiAgICAgIHZhciByZCA9IEF0b21pY3MubG9hZCh0aGlzLnJlYWRfcHRyLCAwKTsKICAgICAgdmFyIHdyID0gQXRvbWljcy5sb2FkKHRoaXMud3JpdGVfcHRyLCAwKTsKCiAgICAgIGlmICh3ciA9PSByZCkgewogICAgICAgIHJldHVybiAwOwogICAgICB9CgogICAgICBsZXQgdG9fcmVhZCA9IE1hdGgubWluKHRoaXMuX2F2YWlsYWJsZV9yZWFkKHJkLCB3ciksIGVsZW1lbnRzLmxlbmd0aCk7CgogICAgICBsZXQgZmlyc3RfcGFydCA9IE1hdGgubWluKHRoaXMuX3N0b3JhZ2VfY2FwYWNpdHkoKSAtIHJkLCBlbGVtZW50cy5sZW5ndGgpOwogICAgICBsZXQgc2Vjb25kX3BhcnQgPSB0b19yZWFkIC0gZmlyc3RfcGFydDsKCiAgICAgIHRoaXMuX2NvcHkodGhpcy5zdG9yYWdlLCByZCwgZWxlbWVudHMsIDAsIGZpcnN0X3BhcnQpOwogICAgICB0aGlzLl9jb3B5KHRoaXMuc3RvcmFnZSwgMCwgZWxlbWVudHMsIGZpcnN0X3BhcnQsIHNlY29uZF9wYXJ0KTsKCiAgICAgIEF0b21pY3Muc3RvcmUodGhpcy5yZWFkX3B0ciwgMCwgKHJkICsgdG9fcmVhZCkgJSB0aGlzLl9zdG9yYWdlX2NhcGFjaXR5KCkpOwoKICAgICAgcmV0dXJuIHRvX3JlYWQ7CiAgICB9CgogICAgLy8gVHJ1ZSBpZiB0aGUgcmluZyBidWZmZXIgaXMgZW1wdHkgZmFsc2Ugb3RoZXJ3aXNlLiBUaGlzIGNhbiBiZSBsYXRlIG9uIHRoZQogICAgLy8gcmVhZGVyIHNpZGU6IGl0IGNhbiByZXR1cm4gdHJ1ZSBldmVuIGlmIHNvbWV0aGluZyBoYXMganVzdCBiZWVuIHB1c2hlZC4KICAgIGVtcHR5KCkgewogICAgICB2YXIgcmQgPSBBdG9taWNzLmxvYWQodGhpcy5yZWFkX3B0ciwgMCk7CiAgICAgIHZhciB3ciA9IEF0b21pY3MubG9hZCh0aGlzLndyaXRlX3B0ciwgMCk7CgogICAgICByZXR1cm4gd3IgPT0gcmQ7CiAgICB9CgogICAgLy8gVHJ1ZSBpZiB0aGUgcmluZyBidWZmZXIgaXMgZnVsbCwgZmFsc2Ugb3RoZXJ3aXNlLiBUaGlzIGNhbiBiZSBsYXRlIG9uIHRoZQogICAgLy8gd3JpdGUgc2lkZTogaXQgY2FuIHJldHVybiB0cnVlIHdoZW4gc29tZXRoaW5nIGhhcyBqdXN0IGJlZW4gcG9wZWQuCiAgICBmdWxsKCkgewogICAgICB2YXIgcmQgPSBBdG9taWNzLmxvYWQodGhpcy5yZWFkX3B0ciwgMCk7CiAgICAgIHZhciB3ciA9IEF0b21pY3MubG9hZCh0aGlzLndyaXRlX3B0ciwgMCk7CgogICAgICByZXR1cm4gKHdyICsgMSkgJSB0aGlzLmNhcGFjaXR5ICE9IHJkOwogICAgfQoKICAgIC8vIFRoZSB1c2FibGUgY2FwYWNpdHkgZm9yIHRoZSByaW5nIGJ1ZmZlcjogdGhlIG51bWJlciBvZiBlbGVtZW50cyB0aGF0IGNhbiBiZQogICAgLy8gc3RvcmVkLgogICAgY2FwYWNpdHkoKSB7CiAgICAgIHJldHVybiB0aGlzLmNhcGFjaXR5IC0gMTsKICAgIH0KCiAgICAvLyBOdW1iZXIgb2YgZWxlbWVudHMgYXZhaWxhYmxlIGZvciByZWFkaW5nLiBUaGlzIGNhbiBiZSBsYXRlLCBhbmQgcmVwb3J0IGxlc3MKICAgIC8vIGVsZW1lbnRzIHRoYXQgaXMgYWN0dWFsbHkgaW4gdGhlIHF1ZXVlLCB3aGVuIHNvbWV0aGluZyBoYXMganVzdCBiZWVuCiAgICAvLyBlbnF1ZXVlZC4KICAgIGF2YWlsYWJsZV9yZWFkKCkgewogICAgICB2YXIgcmQgPSBBdG9taWNzLmxvYWQodGhpcy5yZWFkX3B0ciwgMCk7CiAgICAgIHZhciB3ciA9IEF0b21pY3MubG9hZCh0aGlzLndyaXRlX3B0ciwgMCk7CiAgICAgIHJldHVybiB0aGlzLl9hdmFpbGFibGVfcmVhZChyZCwgd3IpOwogICAgfQoKICAgIC8vIE51bWJlciBvZiBlbGVtZW50cyBhdmFpbGFibGUgZm9yIHdyaXRpbmcuIFRoaXMgY2FuIGJlIGxhdGUsIGFuZCByZXBvcnQgbGVzcwogICAgLy8gZWxlbXRucyB0aGF0IGlzIGFjdHVhbGx5IGF2YWlsYWJsZSBmb3Igd3JpdGluZywgd2hlbiBzb21ldGhpbmcgaGFzIGp1c3QKICAgIC8vIGJlZW4gZGVxdWV1ZWQuCiAgICBhdmFpbGFibGVfd3JpdGUoKSB7CiAgICAgIHZhciByZCA9IEF0b21pY3MubG9hZCh0aGlzLnJlYWRfcHRyLCAwKTsKICAgICAgdmFyIHdyID0gQXRvbWljcy5sb2FkKHRoaXMud3JpdGVfcHRyLCAwKTsKICAgICAgcmV0dXJuIHRoaXMuX2F2YWlsYWJsZV93cml0ZShyZCwgd3IpOwogICAgfQoKICAgIC8vIHByaXZhdGUgbWV0aG9kcyAvLwoKICAgIC8vIE51bWJlciBvZiBlbGVtZW50cyBhdmFpbGFibGUgZm9yIHJlYWRpbmcsIGdpdmVuIGEgcmVhZCBhbmQgd3JpdGUgcG9pbnRlci4uCiAgICBfYXZhaWxhYmxlX3JlYWQocmQsIHdyKSB7CiAgICAgIGlmICh3ciA+IHJkKSB7CiAgICAgICAgcmV0dXJuIHdyIC0gcmQ7CiAgICAgIH0gZWxzZSB7CiAgICAgICAgcmV0dXJuIHdyICsgdGhpcy5fc3RvcmFnZV9jYXBhY2l0eSgpIC0gcmQ7CiAgICAgIH0KICAgIH0KCiAgICAvLyBOdW1iZXIgb2YgZWxlbWVudHMgYXZhaWxhYmxlIGZyb20gd3JpdGluZywgZ2l2ZW4gYSByZWFkIGFuZCB3cml0ZSBwb2ludGVyLgogICAgX2F2YWlsYWJsZV93cml0ZShyZCwgd3IpIHsKICAgICAgbGV0IHJ2ID0gcmQgLSB3ciAtIDE7CiAgICAgIGlmICh3ciA+PSByZCkgewogICAgICAgIHJ2ICs9IHRoaXMuX3N0b3JhZ2VfY2FwYWNpdHkoKTsKICAgICAgfQogICAgICByZXR1cm4gcnY7CiAgICB9CgogICAgLy8gVGhlIHNpemUgb2YgdGhlIHN0b3JhZ2UgZm9yIGVsZW1lbnRzIG5vdCBhY2NvdW50aW5nIHRoZSBzcGFjZSBmb3IgdGhlIGluZGV4LgogICAgX3N0b3JhZ2VfY2FwYWNpdHkoKSB7CiAgICAgIHJldHVybiB0aGlzLmNhcGFjaXR5OwogICAgfQoKICAgIC8vIENvcHkgYHNpemVgIGVsZW1lbnRzIGZyb20gYGlucHV0YCwgc3RhcnRpbmcgYXQgb2Zmc2V0IGBvZmZzZXRfaW5wdXRgLCB0bwogICAgLy8gYG91dHB1dGAsIHN0YXJ0aW5nIGF0IG9mZnNldCBgb2Zmc2V0X291dHB1dGAuCiAgICBfY29weShpbnB1dCwgb2Zmc2V0X2lucHV0LCBvdXRwdXQsIG9mZnNldF9vdXRwdXQsIHNpemUpIHsKICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzaXplOyBpKyspIHsKICAgICAgICBvdXRwdXRbb2Zmc2V0X291dHB1dCArIGldID0gaW5wdXRbb2Zmc2V0X2lucHV0ICsgaV07CiAgICAgIH0KICAgIH0KICB9CgogIHNlbGYuUmluZ0J1ZmZlciA9IFJpbmdCdWZmZXI7CgogIHZhciBvdXRwdXRTQUJzID0ge307CgogIC8vIHZhciBjb25zb2xlID0gc2VsZi5jb25zb2xlOwogIHZhciBjbCwgY2ksIGN3LCBjZTsKCiAgaWYgKHNlbGYuY29uc29sZSkgewogIAlpZiAoc2VsZi5jb25zb2xlLmxvZykgY2wgPSBjb25zb2xlLmxvZzsKICAJaWYgKHNlbGYuY29uc29sZS5sb2cpIGNpID0gY29uc29sZS5pbmZvOwogIAlpZiAoc2VsZi5jb25zb2xlLmxvZykgY3cgPSBjb25zb2xlLndhcm47CiAgCWlmIChzZWxmLmNvbnNvbGUubG9nKSBjZSA9IGNvbnNvbGUuZXJyb3I7CiAgCWlmKGNsICYmIGNpICYmIGN3ICYmIGNlKXsKICAJCWN3KCJ0YWtpbmcgb3ZlciBjb25zb2xlIik7CiAgCQljb25zb2xlLmxvZyA9IGZ1bmN0aW9uICgpIHsKICAJCQlzZWxmLnBvc3RNZXNzYWdlKHsKICAJCQkJZnVuYzogImxvZ3MiLAogIAkJCQlwYXlsb2FkOiBbLi4uYXJndW1lbnRzXSwKICAJCQkJbG9nTGV2ZWw6ICJsb2ciLAogIAkJCQlvcmlnaW46ICJbTEVBUk5FUl0iLAogIAkJCX0pOwogIAkJCWNsLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7CiAgCQl9OwogIAkJY29uc29sZS5pbmZvID0gZnVuY3Rpb24gKHRleHQpIHsKICAJCQlzZWxmLnBvc3RNZXNzYWdlKHsKICAJCQkJZnVuYzogImxvZ3MiLAogIAkJCQlwYXlsb2FkOiBbLi4uYXJndW1lbnRzXSwKICAJCQkJbG9nTGV2ZWw6ICJpbmZvIiwKICAJCQkJb3JpZ2luOiAiW0xFQVJORVJdIiwKICAJCQl9KTsKICAJCQljaS5hcHBseSh0aGlzLCBhcmd1bWVudHMpOwogIAkJfTsKICAJCWNvbnNvbGUud2FybiA9IGZ1bmN0aW9uICh0ZXh0KSB7CiAgCQkJc2VsZi5wb3N0TWVzc2FnZSh7CiAgCQkJCWZ1bmM6ICJsb2dzIiwKICAJCQkJcGF5bG9hZDogWy4uLmFyZ3VtZW50c10sCiAgCQkJCWxvZ0xldmVsOiAid2FybiIsCiAgCQkJCW9yaWdpbjogIltMRUFSTkVSXSIsCiAgCQkJfSk7CiAgCQkJY3cuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAJCX07CiAgCQljb25zb2xlLmVycm9yID0gZnVuY3Rpb24gKHRleHQpIHsKICAJCQlzZWxmLnBvc3RNZXNzYWdlKHsKICAJCQkJZnVuYzogImxvZ3MiLAogIAkJCQlwYXlsb2FkOiBbLi4uYXJndW1lbnRzXSwKICAJCQkJbG9nTGV2ZWw6ICJlcnJvciIsCiAgCQkJCW9yaWdpbjogIltMRUFSTkVSXSIsCiAgCQkJfSk7CiAgCQkJY2UuYXBwbHkodGhpcywgYXJndW1lbnRzKTsKICAJCX07CiAgCQljZSgiY29uc29sZSB0YWtlbiBvdmVyIik7CiAgCX0KICB9CgoKICBjbGFzcyBNTFNBQk91dHB1dFRyYW5zZHVjZXIgewogIAljb25zdHJ1Y3Rvcih0dHlwZSwgY2hhbm5lbCwgYmxvY2tzaXplKSB7CiAgCQl0aGlzLmNoYW5uZWwgPSBjaGFubmVsOwogIAkJdGhpcy5ibG9ja3NpemUgPSBibG9ja3NpemU7CiAgCQkvL2NoZWNrIGZvciBleGlzdGluZyBjaGFubmVscwogIAkJaWYgKGNoYW5uZWwgaW4gb3V0cHV0U0FCcyAmJiBvdXRwdXRTQUJzW2NoYW5uZWxdLmJsb2Nrc2l6ZSA9PSBibG9ja3NpemUpIHsKICAJCQkvL3JldXNlIGV4aXN0aW5nCiAgCQkJdGhpcy5yaW5nYnVmID0gb3V0cHV0U0FCc1tjaGFubmVsXS5yYjsKICAJCX0gZWxzZSB7CiAgCQkJLy9jcmVhdGUgYSBuZXcgU0FCIGFuZCBub3RpZnkgdGhlIHJlY2VpdmVyCiAgCQkJdGhpcy5zYWIgPSBSaW5nQnVmZmVyLmdldFN0b3JhZ2VGb3JDYXBhY2l0eSgzMiAqIGJsb2Nrc2l6ZSwgRmxvYXQ2NEFycmF5KTsKICAJCQl0aGlzLnJpbmdidWYgPSBuZXcgUmluZ0J1ZmZlcih0aGlzLnNhYiwgRmxvYXQ2NEFycmF5KTsKCiAgCQkJb3V0cHV0U0FCc1tjaGFubmVsXSA9IHsKICAJCQkJcmI6IHRoaXMucmluZ2J1ZiwKICAJCQkJc2FiOiB0aGlzLnNhYiwKICAJCQkJY3JlYXRlZDogRGF0ZS5ub3coKSwKICAJCQkJYmxvY2tzaXplOiBibG9ja3NpemUsCiAgCQkJfTsKCiAgCQkJcG9zdE1lc3NhZ2UoewogIAkJCQlmdW5jOiAic2FiIiwKICAJCQkJdmFsdWU6IHRoaXMuc2FiLAogIAkJCQl0dHlwZTogdHR5cGUsCiAgCQkJCWNoYW5uZWxJRDogY2hhbm5lbCwKICAJCQkJYmxvY2tzaXplOiBibG9ja3NpemUsCiAgCQkJfSk7CiAgCQl9CiAgCX0KCiAgCXNlbmQodmFsdWUpIHsKICAJCWlmICh0aGlzLnJpbmdidWYuYXZhaWxhYmxlX3dyaXRlKCkgPiAxKSB7CiAgCQkJaWYgKHR5cGVvZiB2YWx1ZSA9PSAibnVtYmVyIikgewogIAkJCQl0aGlzLnJpbmdidWYucHVzaChuZXcgRmxvYXQ2NEFycmF5KFt2YWx1ZV0pKTsKICAJCQl9IGVsc2UgewogIAkJCQlpZiAodmFsdWUubGVuZ3RoID09IHRoaXMuYmxvY2tzaXplKSB7CiAgCQkJCQl0aGlzLnJpbmdidWYucHVzaCh2YWx1ZSk7CiAgCQkJCX0gZWxzZSBpZiAodmFsdWUubGVuZ3RoIDwgdGhpcy5ibG9ja3NpemUpIHsKICAJCQkJCWxldCBuZXdWYWwgPSBuZXcgRmxvYXQ2NEFycmF5KHRoaXMuYmxvY2tzaXplKTsKICAJCQkJCWZvciAobGV0IGkgaW4gdmFsdWUpIG5ld1ZhbFtpXSA9IHZhbHVlW2ldOwogIAkJCQkJdGhpcy5yaW5nYnVmLnB1c2gobmV3VmFsKTsKICAJCQkJfSBlbHNlIHsKICAJCQkJCXRoaXMucmluZ2J1Zi5wdXNoKHZhbHVlLnNsaWNlKDAsIHRoaXMuYmxvY2tzaXplKSk7CiAgCQkJCX0KICAJCQl9CiAgCQl9CiAgCX0KICB9CgogIHNlbGYuY3JlYXRlT3V0cHV0Q2hhbm5lbCA9ICggaWQsIGJsb2Nrc2l6ZSApID0+IHsKICAgIHJldHVybiBuZXcgTUxTQUJPdXRwdXRUcmFuc2R1Y2VyKCdNTCcsIGlkLCBibG9ja3NpemUpOwogIH07CgogIC8qKgogICAqIFVzZXItZGVmaW5lZCBmdW5jdGlvbiB0aGF0IGFjdHMgYXMgYW4gZXZlbnQgaGFuZGxlcgogICAqIEBwYXJhbSB7Kn0gdmFsdWUKICAgKiBAcGFyYW0geyp9IGNoYW5uZWwKICAgKi8KICBzZWxmLmlucHV0ID0gKCB2YWx1ZSwgY2hhbm5lbCApID0+IHt9OwoKICAvLwogIC8qKgogICAqIFVzZXItaW52b2thYmxlIGZ1bmN0aW9uIGluIHRoZSBKUyBlZGl0b3IgdG8gZGlyZWN0IHZhbHVlIHggdG8gb3V0cHV0IGNoYW5uZWwKICAgKiBAcGFyYW0geyp9IHZhbHVlCiAgICogQHBhcmFtIHsqfSBjaGFubmVsCiAgICovCiAgc2VsZi5vdXRwdXQgPSAoIHZhbHVlLCBjaGFubmVsICkgPT4gewogICAgcG9zdE1lc3NhZ2UoIHsKICAgICAgICAgICAgICAgICAgICBmdW5jOiAnZGF0YScsCiAgICAgICAgICAgICAgICAgICAgdmFsOiB2YWx1ZSwKICAgICAgICAgICAgICAgICAgICBjaDogY2hhbm5lbAogICAgICAgICAgICAgICAgICB9CiAgICApOwogIH07CgogIHNlbGYubG9hZFJlc3BvbmRlcnMgPSB7fTsKCiAgc2VsZi5pbnB1dFNBQnMgPSB7fTsKCiAgc2VsZi5zZW1hID0gewogIAlzYXZlRjMyQXJyYXk6IChuYW1lLCB2YWwpID0+IHsKICAJCXBvc3RNZXNzYWdlKHsKICAJCQlmdW5jOiAic2F2ZSIsCiAgCQkJbmFtZTogbmFtZSwKICAJCQl2YWw6IHZhbCwKICAJCX0pOwogIAkJcmV0dXJuIDA7CiAgCX0sCiAgCWxvYWRGMzJBcnJheTogKG5hbWUsIG9ubG9hZCkgPT4gewogIAkJcG9zdE1lc3NhZ2UoewogIAkJCWZ1bmM6ICJsb2FkIiwKICAJCQluYW1lOiBuYW1lLAogIAkJfSk7CiAgCQlsb2FkUmVzcG9uZGVyc1tuYW1lXSA9IG9ubG9hZDsKICAJCXJldHVybiAwOwogIAl9LAogIAlkb3dubG9hZDogKG5hbWUpID0+IHsKICAJCXBvc3RNZXNzYWdlKHsKICAJCQlmdW5jOiAiZG93bmxvYWQiLAogIAkJCW5hbWU6IG5hbWUsCiAgCQl9KTsKICAJfSwKICAJc2VuZENvZGU6IChjb2RlKSA9PiB7CiAgCQlwb3N0TWVzc2FnZSh7CiAgCQkJZnVuYzogInNlbmRjb2RlIiwKICAJCQljb2RlOiBjb2RlLAogIAkJfSk7CiAgCX0sCiAgCXBiY29weTogKG1zZykgPT4gewogIAkJcG9zdE1lc3NhZ2UoewogIAkJCWZ1bmM6ICJwYmNvcHkiLAogIAkJCW1zZzogbXNnLAogIAkJfSk7CiAgCX0sCiAgCXNlbmRCdWZmZXI6IChidWZmZXJOYW1lLCBkYXRhKSA9PiB7CiAgCQlwb3N0TWVzc2FnZSh7CiAgCQkJZnVuYzogInNlbmRidWYiLAogIAkJCW5hbWU6IGJ1ZmZlck5hbWUsCiAgCQkJZGF0YTogZGF0YSwKICAJCX0pOwogIAl9LAoKICAJZW52OiB7CiAgCQlzYXZlTG9jYWw6IChuYW1lKSA9PiB7CiAgCQkJcG9zdE1lc3NhZ2UoewogIAkJCQlmdW5jOiAiZW52c2F2ZSIsCiAgCQkJCW5hbWU6IG5hbWUsCiAgCQkJCXN0b3JhZ2U6ICJsb2NhbCIsCiAgCQkJfSk7CiAgCQl9LAoKICAJCWxvYWRMb2NhbDogKG5hbWUpID0+IHsKICAJCQlwb3N0TWVzc2FnZSh7CiAgCQkJCWZ1bmM6ICJlbnZsb2FkIiwKICAJCQkJbmFtZTogbmFtZSwKICAJCQkJc3RvcmFnZTogImxvY2FsIiwKICAJCQl9KTsKICAJCX0sCgogIAkJc2F2ZVRvUEI6ICgpID0+IHsKICAJCQlwb3N0TWVzc2FnZSh7CiAgCQkJCWZ1bmM6ICJlbnZzYXZlIiwKICAJCQkJc3RvcmFnZTogInBhc3RlYnVmZmVyIiwKICAJCQl9KTsKICAJCX0sCgogIAkJbG9hZEdpc3Q6IChnaXN0aWQpID0+IHsKICAJCQlwb3N0TWVzc2FnZSh7CiAgCQkJCWZ1bmM6ICJlbnZsb2FkIiwKICAJCQkJbmFtZTogZ2lzdGlkLAogIAkJCQlzdG9yYWdlOiAiZ2lzdCIsCiAgCQkJfSk7CiAgCQl9LAogIAl9LAoKICAJLy9ydW4gaW4gdGhlIERPTQogIAlkb21ldmFsOiAoY29kZSkgPT4gewogIAkJcG9zdE1lc3NhZ2UoewogIAkJCWZ1bmM6ICJkb21ldmFsIiwKICAJCQljb2RlOiBjb2RlLAogIAkJfSk7CiAgCX0sCgogIAlwZWVyaW5mbzogKCkgPT4gewogIAkJcG9zdE1lc3NhZ2UoewogIAkJCWZ1bmM6ICJwZWVyaW5mbyIsCiAgCQl9KTsKICAJCWNvbnNvbGUubG9nKCJZb3VyIHBlZXIgSUQgaGFzIGJlZW4gY29waWVkIHRvIHRoZSBwYXN0ZSBidWZmZXIiKTsKICAJfSwKCiAgfTsKCgoKCiAgZnVuY3Rpb24gaW5pdFdpdGhVUkwodXJsKXsKICAgIGlmKCBuZXcgVVJMKHVybCkgKXsKICAgICAgdHJ5ewogICAgICAgIHNhYkNoZWNrZXIoKTsKICAgICAgfSBjYXRjaCAoZXJyKSB7CiAgICAgICAgY29uc29sZS5lcnJvcigiRVJST1I6IHNhYkNoZWNrZXIiLCBlcnIpOwogICAgICB9CiAgICAgIHBvc3RNZXNzYWdlKHsgaW5pdDogdHJ1ZSB9KTsKICAgIH0KICAgIGVsc2UKICAgICAgY29uc29sZS5lcnJvcigiRVJST1I6IGluaXRXaXRoVVJMIOKAkyBJbnZhbGlkIFVSTCIpOwogIH0KCiAgY29uc3QgZ2V2YWxUb0NvbnNvbGUgPSBlID0+IHsKICAgIHRyeSB7CiAgCQlpZiAoIWdldmFsKSB2YXIgZ2V2YWwgPSBldmFsOwoKICAgICAgbGV0IHJlcyA9IGdldmFsKGUpOwogIAkJLy8gY29uc29sZS5pbmZvKHJlcyk7CiAgICAgIGlmIChyZXMgIT09IHVuZGVmaW5lZCkgY29uc29sZS5pbmZvKHJlcyk7IC8vIHByaW50IHRvIGNvbnNvbGUgaWYgc3VjY2Vzc2Z1bAogIAkJZWxzZSBjb25zb2xlLmluZm8oImRvbmUiKTsKCiAgCX0gY2F0Y2ggKGVycm9yKSB7CiAgICAgIGNvbnNvbGUuZXJyb3IoYEV2YWwgZXhjZXB0aW9uIG9uIExlYXJuZXI6IGAsIGVycm9yKTsKICAgIH0KICB9OwoKICBvbm1lc3NhZ2UgPSBtID0+IHsKCiAgICBpZihtLmRhdGEudXJsKQogICAgICBpbml0V2l0aFVSTChtLmRhdGEudXJsKTsKCiAgICBlbHNlIGlmIChtLmRhdGEuZXZhbCkKICAgICAgZ2V2YWxUb0NvbnNvbGUobS5kYXRhLmV2YWwpOwoKICAgIGVsc2UgaWYgKCJ2YWwiIGluIG0uZGF0YSkgewogICAgICAvLyBjb25zb2xlLmxvZygiREVCVUc6bWwud29ya2VyOm9ubWVzc2FnZTp2YWwiKTsKICAgICAgbGV0IHZhbCA9IG0uZGF0YS52YWw7CiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7CiAgICAgIHZhbCA9IEpTT04ucGFyc2UoYFske3ZhbH1dYCk7CiAgICAgIC8vIGNvbnNvbGUubG9nKHZhbCk7CiAgICAgIC8vIGNvbnNvbGUubG9nKGxvYWRSZXNwb25kZXJzKTsKICAgICAgbG9hZFJlc3BvbmRlcnNbbS5kYXRhLm5hbWVdKHZhbCk7CiAgICAgIGRlbGV0ZSBsb2FkUmVzcG9uZGVyc1ttLmRhdGEubmFtZV07CgogICAgfSBlbHNlIGlmIChtLmRhdGEudHlwZSA9PT0gIm1vZGVsLWlucHV0LWRhdGEiKSB7CiAgICAgIGlucHV0KG0uZGF0YS52YWx1ZSwgbS5kYXRhLmNoKTsKCiAgICB9IGVsc2UgaWYgKG0uZGF0YS5zYWIpewogICAgICBjb25zb2xlLmluZm8oJ2J1ZmZlciByZWNlaXZlZCcpOwogICAgICBsZXQgc2FiID0gbS5kYXRhLnNhYjsKICAgICAgbGV0IHJiID0gbmV3IFJpbmdCdWZmZXIoc2FiLCBGbG9hdDY0QXJyYXkpOwogICAgICBpbnB1dFNBQnNbbS5kYXRhLmNoYW5uZWxJRF0gPSB7CiAgICAgICAgc2FiLAogICAgICAgIHJiLAogICAgICAgIGJsb2Nrc2l6ZTogbS5kYXRhLmJsb2Nrc2l6ZQogICAgICB9OwogICAgfQogIH07CgogIGZ1bmN0aW9uIHNhYkNoZWNrZXIoKSB7CiAgICB0cnkgewogICAgICAvLyBjb25zb2xlLmxvZyhpbnB1dFNBQnMpOwogICAgICBmb3IgKGxldCB2IGluIGlucHV0U0FCcykgewogICAgICAgIGxldCBhdmFpbCA9IGlucHV0U0FCc1t2XS5yYi5hdmFpbGFibGVfcmVhZCgpOwogICAgICAgIC8vIGNvbnNvbGUubG9nKGF2YWlsLCBpbnB1dFNBQnNbdl0ucmIuY2FwYWNpdHksIGlucHV0U0FCc1t2XS5ibG9ja3NpemUpOwogICAgICAgIGlmIChhdmFpbCAhPSBpbnB1dFNBQnNbdl0ucmIuY2FwYWNpdHkgJiYgYXZhaWwgPiAwKSB7CiAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGF2YWlsOyBpICs9IGlucHV0U0FCc1t2XS5ibG9ja3NpemUpIHsKICAgICAgICAgICAgbGV0IHZhbCA9IG5ldyBGbG9hdDY0QXJyYXkoaW5wdXRTQUJzW3ZdLmJsb2Nrc2l6ZSk7CiAgICAgICAgICAgIGlucHV0U0FCc1t2XS5yYi5wb3AodmFsKTsKICAgICAgICAgICAgLy8gY29uc29sZS5sb2codmFsKTsKICAgICAgICAgICAgaW5wdXQodiwgdmFsKTsKICAgICAgICAgIH0KICAgICAgICB9CiAgICAgIH0KICAgICAgc2V0VGltZW91dChzYWJDaGVja2VyLCAyMCk7CiAgICB9IGNhdGNoIChlcnJvcikgewogICAgICAvLyBjb25zb2xlLmxvZyhlcnJvcik7CiAgICAgIHNldFRpbWVvdXQoc2FiQ2hlY2tlciwgMTAwKTsKICAgIH0KICB9Cgp9KCkpOwoK', null, false);
/* eslint-enable */

/**
 * The Learner class encapsulates a worker thread
 * and does async initialization and manages all async communication with it
 * @class Learner
 * TODO more error handling
 * TODO more checking of arguments passed to methods
 */
class Learner {
	/**
	 * @constructor
	 */
	constructor() {
		// Manager of events subscrition and emission, that should be subscribed by SAB receivers
		this.dispatcher = new Dispatcher();
		this.logger = new Logger();
	}

	/**
	 * Learner's event subscription
	 * @addEventListener
	 * @param {*} event
	 * @param {*} callback
	 */
	addEventListener(event, callback) {
		if (this.dispatcher && event && callback)
			this.dispatcher.addEventListener(event, callback);
		else throw new Error("Error adding event listener to Learner");
	}

	removeEventListener(event, callback) {
		if (this.dispatcher && event && callback)
			this.dispatcher.removeEventListener(event, callback);
		else throw new Error("Error removing event listener to Learner");
	}

	/**
	 * Initialises worker with origin URL
	 * @param {*} url
	 * @param {*} sab
	 */
	async init(url) {
		// this.dispatcher = new Dispatcher();
		this.worker = new WorkerFactory();
		//this.logger = new Logger(); //make a logger instance

		//console.log("TEST CONSOLE TAKEOVER IN LEARNER");

		return new Promise( (resolve, reject) => {
			let result = {};
			if (this.worker && new URL(url)) {

				this.worker.postMessage({ url });

				this.worker.onerror = e => {
					console.log("onError");
          reject(e);
        };

				this.worker.onmessage = e => {
					result = e.data.init;
					console.info("running Learner");
					resolve(result);
					// this.worker.onmessage = this.onMessageHandler;
					this.worker.onmessage = this.onMessageHandler.bind(this);
				};

			}
		});
	}

	onMessageHandler(m){

		// data is a property of postMessage. func is then a property of data sent in our messages.
		if ( m && m.data && m.data.func ) {

			let responders = {

				sab: (data) => {
					// Publish data to audio engine
					this.dispatcher.dispatch("onSharedBuffer", data);
				},
				sendbuf: (data) => {
					// Publish data to audio engine
					this.dispatcher.dispatch("onSharedBuffer", data);
				},
				save: (data) => {
					// console.log("save");
					window.localStorage.setItem(data.name, data.val);
				},
				load: (data) => {
					// console.log("load");
					let msg = {
						name: data.name,
						val: window.localStorage.getItem(data.name),
					};
					modelWorker.postMessage(msg);
				},
				download: (data) => {
					// console.log("download");
					let downloadData = window.localStorage.getItem(data.name);
					let blob = new Blob([downloadData], {
						type: "text/plain;charset=utf-8",
					});
					saveData(blob, `${data.name}.data`);
				},
				sendcode: (data) => {
					// console.log(data);
				},
        // DEPRECATED
        data: () => {
					// Publish data to audio engine
					// messaging.publish("model-output-data", data);
				},
				pbcopy: (data) => {
					copyToPasteBuffer(data.msg);
					// let copyField=document.getElementById("hiddenCopyField");
					// copyField.value = data.msg;
					// copyField.select();
					// document.execCommand("Copy");
				},
				envsave: (data) => {
					messaging.publish("env-save", data);
				},
				envload: (data) => {
					messaging.publish("env-load", data);
				},
				domeval: (data) => {
					evalDOMCode(data.code);
				},
				peerinfo: (data) => {
					messaging.publish("peerinfo-request", {});
				},
				// data from the worker.js for the logger widget
				logs: (data) => {
					// console.log(">", [...data.payload].join()); //for now just log to console and have it captured here.
					this.logger.push(data); //recieve data from the worker.js and push it to the logger.
				}
			};

			responders[m.data.func](m.data);

    } else if (m.data !== undefined && m.data.length !== 0) {
			// res(m.data);
			console.log(m.data);
		}
		// clearTimeout(timeout);
	};

	/**
	 *
	 */
	eval(expression) {
		if (this.worker && expression)
			this.worker.postMessage({ eval: expression });
		//console.log("DEBUG:ModelEditor:evalModelEditorExpression: " + code);
		// window.localStorage.setItem("modelEditorValue", codeMirror.getValue());
		// addToHistory("model-history-", modelCode);
	}

	/**
	 *
	 * @param {*} sab
	 * @param {*} blocksize
	 * @param {*} channelID
	 */
	addSharedBuffer(e) {
		if (this.worker && e && e.sab && e.sab instanceof SharedArrayBuffer) {
			this.worker.postMessage({
				sab: e.sab,
				blocksize: e.blocksize,
				channelID: e.channelID,
			});
		} else throw new Error("Error pushing SharedBuffer in Learner");
	}

	evalBlock(block) {
		// let modelCode = codeMirror.getBlock();
		// console.log(modelCode);
		let linebreakPos = block.indexOf("\n");
		let firstLine = block.substr(0, linebreakPos);
		// console.log(firstLine);
		if (firstLine == "//--DOM") {
			block = block.substr(linebreakPos);
			evalDomCode(block);
			addToHistory("dom-history-", block);
		} else {
			this.worker.postMessage({ eval: block });
			// console.log("DEBUG:ModelEditor:evalModelEditorExpressionBlock: " + code);
			window.localStorage.setItem("modelEditorValue", codeMirror.getValue());
			addToHistory("model-history-", block);
		}
	}

	/**
	 *
	 */
	terminate() {
		this.worker.onmessage = null; // remove event handler subscription
		this.worker.terminate();
		this.worker = null; // make sure it is deleted by GC
	}
}

/**
 * Find code between dividers,
 * const divider = "__________";
 */
function getBlock(editor) {
	if (editor) {
		let cursorInfo = editor.getCursor();
		//find post divider
		let line = cursorInfo.line;
		let linePost = editor.lastLine();

		while (line < linePost) {
			if (/___+/.test(editor.getLine(line))) {
				// Test RegEx at least 3 underscores
				linePost = line - 1;
				break;
			}
			line++;
		}

		line = cursorInfo.line;
		let linePre = -1;
		while (line >= 0) {
			// console.log(editor2.getLine(line));
			if (/___+/.test(editor.getLine(line))) {
				linePre = line;
				break;
			}
			line--;
		}
		if (linePre > -1) {
			linePre++;
		}
		let code = editor.getRange(
			{
				line: linePre,
				ch: 0,
			},
			{
				line: linePost + 1,
				ch: 0,
			}
		);

		return code;
	}
}

var mooo = moo.mooo;
var nearley$1 = nearley.nearley;
var semaa = sema.semaa;
export { ASTreeToDSPcode, IR as ASTreeToJavascript, Engine, Learner, Logger, compile, compileGrammar, getBlock, getParserModuleExports, mooo, nearley$1 as nearley, parse, semaa };
//# sourceMappingURL=index.mjs.map
