
import { expect } from "chai";
import { compile } from "../../src/compiler/compiler.js";
const fs = require("fs");

describe("test compile Default livecode source with Default grammar source", function () {

  let default_grammar = null,
		default_1_lc = null,
		default_1_dsp = null,
		default_2_lc = null,
		default_2_dsp = null,
    default_3_lc = null,
    default_3_dsp = null;

	before("#compile(grammar, livecode)", function (done) {
		// Need to give path to the file from 'test' folder
		fs.readFile(
			"test/fixtures/lang/default-grammar.txt",
			"utf8",
			(err, data) => {
				if (err) throw err;
				default_grammar = data;
			}
		);

		fs.readFile("test/fixtures/lang/default-1-lc.txt", "utf8", (err, data) => {
			if (err) throw err;
			default_1_lc = data;
		});

		fs.readFile("test/fixtures/lang/default-1-dsp.json", "utf8", (err, data) => {
			if (err) throw err;
			default_1_dsp = JSON.parse(data);
      // done();
		});

		fs.readFile("test/fixtures/lang/default-2-lc.txt", "utf8", (err, data) => {
			if (err) throw err;
			default_2_lc = data;
		});

		fs.readFile("test/fixtures/lang/default-2-dsp.json", "utf8", (err, data) => {
			if (err) throw err;
			default_2_dsp = JSON.parse(data);
			done();
		});

    // fs.readFile("test/fixtures/lang/default-3-lc.txt", "utf8", (err, data) => {
		// 	if (err) throw err;
		// 	default_3_lc = data;
		// });

		// fs.readFile("test/fixtures/lang/default-3-dsp.json", "utf8", (err, data) => {
		// 	if (err) throw err;
		// 	default_3_dsp = JSON.parse(data);
		// 	done();
		// });

		// fs.readFile("test/fixtures/lang/default-3-lc.txt", "utf8", (err, data) => {
		// 	if (err) throw err;
		// 	default_3_lc = data;
		// });

		// fs.readFile("test/fixtures/lang/default-3-dsp.json", "utf8", (err, data) => {
		// 	if (err) throw err;
		// 	default_3_dsp = JSON.parse(data);
		// 	done();
		// });

	});

	describe("#compile(default_grammar, default_1_lc)", function () {
		it("should return an object with the same `setup` and `loop` properties", function () {
			const dspCode = compile(default_grammar, default_1_lc).dspCode;
			expect(dspCode.setup.replace(/\s/g, "")).to.equal(
				default_1_dsp.setup.replace(/\s/g, "")
			);
			expect(dspCode.loop.replace(/\s/g, "")).to.equal(
				default_1_dsp.loop.replace(/\s/g, "")
			);
		});
	});

	describe("#compile(default_grammar, default_2_lc)", function () {
		it("should return an object with the same `setup` and `loop` properties", function () {
			const dspCode = compile(default_grammar, default_2_lc).dspCode;
			expect(dspCode.setup.replace(/\s/g, "")).to.equal(
				default_2_dsp.setup.replace(/\s/g, "")
			);
			expect(dspCode.loop.replace(/\s/g, "")).to.equal(
				default_2_dsp.loop.replace(/\s/g, "")
			);
		});
	});

	// describe("#compile(grammar, livecode)", function () {
	// 	it("should return an object with the same `setup` and `loop` properties", function () {
	// 		const dspCode = compile(default_grammar, default_3_lc).dspCode;
	// 		expect(dspCode.setup.replace(/\s/g, "")).to.equal(
	// 			default_3_dsp.setup.replace(/\s/g, "")
	// 		);
	// 		expect(dspCode.loop.replace(/\s/g, "")).to.equal(
	// 			default_3_dsp.loop.replace(/\s/g, "")
	// 		);
	// 	});
	// });


});
