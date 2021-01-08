
// import { AudioEngine } from "../../build/index.mjs";
import { AudioEngine } from "../dist/index.mjs";

let audioEngine;

const bindCallback = (elemId, callback) =>
	document.getElementById(elemId).addEventListener("click", callback);

bindCallback("playButton", () => {
  let audioWorkletURL =
		document.location.origin + "/src/engine/maxi-processor.js";
  audioEngine = new AudioEngine();
  audioEngine.init(audioWorkletURL);
	audioEngine.play();
});

bindCallback("stopButton", () => audioEngine.stop());
bindCallback("plusButton", () => audioEngine.more());
bindCallback("minusButton", () => audioEngine.less());

bindCallback("evalButton", () => {
	let editorValue = editor.getValue();
	console.log(editorValue);
	audioEngine.eval({
		setup: `() => {
      let q = this.newq();;
      q.b0l5 = new Float64Array(2);
      q.b0l5[0] = 3;
      q.b0l5[1] = 2;
      q.b0u3 = new Maximilian.maxiRatioSeq();;
      q.b0u2 = new Maximilian.maxiSample();
      q.b0u2.setSample(this.getSampleBuffer('snare1'));;
      q.b0u1 = new Maximilian.maxiNonlinearity();;
      q.b0l9 = new Float64Array(2);
      q.b0l9[0] = 1;
      q.b0l9[1] = 0;
      q.b0u7 = new Maximilian.maxiRatioSeq();;
      q.b0u6 = new Maximilian.maxiSample();
      q.b0u6.setSample(this.getSampleBuffer('kick1'));;;;;
      return q; }`,
		loop: `(q, inputs, mem) => {
      (mem[0] = q.b0u1.asymclip((q.b0u2.isReady() ? q.b0u2.playOnZX(q.b0u3.playTrig(this.clockPhase(4, 0), (() => { return q.b0l5 })())) : 0.0), 2, 0.1));
      (mem[1] = (q.b0u6.isReady() ? q.b0u6.playOnZX(q.b0u7.playTrig(this.clockPhase(8, 0), (() => { return q.b0l9 })())) : 0.0));
      this.dacOutAll(((mem[0] != undefined ? mem[0] : 0) + (mem[1] != undefined ? mem[1] : 0)));}`,
	});
});

bindCallback("loadSamplesButton", () => {
	audioEngine.loadSample("beat2.wav", "./audio/beat2.wav");
	audioEngine.loadSample("crebit2.ogg", "./audio/crebit2.ogg");
	audioEngine.loadSample("hat12.wav", "./audio/hat12.wav");
	audioEngine.loadSample("kick1.wav", "./audio/kick1.wav");
	audioEngine.loadSample("snare1.wav", "./audio/snare1.wav");
});
