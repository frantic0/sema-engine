import './fixtures/AudioWorkletProcessor.js.js';
import GainWorklet from "@/worklet/GainWorklet";
import * as MockAudio from './fixtures/MockAudioData'

describe("GainWorkletTests", () => {

  test('is GainWorklet instantiated', () => {
    const worklet = new GainWorklet()
    expect(worklet).toBeTruthy()
  })

  test('is type GainWorklet', () => {
    const worklet = new GainWorklet()
    expect(worklet).toBeInstanceOf(GainWorklet)
  })

  test('test gain 1', () => {
    const worklet = new GainWorklet()
    const testGain = 1.0
    const inputs = MockAudio.inputs
    let outputs = MockAudio.outputs
    worklet.process(inputs, outputs, { gainChannel_0: [testGain], gainChannel_1: [testGain]})
    const input = inputs[0]
    const output = outputs[0]
    for (let i = 0; i < input.length; ++i) {
      expect(MockAudio.framesMatch(output[i], input[i], testGain)).toBe(true)
    }
  })

  test('test gain 0.5', () => {
    const worklet = new GainWorklet()
    const testGain = 0.5
    const inputs = MockAudio.inputs
    let outputs = MockAudio.outputs
    worklet.process(inputs, outputs, { gainChannel_0: [testGain], gainChannel_1: [testGain]})
    const input = inputs[0]
    const output = outputs[0]
    for (let i = 0; i < input.length; ++i) {
      expect(MockAudio.framesMatch(output[i], input[i], testGain)).toBe(true)
    }
  })

  test('test gain 0.0', () => {
    const worklet = new GainWorklet()
    const testGain = 0.0
    const inputs = MockAudio.inputs
    let outputs = MockAudio.outputs
    worklet.process(inputs, outputs, { gainChannel_0: [testGain], gainChannel_1: [testGain]})
    const input = inputs[0]
    const output = outputs[0]
    for (let i = 0; i < input.length; ++i) {
      expect(MockAudio.framesMatch(output[i], input[i], testGain)).toBe(true)
    }
  })

});
