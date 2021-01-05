
import { AudioEngine } from "../../build/index.js";

let audioEngine = new AudioEngine();

document.getElementById('playButton').addEventListener("click", () => {
  console.log("click")
  audioEngine.init();
  audioEngine.play();
});

document.getElementById('stopButton').addEventListener("click", () => audioEngine.stop());
document.getElementById('plusButton').addEventListener("click", () => audioEngine.more(0.5));
document.getElementById('minusButton').addEventListener("click", () => audioEngine.less(0.5));
document.getElementById('evalButton').addEventListener("click", () => {

});

document.getElementById('loadSamplesButton').addEventListener("click", () => {
  loadSampleToArray('./audio/909.wav');
});
