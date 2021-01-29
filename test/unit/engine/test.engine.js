
import { expect } from "chai";
// const engine = require("../dist/sema-engine.js");
// import engine from "../dist/sema-engine.mjs";
// import { Engine } from "../../srcsrc";



const patch1_Livecode = '> {440}sin;';
const patch1_DSP = {
  setup: `() => {
            () => {
              let q = this.newq();
              q.b0u2 = new Maximilian.maxiOsc();
              q.b0u2.phaseReset(0);;;;
              return q;
            }
          }`,
  loop: `(q, inputs, mem) => {
            this.dacOutAll(q.b0u2.sinewave(440));
          }`,
};

const patch2_Livecode = ''
const patch2_DSP = {
  setup: `() => {
            let q = this.newq();;
            q.b0l5 = new Float64Array(2);
            q.b0l5[0] = 3;
            q.b0l5[1] = 2;
            q.b0u3 = new Maximilian.maxiRatioSeq();;
            q.b0u2 = new Maximilian.maxiSample();
            q.b0u2.setSample(this.getSampleBuffer('crebit2'));;
            q.b0u1 = new Maximilian.maxiNonlinearity();;
            q.b0l9 = new Float64Array(2);
            q.b0l9[0] = 1;
            q.b0l9[1] = 0;
            q.b0u7 = new Maximilian.maxiRatioSeq();;
            q.b0u6 = new Maximilian.maxiSample();
            q.b0u6.setSample(this.getSampleBuffer('snare1'));;;;;
            return q; }`,
  loop: `(q, inputs, mem) => {
            (mem[0] = q.b0u1.asymclip((q.b0u2.isReady() ? q.b0u2.playOnZX(q.b0u3.playTrig(this.clockPhase(4, 0), (() => { return q.b0l5 })())) : 0.0), 2, 0.1));
            (mem[1] = (q.b0u6.isReady() ? q.b0u6.playOnZX(q.b0u7.playTrig(this.clockPhase(8, 0), (() => { return q.b0l9 })())) : 0.0));
            this.dacOutAll(((mem[0] != undefined ? mem[0] : 0) + (mem[1] != undefined ? mem[1] : 0)));
          }`,
};


/*
import "../../fixtures/AudioWorkletProcessor.js";
import GainWorklet from "@/worklet/GainWorklet";
import * as MockAudio from "../../fixtures/MockAudioDataa";

describe("GainWorkletTests", () => {
	test("is GainWorklet instantiated", () => {
		const worklet = new GainWorklet();
		expect(worklet).toBeTruthy();
	});

	test("is type GainWorklet", () => {
		const worklet = new GainWorklet();
		expect(worklet).toBeInstanceOf(GainWorklet);
	});

	test("test gain 1", () => {
		const worklet = new GainWorklet();
		const testGain = 1.0;
		const inputs = MockAudio.inputs;
		let outputs = MockAudio.outputs;
		worklet.process(inputs, outputs, {
			gainChannel_0: [testGain],
			gainChannel_1: [testGain],
		});
		const input = inputs[0];
		const output = outputs[0];
		for (let i = 0; i < input.length; ++i) {
			expect(MockAudio.framesMatch(output[i], input[i], testGain)).toBe(true);
		}
	});

	test("test gain 0.5", () => {
		const worklet = new GainWorklet();
		const testGain = 0.5;
		const inputs = MockAudio.inputs;
		let outputs = MockAudio.outputs;
		worklet.process(inputs, outputs, {
			gainChannel_0: [testGain],
			gainChannel_1: [testGain],
		});
		const input = inputs[0];
		const output = outputs[0];
		for (let i = 0; i < input.length; ++i) {
			expect(MockAudio.framesMatch(output[i], input[i], testGain)).toBe(true);
		}
	});

	test("test gain 0.0", () => {
		const worklet = new GainWorklet();
		const testGain = 0.0;
		const inputs = MockAudio.inputs;
		let outputs = MockAudio.outputs;
		worklet.process(inputs, outputs, {
			gainChannel_0: [testGain],
			gainChannel_1: [testGain],
		});
		const input = inputs[0];
		const output = outputs[0];
		for (let i = 0; i < input.length; ++i) {
			expect(MockAudio.framesMatch(output[i], input[i], testGain)).toBe(true);
		}
	});
});
*/