importScripts(
	"https://cdn.jsdelivr.net/npm/@tensorflow/tfjs@1.4.0/dist/tf.min.js"
);
importScripts(
	"https://cdn.jsdelivr.net/npm/@magenta/music@^1.12.0/es6/core.js"
);
importScripts(
	"https://cdn.jsdelivr.net/npm/@magenta/music@^1.12.0/es6/music_vae.js"
);

___;

let mvae,
	midime,
	training = {};

const MELODY_BARS = 2;
const MELODY_DIMS = [
	73, 135, 230, 177, 38, 208, 172, 56, 212, 211, 140, 142, 150, 1, 202, 74, 33,
	187, 206, 14, 154, 2, 31, 32, 244, 24, 183, 173, 64, 3, 108, 196, 132, 29, 75,
	156, 131, 26, 237, 164, 200, 48, 218, 44, 113, 167, 250, 166, 90, 77, 23, 185,
	246, 180, 217, 10, 111, 213, 46, 127, 216, 117, 128, 16, 222, 243, 240, 233,
	70, 9, 88, 236, 179, 40, 94, 4, 182, 241, 78, 165, 125, 25, 103, 81, 66, 83,
	91, 124, 105, 226, 247, 145, 68, 238, 69, 47, 254, 153, 119, 5, 255, 170, 158,
	176, 84, 225, 186, 43, 99, 245, 224, 168, 45, 160, 63, 49, 37, 61, 35, 101,
	141, 41, 248, 209, 134, 149, 147, 30, 110, 188, 118, 52, 67, 133, 92, 95, 126,
	112, 15, 93, 157, 107, 55, 60, 130, 235, 231, 6, 123, 171, 114, 20, 139, 162,
	199, 86, 51, 120, 227, 85, 152, 178, 80, 184, 39, 215, 22, 138, 192, 57, 155,
	252, 198, 13, 50, 181, 8, 121, 148, 193, 204, 36, 251, 219, 0, 97, 220, 229,
	109, 21, 194, 159, 72, 122, 146, 87, 42, 102, 189, 65, 115, 253, 19, 163, 201,
	207, 137, 100, 27, 242, 34, 203, 129, 210, 11, 54, 232, 12, 28, 98, 71, 18,
	205, 17, 79, 249, 197, 221, 223, 234, 106, 76, 175, 239, 136, 53, 58, 89, 191,
	82, 190, 59, 62, 174, 214, 96, 161, 195, 151, 116, 143, 7, 104, 169, 144, 228,
];

// Get a new random sample.
async function sample() {
	let zArray;
	if (midime && midime.trained) {
		// If we've trained, then we sample from MidiMe.
		const s = await midime.sample(1);
		zArray = s.arraySync()[0];
		currentSample = (await mvae.decode(s))[0];

		// Get the 4 inputs from midime too.
		const z = midime.encoder.predict(s);
		const z_ = z[0].arraySync()[0];
		s.dispose();

		//updateMidiMeSliders(z_);
	} else {
		// Get a random sample from music vae. This is basically the
		// code inside mvae.sample(), but since we need the z to
		// display, might as well do it here.
		const randZs = tf.tidy(() => tf.randomNormal([1, mvae.decoder.zDims]));
		currentSample = (await mvae.decode(randZs, 0.5))[0];
		zArray = randZs.arraySync()[0];
		randZs.dispose();
	}

	//updateFullSliders(zArray);
	//updateVisualizer();

	training.zArray = zArray;
	console.log(zArray);
}

mvae = new music_vae.MusicVAE(
	"https://storage.googleapis.com/magentadata/js/checkpoints/music_vae/mel_2bar_small"
);

mvae.initialize().then(() => {
	sample();
	console.log("model-loaded");
});

midime = new music_vae.MidiMe({ epochs: 100 });
midime.initialize();

___;

console.log(music_vae.MidiMe);

async function train() {
	currentSample = null;
	trainingStep.textContent = 0;
	totalSteps.textContent = midime.config.epochs = parseInt(trainingSteps.value);

	const losses = [];

	await midime.train(training.z, async (epoch, logs) => {
		await tf.nextFrame();
		trainingStep.textContent = epoch + 1;
		losses.push(logs.total);

		plotLoss(losses);
	});
	updateUI("training-done");
	sample();
}
___;

//route the test data into the model

var w = 0;
input = (x, id) => {
	console.log(">toModel:   " + [id, x]);
	let p = test(x);
	output(p, 0);
};
