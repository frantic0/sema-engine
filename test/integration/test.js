
import { expect } from "chai";

// const compile = require("../../src/index.js");
// const engine = require("../dist/sema-engine.js");
// import engine from "../../src/index.js";
// import { Engine } from "../../src/engine/engine";

import { compile } from "../fixtures/sema-engine.mjs";

const fs = require("fs");

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

describe("test-compile", function () {

  var default_grammar = null;

	before("test1", function (done) {
    // Need to give path to the file from 'test' folder
		fs.readFile("test/fixtures/lang/default-grammar.txt", "utf8", (err, data) => {
			if (err) throw err;
      default_grammar = data;
			// console.log(data);
			done();
		});
	});

	describe("compile()", function () {
		it("should an object with `setup` and `loop` properties", function () {
			// const is_null_input = inputs.get("is_null_input");
			expect(default_grammar).to.equal(default_grammar); // Success!

		});
	});
});


// Asynchronously
describe("API Tests", function () {
  var tests = "";
  before(function (done) {

    // var file = new File([string], { type: "plain/text", endings: endings });
    // var reader = new FileReader();
    // reader.onload = function (event) {
    //   console.log(
    //     endings +
    //       " of " +
    //       JSON.stringify(string) +
    //       " => " +
    //       JSON.stringify(reader.result)
    //   );
    // };
    // reader.readAsText(file);

    fs.readFile(
      "../../assets/langs/default-livecode.txt",
      "utf8",
      function (err, fileContents) {
        if (err) throw err;
        // tests = JSON.parse(fileContents);
        console.log(fileContents);
        done();
      }
    );

  });

  for (var i = 0; i < tests.length; i++) {
    runTest(tests[i]);
  }
});

describe("engine", function () {
	it("should return the sum of two arguments", function () {

		var data = fs.readFileSync(
			"./default-grammar.txt",
			"utf8"
		);
		console.log(data);
    // console.log(default_grammar);
    // expect(compile(patch1_Livecode)).to.equal(patch1_Livecode);
	});
});

describe("engine-2", function () {
	it("should return the sum of two arguments", function () {
    // expect(compile(patch2_Livecode)).to.equal(patch2_Livecode);
	});
});



// test('compile-default-patch1', (t) => {

//   const engine = new Engine();

//   const { errors, dspCode } = compile(patch1_Livecode, patch1_DSP);
// 	if (dspCode && engine) {
// 		engine.eval(dspCode);
// 	}
//   t.pass();
// })

// test("foo", (t) => {
//   t.pass();
// });

// test("bar", async (t) => {
//   const bar = Promise.resolve("bar");
//   t.is(await bar, "bar");
// });