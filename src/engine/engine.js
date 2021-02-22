import { RingBuffer } from '../common/ringbuf.js'; //thanks padenot
import {
  loadSampleToArray
} from './maximilian.util.js';
import Dispatcher from '../common/dispatcher.js';
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

		// Hash of on-demand analysers (e.g. spectrogram, oscilloscope)
		// NOTE: analysers serialized to localStorage are de-serialized
		// and loaded from localStorage before user-triggered audioContext init
		this.analysers = {};

		// Shared array buffers for sharing client side data to the audio engine- e.g. mouse coords
		this.sharedArrayBuffers = {};

		// Event emitter that should be subscribed by SAB receivers
		this.dispatcher = new Dispatcher();

		this.samplesLoaded = false;
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
			// also change hashmap name it is confusing and induces error
			rb: ringbuf,
		};

		return sab;
	}

	/**
	 * Push data to shared array buffer for communicating with the audio engine and ML worker
	 * @param {*} e
	 */
	pushSharedBuffer(e) {
		// let sab = RingBuffer.getStorageForCapacity(32 * blocksize, Float64Array);
		let ringbuf = new RingBuffer(e.value, Float64Array);

		this.audioWorkletNode.port.postMessage({
			func: "sab",
			value: e.value,
			ttype: e.ttype,
			channelID: e.channelID,
			blocksize: e.blocksize,
		});

		this.sharedArrayBuffers[e.channelID] = {
			sab: e.value, // TODO: this is redundant, you can access the sab from the rb,
			// also change hashmap name it is confusing and induces error
			rb: ringbuf,
		};
	}

	/**
	 * Push data to shared array buffer for communicating with the audio engine and ML worker
	 * @param {*} e
	 * @param {*} channelId
	 */
	pushDataToSharedBuffer(channelId, data) {
    if(channelId && data && typeof Array.isArray(data) ){
      if (this.sharedArrayBuffers && this.sharedArrayBuffers[channelId]) {
        this.sharedArrayBuffers[channelId].rb.push(data);
      }
    }
    else throw new Error("Error in function parameters");
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
	 * Creates a WAAPI analyser node
	 * @todo configuration object as argumen
	 * @createAnalyser
	 */
	createAnalyser(analyserID, callback) {
		// If Analyser creation happens after AudioContext intialization, create and connect WAAPI analyser
		if (
			this.audioContext !== undefined &&
			analyserID !== undefined &&
			callback !== undefined
		) {
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

			analyserPollingLoop();

			// Other if AudioContext is NOT created yet (after app load, before splashScreen click)
		} else if (this.audioContext === undefined) {
			this.analysers[analyserID] = { callback };
		}
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

	/**
	 * Initialises audio context and sets worklet processor code
	 * @play
	 */
	async init(audioWorkletName, audioWorkletURL /*numClockPeers*/) {
		if (audioWorkletName && audioWorkletURL && new URL(audioWorkletURL)) {
			// AudioContext needs lazy loading to workaround the Chrome warning
			// Audio Engine first play() call, triggered by user, prevents the warning
			// by setting this.audioContext = new AudioContext();
			this.audioContext;
			this.audioWorkletName = audioWorkletName;
			this.audioWorkletUrl = audioWorkletURL;

			if (this.audioContext === undefined) {
				this.audioContext = new AudioContext({
					// create audio context with latency optimally configured for playback
					latencyHint: "playback",
					// latencyHint: 32/44100,  //this doesn't work below 512 on chrome (?)
					// sampleRate: 44100
				});
			}

			let isWorkletProcessorLoaded = await this.loadWorkletProcessorCode();

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

		if ( this.audioWorkletNode && this.audioWorkletNode.port ) {
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
		console.error(
			`ERROR:Engine:AudioInputFail: ${error.message} ${error.name}`
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
				console.error(
					"ERROR:Engine:loadWorkletProcessorCode: Error on custom AudioWorklet node creation: ",
					err.message
				);
				return false;
			}
		} else {
			return false;
		}
	}

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
					console.error(
						`ERROR:Engine: maxi-processor 'onprocess' error detected`
					);

				// State changes in the audio worklet processor
				this.audioWorkletNode.onprocessorstatechange = (e) =>
					console.log(
						`maxi-processor state change detected: ` +
							audioWorkletNode.processorState
					);

				this.audioWorkletNode.port.onmessageerror = (e) =>
					//  error from the processor port
					console.error(`ERROR:Engine: Error message from port: ` + e.data);

				// Worklet Processor message handler
				this.audioWorkletNode.port.onmessage = (e) =>
					this.onProcessorMessageHandler(e);
			} catch (err) {
				console.error(
					"ERROR:Engine: Error connecting WorkletNode: ",
					err.message
				);
			}
		}
	}

	/**
	 *
	 * @param {*} event
	 */
	onProcessorMessageHandler(event) {
		if (event && event.data) {
			if (event.data.rq && event.data.rq === "send") {
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
						// this.messaging.publish("model-input-buffer", {
						// type: "model-input-buffer",
						this.dispatcher.dispatch("onSharedBuffer", {
              sab: event.data.value,
							channelID: event.data.channelID, //channel ID
							blocksize: event.data.blocksize,
						});
						break;
				}
			}
		}
	}

	/**
	 * Public method for subscribing async messaging from the Audio Worklet Processor scope
	 * @param callback
	 */
	subscribeAsyncMessage(callback) {
		if (callback !== undefined && this.audioWorkletNode !== undefined)
			// Worklet Processor message handler
			this.audioWorkletNode.port.onmessage = callback;
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
}
