// NOTE: this imports RingBuffer directly from node_modules
// which is different from maxi-processor that
// dynamically loads from the adjacent ringBuf.js file
import { RingBuffer } from 'ringbuf.js'; //thanks padenot
import { loadSampleToArray } from './maximilian.util.js';
import { Logger } from "../common/logger.js";
import Dispatcher from '../common/dispatcher.js';
// import { isThisTypeNode } from 'typescript';
// import {
//   kuramotoNetClock
// } from './interfaces/clockInterface.js';
// import {
//   PeerStreaming
// } from '../interfaces/peerStreaming.js';

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
    // console.log();
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
 * The Engine is a singleton class that encapsulates the AudioContext
 * and all WASM and Maximilian -powered Audio Worklet Processor
 * @class AudioEngine
 * TODO more error handling
 * TODO more checking of arguments passed to methods
 * TODO optimise performance, especially on analysers which are pumping data continuously
 */
export class Engine {
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
			sab: sab,
			ttype: ttype,
			channelID: channelId,
			blocksize: blocksize,
		});

		this.sharedArrayBuffers[channelId] = {
			rb: ringbuf,
			blocksize
		};

		return sab;
	}

	/**
	 * Push data to shared array buffer for communicating with the audio engine and ML worker
	 * @param {*} e
	 */
	addSharedBuffer(e) {
		if (e) {
			if (e.sab && e.sab instanceof SharedArrayBuffer) {
				try {

					let ringbuf = new RingBuffer(e.sab, Float64Array);

					this.audioWorkletNode.port.postMessage({
						sab: e.sab,
						ttype: e.ttype,
						channelID: e.channelID,
						blocksize: e.blocksize,
					});

					this.sharedArrayBuffers[e.channelID] = {
						rb: ringbuf,
						blocksize: e.blocksize,
					};

				} catch (err) {
					console.error("Error pushing SharedBuffer to engine");
				}
			} else if (e.name && e.data) {
				console.log("sending new buffer")
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
	 * @init
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
				console.log("Processor loaded")
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
			return false;
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
			this.unHush();
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
			try {
				if (event.data.func === 'logs') {
					this.logger.push(event.data); // receive data from the worker.js and push it to the logger.
				}
				else if (event.data.sab) { // receive SAB from worker.js Transducer and push it to the logger.
					this.dispatcher.dispatch("onSharedBuffer", {
						sab: event.data.sab,
						channelID: event.data.channelID,
						blocksize: event.data.blocksize,
					});
				}
				else if (event.data.rq && event.data.rq === "rts") { // ready to suspend
					this.audioContext.suspend();
					this.isHushed = true;
				}
				else if (event.data instanceof Error){
					// TODO use a logger to inject error
					console.error(`On Processor Message ${event.data}`);
				}
				// else if (event.data.rq && event.data.rq === "buf") {
				// 	switch (event.data.ttype) {
				// 		case "ML":
				// 			this.dispatcher.dispatch("onSharedBuffer", {
				// 				sab: event.data.sab,
				// 				channelID: event.data.channelID, //channel ID
				// 				blocksize: event.data.blocksize,
				// 			});
				// 			break;
				// 		case "scope":
				// 			// this.dispatcher.dispatch("onSharedBuffer", {
				// 			// 	sab: event.data.value,
				// 			// 	channelID: event.data.channelID, //channel ID
				// 			// 	blocksize: event.data.blocksize,
				// 			// });

				// 			let ringbuf = new RingBuffer(event.data.value, Float64Array);

				// 			this.sharedArrayBuffers[event.data.channelID] = {
				// 				sab: event.data.value, // TODO: this is redundant, you can access the sab from the rb,
				// 				// TODO change hashmap name it is confusing and induces error
				// 				rb: ringbuf,
				// 				ttype: event.data.ttype,
				// 				channelID: event.data.channelID, //channel ID
				// 				blocksize: event.data.blocksize,
				// 			};
				// 			break;
				// 	}
				// }
			} catch (error) {

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
