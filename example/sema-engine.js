'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

//warning this is the same as in ringbuf, but packaged differently - needs fixing!!!
class RingBuffer {
  static getStorageForCapacity(capacity, type) {
    if (!type.BYTES_PER_ELEMENT) {
      throw 'Pass in a ArrayBuffer subclass';
    }
    var bytes = 8 + (capacity + 1) * type.BYTES_PER_ELEMENT;
    return new SharedArrayBuffer(bytes);
  }
  // `sab` is a SharedArrayBuffer with a capacity calculated by calling
  // `getStorageForCapacity` with the desired capacity.
  constructor(sab, type) {
    if (!ArrayBuffer.__proto__.isPrototypeOf(type) &&
      type.BYTES_PER_ELEMENT !== undefined) {
      throw 'Pass a concrete typed array class as second argument';
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
  // elements that is actually available for writing, when something has just
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
    request.addEventListener("load", () => console.log("The transfer is complete."));
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

// import Module from './maximilian.wasmmodule.js'; //NOTE:FB We need this import here for webpack to emit maximilian.wasmmodule.js
// import {
//   kuramotoNetClock
// } from './interfaces/clockInterface.js';
// import {
//   PubSub
// } from './messaging/pubSub.js';
// import {
//   PeerStreaming
// } from '../interfaces/peerStreaming.js';
// import {
//   copyToPasteBuffer
// } from '../utils/pasteBuffer.js';


/**
 * The CustomMaxiNode is a class that extends AudioWorkletNode
 * to hold an Custom Audio Worklet Processor and connect to Web Audio graph
 * @class CustomMaxiNode
 * @extends AudioWorkletNode
 */
// if(true){
class CustomMaxiNode extends AudioWorkletNode {
  constructor(audioContext, processorName) {
    // super(audioContext, processorName);
    console.log();
    let options = {
      numberOfInputs: 1,
      numberOfOutputs: 1,
      outputChannelCount: [audioContext.destination.maxChannelCount]
    };
    super(audioContext, processorName, options);
  }
}
// }

/**
 * The AudioEngine is a singleton class that encapsulates the AudioContext
 * and all WASM and Maximilian -powered Audio Worklet Processor
 * @class AudioEngine
 */
class AudioEngine {
	/**
	 * @constructor
	 */
	constructor() {
		if (AudioEngine.instance) {
			return AudioEngine.instance; // Singleton pattern
		}
		AudioEngine.instance = this;

		// Hash of on-demand analysers (e.g. spectrogram, oscilloscope)
		// NOTE: analysers from localStorage are loaded from local Storage before user-started audioContext init
		this.analysers = {};

		//shared array buffers for sharing client side data to the audio engine- e.g. mouse coords
		this.sharedArrayBuffers = {};

		// MOVE THIS TO AN UP LAYER IN SEMA

		// Sema's Publish-Subscribe pattern object with 'lowercase-lowercase' format convention for subscription topic
		// this.messaging = new PubSub();
		// this.messaging.subscribe('eval-dsp', e => this.evalDSP(e));
		// this.messaging.subscribe('stop-audio', e => this.stop());
		// this.messaging.subscribe('load-sample', (name, url) =>
		//   this.loadSample(name, url)
		// );
		// this.messaging.subscribe('model-output-data', e =>
		//   this.onMessagingEventHandler(e)
		// );
		// this.messaging.subscribe('clock-phase', e =>
		//   this.onMessagingEventHandler(e)
		// );
		// this.messaging.subscribe('model-send-buffer', e =>
		//   this.onMessagingEventHandler(e)
		// );
		// this.messaging.subscribe('add-engine-analyser', e =>
		//   this.createAnalyser(e)
		// );
		// this.messaging.subscribe('remove-engine-analyser', e =>
		//   this.removeAnalyser(e)
		// );

		// this.messaging.subscribe('mouse-xy', e => {
		//   if (this.sharedArrayBuffers.mxy) {
		//     this.sharedArrayBuffers.mxy.rb.push(e);
		//   }
		// });
		// this.messaging.subscribe('osc', e => console.log(`DEBUG:AudioEngine:OSC: ${e}`));

		//temporarily disabled for now
		// this.kuraClock = new kuramotoNetClock();

		//temporarily disabled for now
		// this.peerNet = new PeerStreaming();

		//the message has incoming data from other peers
		// this.messaging.subscribe('peermsg', (e) => {
		//   e.ttype = 'NET';
		//   e.peermsg = 1;
		//   this.onMessagingEventHandler(e);
		// });

		// this.messaging.subscribe('peerinfo-request', (e) => {
		//   console.log(this.peerNet.peerID);
		//   copyToPasteBuffer(this.peerNet.peerID);
		// });
	}

	/**
	 * Handler of audio worklet processor events
	 * @onProcessorMessageEventHandler
	 */
	onProcessorMessageEventHandler(event) {
		if (event != undefined && event.data != undefined) {
			// console.log('DEBUG:AudioEngine:processorMessageHandler:');
			// console.log(event);
			if (event.data.rq != undefined && event.data.rq === "send") {
				switch (event.data.ttype) {
					case "ML":
						// Stream generated by 'toJS' live code instruction — e.g. {10,0,{1}sin}toJS;
						// publishes to model/JS editor, which posts to ml.worker
						this.messaging.publish("model-input-data", {
							type: "model-input-data",
							value: event.data.value,
							ch: event.data.ch,
						});
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
				console.log("buf", event.data);
				switch (event.data.ttype) {
					case "ML":
						this.messaging.publish("model-input-buffer", {
							type: "model-input-buffer",
							value: event.data.value,
							channelID: event.data.channelID, //channel ID
							blocksize: event.data.blocksize,
						});
						break;
				}
			} else if (event.data === "giveMeSomeSamples") ; else if (event.data.phase != undefined) ;
			// else if (event.data.rq != undefined && event.data.rq === 'receive') {
			//   switch (event.data.ttype) {
			//     case 'ML':
			//       // Stream generated by 'fromJS' live code instruction – e.g. {{10,1}fromJS}saw
			//       // publishes to model/JS editor, which posts to ml.worker
			//       this.messaging.publish('model-output-data-request', {
			//         type: 'model-output-data-request',
			//         value: event.data.value,
			//         channel: event.data.ch
			//       });
			//       break;
			//     case 'NET':
			//       break;
			//   }
			// }
		}
	}

	/**
	 * Handler of the Pub/Sub message events
	 * whose topics are subscribed to in the audio engine constructor
	 * @onMessagingEventHandler
	 */
	onMessagingEventHandler(event) {
		if (event !== undefined) {
			// Receive notification from 'model-output-data' topic
			console.log("DEBUG:AudioEngine:onMessagingEventHandler:");
			console.log(event);
			this.audioWorkletNode.port.postMessage(event);
		}
	}

	/**
	 * Creates a WAAPI analyser node
	 * @todo configuration object as argumen
	 * @createAnalyser
	 */
	createAnalyser(event) {
		// If Analyser creation happens after AudioContext intialization, create and connect WAAPI analyser
		if (this.audioContext !== undefined && event !== undefined) {
			let analyser = this.audioContext.createAnalyser();
			analyser.smoothingTimeConstant = 0.25;
			analyser.fftSize = 256; // default 2048;
			analyser.minDecibels = -90; // default
			analyser.maxDecibels = -0; // default -10; max 0
			this.connectAnalyser(analyser, event.id); // @todo Move out

			// Other if AudioContext is NOT created yet (after app load, before splashScreen click)
		} else if (this.audioContext === undefined) {
			this.analysers[event.id] = {};
		}
	}

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
	 * Connects WAAPI analyser node to the main audio worklet for visualisation.
	 * @connectAnalyser
	 */
	connectAnalyser(analyser, name) {
		if (this.audioWorkletNode !== undefined) {
			this.audioWorkletNode.connect(analyser);
			let analyserData;

			/**
			 * Creates requestAnimationFrame loop for polling data and publishing
			 * Returns Analyser Frame ID for adding to Analysers hash and cancelling animation frame
			 */
			const analyserPollingLoop = () => {
				analyserData = this.pollAnalyserData(analyser);
				this.messaging.publish("analyser-data", analyserData);
				let analyserFrameId = requestAnimationFrame(analyserPollingLoop);
				this.analysers[name] = {
					analyser,
					analyserFrameId,
				};
				return analyserFrameId;
			};

			// analyserFrameId = analyserPollingLoop;

			analyserPollingLoop();
		}
	}

	connectAnalysers() {
		Object.keys(this.analysers).map((id) =>
			this.createAnalyser({
				id,
			})
		);
	}

	/**
	 * Removes a WAAPI analyser node, disconnects graph, cancels animation frame, deletes from hash
	 * @removeAnalyser
	 */
	removeAnalyser(event) {
		if (
			this.audioContext !== undefined &&
			this.audioWorkletNode !== undefined
		) {
			let analyser = this.analysers[event.id];
			if (analyser !== undefined) {
				cancelAnimationFrame(this.analysers[event.id].analyserFrameId);
				delete this.analysers[event.id];
				// this.audioWorkletNode.disconnect(analyser);
			}
		}
	}

	//make a shared array buffer for communicating with the audio engine
	createSharedArrayBuffer(chID, ttype, blocksize) {
		let sab = RingBuffer.getStorageForCapacity(32 * blocksize, Float64Array);
		let ringbuf = new RingBuffer(sab, Float64Array);

		this.audioWorkletNode.port.postMessage({
			func: "sab",
			value: sab,
			ttype: ttype,
			channelID: chID,
			blocksize: blocksize,
		});

		this.sharedArrayBuffers[chID] = {
			sab: sab,
			rb: ringbuf,
		};

		console.log(this.sharedArrayBuffers);
	}

	/**
	 * Initialises audio context and sets worklet processor code
	 * @play
	 */
	async init(audioWorkletURL /*numClockPeers*/) {
		// AudioContext needs lazy loading to workaround the Chrome warning
		// Audio Engine first play() call, triggered by user, prevents the warning
		// by setting this.audioContext = new AudioContext();
		this.audioContext;
		this.audioWorkletProcessorName = "maxi-processor";
		this.audioWorkletUrl = audioWorkletURL;
		this.samplesLoaded = false;

		if (this.audioContext === undefined) {
			this.audioContext = new AudioContext({
				// create audio context with latency optimally configured for playback
				latencyHint: "playback",
				// latencyHint: 32/44100,  //this doesn't work below 512 on chrome (?)
				// sampleRate: 44100
			});

			this.audioContext.destination.channelInterpretation = "discrete";
			this.audioContext.destination.channelCountMode = "explicit";
			this.audioContext.destination.channelCount = this.audioContext.destination.maxChannelCount;
			// console.log(this.audioContext.destination);

			await this.loadWorkletProcessorCode();

			// Connect the worklet node to the audio graph
			this.audioWorkletNode.connect(this.audioContext.destination);

			// this.audioWorkletNode.channelInterpretation = 'discrete';
			// this.audioWorkletNode.channelCountMode = 'explicit';
			// this.audioWorkletNode.channelCount = this.audioContext.destination.maxChannelCount;

			// this.connectMediaStream();

			// this.connectAnalysers(); // Connect Analysers loaded from the store

			// this.loadImportedSamples();

			// No need to inject the callback here, messaging is built in KuraClock
			// this.kuraClock = new kuramotoNetClock((phase, idx) => {
			//   // console.log( `DEBUG:AudioEngine:sendPeersMyClockPhase:phase:${phase}:id:${idx}`);
			//   // This requires an initialised audio worklet
			//   this.audioWorkletNode.port.postMessage({ phase: phase, i: idx });
			// });

			//temporarily disabled
			// if (this.kuraClock.connected()) {
			// 	this.kuraClock.queryPeers(async numClockPeers => {
			// 		console.log(`DEBUG:AudioEngine:init:numClockPeers: ${numClockPeers}`);
			// 	});
			// }

			this.createSharedArrayBuffer("mxy", "mouseXY", 2);
		}
	}

	/**
	 * Initialises audio context and sets worklet processor code
	 * or re-starts audio playback by stopping and running the latest Audio Worklet Processor code
	 * @play
	 */
	play() {
		if (this.audioContext !== undefined) {
			if (this.audioContext.state !== "suspended") {
				this.stop();
				return false;
			} else {
				this.audioContext.resume();
				return true;
			}
		}
	}

	/**
	 * Suspends AudioContext (Pause)
	 * @stop
	 */
	stop() {
		if (this.audioWorkletNode !== undefined) {
			this.audioContext.suspend();
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

	more(gain) {
		if (this.audioWorkletNode !== undefined) {
			const gainParam = this.audioWorkletNode.parameters.get(gain);
			gainParam.value += 0.5;
			console.log(gain + ": " + gainParam.value); // DEBUG
			return true;
		} else return false;
	}

	less(gain) {
		if (this.audioWorkletNode !== undefined) {
			const gainParam = this.audioWorkletNode.parameters.get(gain);
			gainParam.value -= 0.5;
			console.log(gain + ": " + gainParam.value); // DEBUG
			return true;
		} else return false;
	}

	eval(dspFunction) {
		// console.log('DEBUG:AudioEngine:evalDSP:');
		// console.log(dspFunction);

		if (this.audioWorkletNode !== undefined) {
			if (this.audioContext.state === "suspended") {
				this.audioContext.resume();
			}
			this.audioWorkletNode.port.postMessage({
				eval: 1,
				setup: dspFunction.setup,
				loop: dspFunction.loop,
			});
			return true;
		} else return false;
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
		// console.log('DEBUG:AudioEngine: Audio Input init');
		let mediaStreamSource = this.audioContext.createMediaStreamSource(stream);
		mediaStreamSource.connect(this.audioWorkletNode);
	}

	onAudioInputFail(error) {
		console.log(
			`DEBUG:AudioEngine:AudioInputFail: ${error.message} ${error.name}`
		);
	}

	/**
	 * Sets up an AudioIn WAAPI sub-graph
	 * @connectMediaStreamSourceInput
	 */
	async connectMediaStream() {
		const constraints = (window.constraints = {
			audio: true,
			video: false,
		});

		navigator.mediaDevices
			.getUserMedia(constraints)
			.then((s) => this.onAudioInputInit(s))
			.catch(this.onAudioInputFail);
	}

	/**
	 * Loads audioWorklet processor code into a worklet,
	 * setups up all handlers (errors, async messaging, etc),
	 * connects the worklet processor to the WAAPI graph
	 */
	async loadWorkletProcessorCode() {
		if (this.audioContext !== undefined) {
			try {
				await this.audioContext.audioWorklet.addModule(this.audioWorkletUrl);
			} catch (err) {
				console.error(
					"ERROR: AudioEngine:loadWorkletProcessorCode: AudioWorklet not supported in this browser: ",
					err.message
				);
				return false;
			}
			try {
				// Custom node constructor with required parameters
				this.audioWorkletNode = new CustomMaxiNode(
					this.audioContext,
					this.audioWorkletProcessorName
				);

				// All possible error event handlers subscribed
				this.audioWorkletNode.onprocessorerror = (event) => {
					// Errors from the processor
					console.log(
						`DEBUG:AudioEngine:loadWorkletProcessorCode: MaxiProcessor Error detected`
					);
				};

				this.audioWorkletNode.port.onmessageerror = (event) => {
					//  error from the processor port
					console.log(
						`DEBUG:AudioEngine:loadWorkletProcessorCode: Error message from port: ` +
							event.data
					);
				};

				// State changes in the audio worklet processor
				this.audioWorkletNode.onprocessorstatechange = (event) => {
					console.log(
						`DEBUG:AudioEngine:loadWorkletProcessorCode: MaxiProcessor state change detected: ` +
							audioWorkletNode.processorState
					);
				};

				// Worklet Processor message handler
				this.audioWorkletNode.port.onmessage = (event) => {
					this.onProcessorMessageEventHandler(event);
				};

				return true;
			} catch (err) {
				console.error(
					"ERROR: AudioEngine:loadWorkletProcessorCode: Custom AudioWorklet node creation: ",
					err.message
				);
				return false;
			}
		} else {
			return false;
		}
	}

	loadSample(objectName, url) {
		if (this.audioContext !== undefined) {
			loadSampleToArray(
				this.audioContext,
				objectName,
				url,
				this.audioWorkletNode
			);
		} else throw "Audio Context is not initialised!";
	}

	// getSamplesNamegetSamplesNamess() {
	// 	const r = require.context("../../assets/samples", false, /\.wav$/);

	// 	// return an array list of filenames (with extension)
	// 	const importAll = (r) => r.keys().map((file) => file.match(/[^\/]+$/)[0]);

	// 	return importAll(r);
	// }

	// lazyLoadSample(sampleName) {
	// 	import(/* webpackMode: 'lazy' */ `../../assets/samples/${sampleName}`)
	// 		.then(() => this.loadSample(sampleName, `/samples/${sampleName}`))
	// 		.catch((err) =>
	// 			console.error(`DEBUG:AudioEngine:lazyLoadSample: ` + err)
	// 		);
	// }


	// loadImportedSamples() {
	// 	let samplesNames = this.getSamplesNames();
	// 	// console.log('DEBUG:AudioEngine:getSamplesNames: ' + samplesNames);
	// 	samplesNames.forEach((sampleName) => {
	// 		this.lazyLoadSample(sampleName);
	// 	});
	// }

	// NOTE:FB Test code should be segregated from production code into its own fixture.
	// Otherwise, it becomes bloated, difficult to read and reason about.
	// messageHandler(data) {
	// 	if (data == 'dspStart') {
	// 		this.ts = window.performance.now();
	// 	}
	// 	if (data == 'dspEnd') {
	// 		this.ts = window.performance.now() - this.ts;
	// 		this.dspTime = this.dspTime * 0.9 + this.ts * 0.1; //time for 128 sample buffer
	// 		this.onNewDSPLoadValue((this.dspTime / 2.90249433106576) * 100);
	// 	}
	// 	if (data == 'evalEnd') {
	// 		let evalts = window.performance.now();
	// 		this.onEvalTimestamp(evalts);
	// 	} else if (data == 'evalEnd') {
	// 		let evalts = window.performance.now();
	// 		this.onEvalTimestamp(evalts);
	// 	} else if (data == 'giveMeSomeSamples') {
	// 		// this.msgHandler('giveMeSomeSamples');    	// NOTE:FB Untangling the previous msgHandler hack from the audio engine
	// 	} else {
	// 		this.msgHandler(data);
	// 	}
	// }
}

exports.AudioEngine = AudioEngine;
