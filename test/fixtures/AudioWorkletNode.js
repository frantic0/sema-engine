class MessagePort {
  constructor() {
  }

  postMessage(string) {
  }
}

export default class AudioWorkletProcessor {
  constructor() {
    this.port = new MessagePort()
  }
}

global.AudioWorkletProcessor = AudioWorkletProcessor
global.registerProcessor = () => {}