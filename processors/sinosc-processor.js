'use strict';

class SineOscillator extends AudioWorkletProcessor {
	constructor() {
		super();
    this.n = 0;
    this.frequency = 440;
	}


	process(inputs, outputs, parameters) {
    const fs = 44100;
		for (var i = 0; i < outputs.length; i++) {
			for (var j = 0; j < outputs[i].length; j++) {
				for (var k = 0; k < outputs[i][j].length; k++) {
					outputs[i][j][k] = Math.sin( (2 * Math.PI * this.frequency * this.n++) / fs);
				}
			}
		}
		return true;
	}
}

registerProcessor("sinosc-processor", SineOscillator);

