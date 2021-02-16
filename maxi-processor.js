// import Maximilian from './maximilian.wasmmodule.js';
import Maximilian from './sema-engine.wasmmodule.js';
import RingBuffer from "./ringbuf.js"; //thanks padenot
import Open303 from './open303.wasmmodule.js';
import { SABInputTransducer, SABOutputTransducer } from './transducers.js';


// class pvshift {
//   constructor() {
//     this.fft = new Maximilian.maxiFFT();
//     this.fft.setup(1024, 256, 1024);
//     this.ifft = new Maximilian.maxiIFFT();
//     this.ifft.setup(1024, 256, 1024);
//     this.mags = new Maximilian.VectorFloat();
//     this.phases = new Maximilian.VectorFloat();
//     this.mags.resize(512, 0);
//     this.phases.resize(512, 0);
//   }
//
//   play(sig, shift) {
//     if (this.fft.process(sig, Maximilian.maxiFFTModes.WITH_POLAR_CONVERSION)) {
//       this.mags = this.fft.getMagnitudes();
//       this.phases = this.fft.getPhases();
//       //shift bins up
//       for (let i = 511; i > 0; i--) {
//         if (i > shift) {
//           this.mags.set(i, this.mags.get(i - shift));
//           this.phases.set(i, this.phases.get(i - shift));
//         } else {
//           this.mags.set(i, 0);
//           this.phases.set(i, 0);
//         }
//       }
//     }
//     sig = this.ifft.process(this.mags, this.phases, Maximilian.maxiIFFTModes.SPECTRUM);
//     return sig;
//   }
// }

class fft {
  constructor(bins, hopPercentage) {
    this.fft = new Maximilian.maxiFFTAdaptor();
    this.fft.setup(bins * 2, Math.floor(bins * 2 * hopPercentage), bins * 2);
    this.mags = this.fft.getMagnitudesAsJSArray();
    this.phases = this.fft.getPhasesAsJSArray();
  }
  play(sig) {
    let newVal = 0;
    if (this.fft.process(sig, Maximilian.maxiFFTModes.WITH_POLAR_CONVERSION)) {
      newVal = 1;
      this.mags = this.fft.getMagnitudesAsJSArray();
      this.phases = this.fft.getPhasesAsJSArray();
    }
    let res = [newVal, this.mags, this.phases];
    return res;
  }
}

class ifft {
  constructor(bins, hopPercentage) {
    this.ifft = new Maximilian.maxiIFFTAdaptor();
    this.ifft.setup(bins * 2, Math.floor(bins * 2 * hopPercentage), bins * 2);
  }
  play(trig, mags, phases) {
    return this.ifft.process(trig, mags, phases, Maximilian.maxiIFFTModes.SPECTRUM);
  }
}

class mfcc {
  constructor(fftsize, hopsize, numCoeffs) {
    this.fft = new Maximilian.maxiFFTAdaptor();
    this.fft.setup(fftsize, hopsize, fftsize);
    this.mfcc = new Maximilian.maxiMFCCAdaptor();
    this.mfcc.setup(fftsize / 2, 40, numCoeffs, 20, 20000);
    this.coeffs = new Float64Array(numCoeffs);
  }

  play(sig) {
    let newVal = 0;
    if (this.fft.process(sig, Maximilian.maxiFFTModes.WITH_POLAR_CONVERSION)) {
      newVal = 1;
      this.coeffs = this.mfcc.mfcc(this.fft.getMagnitudesAsJSArray());
    }
    return [newVal, this.coeffs];
  }
}




class poll {
  constructor() {
    this.clock = new Maximilian.maxiOsc();
  }

  play(val) {
    if (this.clock.impulse(0.5)) {
      console.log(val);
    }
  }
};

function mtof(midinote) {
  return Math.pow(2, (midinote - 69) / 12) * 440.0;
}

var inputSABs = {};

var outputSABs = {};


/**
 * The main Maxi Audio wrapper with a WASM-powered AudioWorkletProcessor.
 *
 * @class MaxiProcessor
 * @extends AudioWorkletProcessor
 */
class MaxiProcessor extends AudioWorkletProcessor {
	/**
	 * @constructor
	 */
	constructor() {
		super();

		//indicate audio settings in WASM and JS domains
		Maximilian.maxiSettings.setup(sampleRate, 1, 512);
		Maximilian.maxiJSSettings.setup(sampleRate, 1, 512);

		//we don't know the number of channels at this stage, so reserve lots for the DAC
		this.DAC = [];
		this.DACInitialised = false;

		this.numPeers = 1;

		this._q = [this.newq(), this.newq()];
		this._mems = [this.newmem(), this.newmem()];
		this._cleanup = [0, 0];
		this.signals = [this.silence, this.silence];
		this.currentSignalFunction = 0;

		this.xfadeControl = new Maximilian.maxiLine();

		this.OSCMessages = {};

		this.incoming = {};

		this.currentSample = 0;

		this.sampleBuffers = {};
		this.sampleVectorBuffers = {};
		this.sampleVectorBuffers["defaultEmptyBuffer"] = new Float32Array(1);

		this.transducers = [];

		this.netClock = new Maximilian.maxiAsyncKuramotoOscillator(3); //TODO: this should be the same as numpeers
		this.kuraPhase = -1;
		this.kuraPhaseIdx = 1;

		this.codeSwapStates = {
			QUEUD: 0,
			XFADING: 1,
			NONE: 2,
		};
		this.codeSwapState = this.codeSwapStates.NONE;

		this.port.onmessage = this.onMessageHandler;

		// this.port.postMessage("giveMeSomeSamples");

		// CLOCK VARIABLES

		// this.clock = new Maximilian.maxiOsc();
		// this.tempo = 120.0; // tempo (in beats per minute);
		// this.secondsPerBeat = 60.0 / this.tempo;
		// this.counterTimeValue = this.secondsPerBeat / 4; //___16th note

		this.clockPhasor;
		this.bpm = 120;
		this.beatsPerBar = 4;
		this.maxTimeLength = sampleRate * 60 * 60 * 24; //24 hours

		this.clockUpdate();

		this.bitTime = Maximilian.maxiBits.sig(0); //this needs to be decoupled from the audio engine? or not... maybe a 'permenant block' with each grammar?
		this.dt = 0;

		console.info(`Sample rate: ${sampleRate}`); // moving this to end of ctor for console feedback on successful processor initialisation
	}

	/**
	 *
	 * @param {*} q
	 * @param {*} inputs
	 */
	silence = (q, inputs) => {
		return 0.0;
	};

	/**
	 *
	 */
	newq = () => {
		return {
			vars: {},
		};
	};

	/**
	 *
	 */
	newmem = () => {
		return new Array(512);
	};

	/**
	 *
	 * @param {*} x
	 * @param {*} idx
	 */
	OSCTransducer = function (x, idx = 0) {
		let val = this.OSCMessages[x];
		return val ? (idx >= 0 ? val[idx] : val) : 0.0;
	};

	/**
	 *
	 * @param {*} bufferName
	 */
	getSampleBuffer = (bufferName) => {
		let sample = this.sampleVectorBuffers["defaultEmptyBuffer"]; //defailt - silence
		if (bufferName in this.sampleVectorBuffers) {
			sample = this.sampleVectorBuffers[bufferName];
		} else {
			console.warn(`${bufferName} doesn't exist yet`);
		}
		return sample;
	};

	/**
	 *
	 */
	clockUpdate = () => {
		this.beatLengthInSamples = (60 / this.bpm) * sampleRate;
		this.barPhaseMultiplier =
			this.maxTimeLength / this.beatLengthInSamples / this.beatsPerBar;

		// console.info(
		// 	"clockUpdate: ",
		// 	this.barPhaseMultiplier,
		// 	this.maxTimeLength,
		// 	this.beatsPerBar
		// );
	};

	/**
	 *
	 * @param {*} bpm
	 */
	setBPM = (bpm) => {
		if (this.bpm != bpm) {
			this.bpm = bpm;
			this.clockUpdate();
		}
		return 0;
	};

	/**
	 *
	 * @param {*} bpb
	 */
	setBeatsPerBar = (bpb) => {
		if (this.beatsPerBar != bpb) {
			this.beatsPerBar = bpb;
			this.clockUpdate();
		}
		return 0;
	};

	/**
	 * @CLP phasor over one bar length
	 * * upon EVAL, this is dynamically invoqued from the LOOP function
	 * @param {*} multiples
	 * @param {*} phase
	 */
	clockPhase = (multiples, phase) => {
		return (
			(((this.clockPhasor * this.barPhaseMultiplier * multiples) % 1.0) +
				phase) %
			1.0
		);
	};

	/**
	 * @CLT phasor over one bar length
	 * * upon EVAL, this is dynamically invoqued from the LOOP function
	 * @param {*} multiples
	 * @param {*} phase
	 */
	clockTrig = (multiples, phase) => {
		let clphase = this.clockPhase(multiples, phase);
		return clphase - (1.0 / sampleRate) * multiples <= 0 ? 1 : 0;
	};

	/**
	 *
	 * @param {*} sendFrequency
	 */
	createMLOutputTransducer = (sendFrequency) => {
		return new OutputTransducer(this.port, sampleRate, sendFrequency, "ML");
	};

	/**
	 *
	 * @param {*} sendFrequency
	 */
	createNetOutputTransducer = (sendFrequency) => {
		return new OutputTransducer(this.port, sampleRate, sendFrequency, "NET");
	};

	/**
	 *
	 *
	 * * this is dynamically invoked from the LOOP function upon EVAL
	 */
	dacOut = (x, ch) => {
		if (ch >= this.DAC.length) {
			ch = this.DAC.length - 1;
		} else if (ch < 0) {
			ch = 0;
		}
		this.DAC[ch] = x;
		return x;
	};

	/**
	 * Writes the resulting computed signal from each component in the heap (mems)
	 * to each DAC's channel
	 *
	 * * this is dynamically invoked from the LOOP function upon EVAL
	 */
	dacOutAll = (x) => {
		for (let i = 0; i < this.DAC.length; i++) {
			this.DAC[i] = x;
		}
		return x;
	};

	/**
	 *
	 * @param {*} id
	 */
	updateSABInputs = (id) => {
		for (let v in inputSABs) {
			let avail = inputSABs[v].rb.available_read();
			// console.log(avail, SABs[v].rb.capacity);
			if (avail != inputSABs[v].rb.capacity && avail > 0) {
				for (let i = 0; i < avail; i += inputSABs[v].blocksize) {
					let val = new Float64Array(inputSABs[v].blocksize);
					inputSABs[v].rb.pop(val);
					inputSABs[v].value = val.length == 1 ? val[0] : val;
				}
			}
		}
	};

	/**
	 *
	 * @param {*} id
	 */
	getSABValue = (id) => {
		let res = 0;
		let sab = inputSABs[id];
		if (sab) {
			res = sab.value;
		}
		return res;
	};

	/**
	 *
	 * @param {*} name
	 * @param {*} buf
	 */
	addSampleBuffer = (name, buf) => {
		this.sampleVectorBuffers[name] = this.translateFloat32ArrayToBuffer(buf);
	};

	/**
	 * @onMessageHandler
	 * * message port async handler
	 * @param {*} event
	 */
	onMessageHandler = (event) => {
		if ("address" in event.data) {
			//this must be an OSC message
			this.OSCMessages[event.data.address] = event.data.args;
			//console.log(this.OSCMessages);
		} else if ("func" in event.data && "sendbuf" == event.data.func) {
			console.log("aesendbuf", event.data);

  		this.addSampleBuffer(event.data.name, event.data.data);

  	} else if ("func" in event.data && "sab" == event.data.func) {
			console.log("buf received", event.data);

			let sab = event.data.value;
			let rb = new RingBuffer(sab, Float64Array);

			inputSABs[event.data.channelID] = {
				sab: sab,
				rb: rb,
				blocksize: event.data.blocksize,
				value:
					event.data.blocksize > 1 ? new Float64Array(event.data.blocksize) : 0,
			};

			//TEMP DEPR.ECATED
			// } else if ('peermsg' in event.data) {
			//   console.log('peer', event);
			//   //this is from peer streaming, map it on to any listening transducers
			//   let targetTransducers = this.matchTransducers('NET', [event.data.src, event.data.ch]);
			//   // console.log(targetTransducers.length);
			//   for (let idx in targetTransducers) {
			//     targetTransducers[idx].setValue(event.data.val);
			//   }
		} else if (event.data.sample) {
			let sampleKey = event.data.sample.substr(0, event.data.sample.length - 4);
			this.addSampleBuffer(sampleKey, event.data.buffer);
		} else if ("phase" in event.data) {
			// console.log(this.kuraPhaseIdx);
			// console.log(event);
			this.netClock.setPhase(event.data.phase, event.data.i);
			// this.kuraPhase = event.data.phase;
			// this.kuraPhaseIdx = event.data.i;
		} else if ("eval" in event.data) {
			// check if new code is being sent for evaluation?

			let setupFunction;
			let loopFunction;
			try {
				setupFunction = eval(event.data["setup"]);
				loopFunction = eval(event.data["loop"]);

				this.nextSignalFunction = 1 - this.currentSignalFunction;

				// setup function with the  types
				this._q[this.nextSignalFunction] = setupFunction();
				//allow feedback between evals
				this._mems[this.nextSignalFunction] = this._mems[
					this.currentSignalFunction
				];
				// output[SPECTROGAMCHANNEL][i] = specgramValue;
				// then use channelsplitter
				this.signals[this.nextSignalFunction] = loopFunction;
				this._cleanup[this.nextSignalFunction] = 0;

				let xfadeBegin = Maximilian.maxiMap.linlin(
					1.0 - this.nextSignalFunction,
					0,
					1,
					-1,
					1
				);
				let xfadeEnd = Maximilian.maxiMap.linlin(
					this.nextSignalFunction,
					0,
					1,
					-1,
					1
				);
				this.xfadeControl.prepare(xfadeBegin, xfadeEnd, 2, true); // short xfade across signals
				this.xfadeControl.triggerEnable(true); //enable the trigger straight away

				this.codeSwapState = this.codeSwapStates.QUEUD;
			} catch (err) {
				if (err instanceof TypeError) {
					console.log(
						"TypeError in worklet evaluation: " + err.name + " – " + err.message
					);
				} else {
					console.log(
						"Error in worklet evaluation: " + err.name + " – " + err.message
					);
					console.log(setupFunction);
					console.log(loopFunction);
				}
			}
		}
	};

	/**
	 * Initialises all DAC channels to zero and settings for Maximilian
	 * @param {*} sampleRate
	 * @param {*} channels
	 * @param {*} bufferSize
	 */
	initialiseDAC = (sampleRate, channels, bufferSize) => {
		for (let i = 0; i < channels; i++) this.DAC[i] = 0.0;

		console.info(`DAC: ${channels} channels`);

		Maximilian.maxiJSSettings.setup(sampleRate, channels, bufferSize);
		Maximilian.maxiSettings.setup(sampleRate, channels, bufferSize);

		this.DACInitialised = true;
	};

	/**
	 *
	 * @param {*} inputs
	 * @param {*} outputs
	 * @param {*} parameters
	 */
	process(inputs, outputs, parameters) {
		if (!this.DACInitialised) {
			this.initialiseDAC(sampleRate, outputs[0].length, 512);
		}

		for (let outputId = 0; outputId < outputs.length; ++outputId) {
			let output = outputs[outputId];
			let channelCount = output.length;

			for (let i = 0; i < output[0].length; ++i) {
				this.updateSABInputs();

				for (let channel = 0; channel < channelCount; channel++) {
					this.DAC[channel] = 0.0;
				}

				//this needs decoupling?
				// WHAT IS THIS?
				this.bitTime = Maximilian.maxiBits.inc(this.bitTime);

				//leave this here - we'll bring it back in one day?
				//net clocks
				// if (this.kuraPhase != -1) {
				//   // this.netClock.setPhase(this.kuraPhase, this.kuraPhaseIdx);
				//   console.log(this.kuraPhaseIdx);
				//testing
				// this.netClock.setPhase(this.netClock.getPhase(0), 1);
				// this.netClock.setPhase(this.netClock.getPhase(0), 2);
				//   this.kuraPhase = -1;
				// }

				// this.netClock.play(this.clockFreq, 100);

				//this.clockPhasor = this.netClock.getPhase(0) / (2 * Math.PI);
				this.clockPhasor =
					(this.currentSample % this.maxTimeLength) / this.maxTimeLength;
				this.currentSample++;

				//share the clock if networked
				// if (this.netClock.size() > 1 && this.clockPhaseSharingInterval++ == 2000) {
				//   this.clockPhaseSharingInterval=0;
				//   let phase = this.netClock.getPhase(0);
				//   // console.log(`DEBUG:MaxiProcessor:phase: ${phase}`);
				//   this.port.postMessage({ phase: phase, c: "phase" });
				// }

				this.bitclock = Maximilian.maxiBits.sig(
					Math.floor(this.clockPhase(1, 0) * 1023.999999999)
				);

				// let w = 0;
				//new code waiting?

				let barTrig = this.clockTrig(1, 0);

				if (this.codeSwapState == this.codeSwapStates.QUEUD) {
					//fade in when a new bar happens
					if (barTrig) {
						this.codeSwapState = this.codeSwapStates.XFADING;
						this.currentSignalFunction = 1 - this.currentSignalFunction;
						//console.log("xfade start", this.currentSignalFunction);
					}
				}

				if (this.codeSwapState == this.codeSwapStates.XFADING) {
					try {
						this.signals[0](this._q[0], inputs[0][i], this._mems[0]);

						this.signals[1](this._q[1], inputs[0][i], this._mems[1]);
					} catch (err) {
						console.log("EVAL ERROR – XFADING", err);
						console.log("signals: ", this.signals);
						console.log("currentSignalFunction: ", this.currentSignalFunction);
						console.log(
							"_q[currentSignalFunction]: ",
							this._q[this.currentSignalFunction]
						);
						console.log("inputs: ", inputs);
						console.log("mems: ", this._mems);
						// HERE'S PART OF THE PROBLEM
						// this.signals[this.currentSignalFunction] = (x, y, z) => {
						//   return 0;
						// };
					}
					this.codeSwapState = this.codeSwapStates.NONE;
					// console.log("xfade complete", xf);
				} else {
					//no xfading - play as normal
					// w = this.signals[this.currentSignalFunction](this._q[this.currentSignalFunction], inputs[0][0][i], this._mems[this.currentSignalFunction]);
					try {
						this.signals[this.currentSignalFunction](
							this._q[this.currentSignalFunction],
							inputs[0][i],
							this._mems[this.currentSignalFunction]
						);
					} catch (err) {
						console.log("EVAL ERROR – NO xfading ", err);
						console.log("signals: ", this.signals);
						console.log("currentSignalFunction: ", this.currentSignalFunction);
						console.log(
							"_q[currentSignalFunction]: ",
							this._q[this.currentSignalFunction]
						);
						console.log("inputs: ", inputs);
						console.log("mems: ", this._mems);
						// HERE'S PART OF THE PROBLEM
						// this.signals[this.currentSignalFunction] = (x, y, z) => {
						//   return 0;
						// };
					}
				}

				// let scope = this._mems[this.currentSignalFunction][":show"];
				// let scopeValue = scope !== undefined ? scope : output[channel][0];
				// output[1][i] = specgramValue;

				for (let channel = 0; channel < channelCount; channel++) {
					output[channel][i] = this.DAC[channel];
				}
			}

			//remove old algo and data?
			let oldIdx = 1.0 - this.currentSignalFunction;
			if (this.xfadeControl.isLineComplete() && this._cleanup[oldIdx] == 0) {
				this.signals[oldIdx] = this.silence;
				//clean up object heap - we must do this because emscripten objects need manual memory management
				for (let obj in this._q[oldIdx]) {
					//if there a delete() function
					if (this._q[oldIdx][obj].delete != undefined) {
						//delete the emscripten object manually
						this._q[oldIdx][obj].delete();
					}
				}
				//create a blank new heap for the next livecode evaluation
				this._q[oldIdx] = this.newq();
				//signal that the cleanup is complete
				this._cleanup[oldIdx] = 1;
			}
		}

		return true;
	}

	/**
	 *
	 * @param {*} audioFloat32ArrayBuffer
	 */
	translateFloat32ArrayToBuffer(audioFloat32ArrayBuffer) {
		var maxiSampleBufferData = new Maximilian.VectorDouble();
		for (var i = 0; i < audioFloat32ArrayBuffer.length; i++) {
			maxiSampleBufferData.push_back(audioFloat32ArrayBuffer[i]);
		}
		return maxiSampleBufferData;
	}
};

registerProcessor("maxi-processor", MaxiProcessor);
