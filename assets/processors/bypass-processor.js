class Bypass extends AudioWorkletProcessor {
	process(inputs, outputs, parameters) {
		for (var i = 0; i < inputs.length; i++) {
			for (var j = 0; j < inputs[i].length; j++) {
				for (var k = 0; k < inputs[i][j].length; k++) {
					outputs[i][j][k] = inputs[i][j][k];
				}
			}
		}
		return true;
	}
}

registerProcessor("bypass", Bypass);
