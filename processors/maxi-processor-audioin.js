class CustomProcessor extends AudioWorkletProcessor {

  static get parameterDescriptors() {
    return [{ name: 'gain', defaultValue: 0.1 }];
  }

  constructor() {
    super();
    this.sampleRate = 44100;

    this.port.onmessage = (event) => {
      console.log(event.data);
    };

  }

  process(inputs, outputs, parameters) {

    const outputsLength = outputs.length;
    for (let outputId = 0; outputId < outputsLength; ++outputId) {
      let output = outputs[outputId];
      const channelLenght = output.length;

      for (let channelId = 0; channelId < channelLenght; ++channelId) {
        const gain = parameters.gain;
        const isConstant = gain.length === 1
        let outputChannel = output[channelId];

        for (let i = 0; i < outputChannel.length; ++i) {
          const amp = isConstant ? gain[0] : gain[i]
          // outputChannel[i] = (this.mySine.sawn(60) * this.myOtherSine.sinewave(0.4)) * amp;
          outputChannel[i] = ( Math.sin(i) + 0.4 ) * amp;
        }
      }
    }
    return true;
  }

};

registerProcessor("maxi-processor-base", CustomProcessor);
