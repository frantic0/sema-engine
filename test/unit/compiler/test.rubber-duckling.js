// const test = require("ava");

// import test from "ava";



const patch1_Livecode = '> {440}sin;';
const patch1_DSP = {
  setup: `() => {
            () => {
              let q = this.newq();
              q.b0u2 = new Module.maxiOsc();
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
            q.b0u3 = new Module.maxiRatioSeq();;
            q.b0u2 = new Module.maxiSample();
            q.b0u2.setSample(this.getSampleBuffer('crebit2'));;
            q.b0u1 = new Module.maxiNonlinearity();;
            q.b0l9 = new Float64Array(2);
            q.b0l9[0] = 1;
            q.b0l9[1] = 0;
            q.b0u7 = new Module.maxiRatioSeq();;
            q.b0u6 = new Module.maxiSample();
            q.b0u6.setSample(this.getSampleBuffer('snare1'));;;;;
            return q; }`,
  loop: `(q, inputs, mem) => {
            (mem[0] = q.b0u1.asymclip((q.b0u2.isReady() ? q.b0u2.playOnZX(q.b0u3.playTrig(this.clockPhase(4, 0), (() => { return q.b0l5 })())) : 0.0), 2, 0.1));
            (mem[1] = (q.b0u6.isReady() ? q.b0u6.playOnZX(q.b0u7.playTrig(this.clockPhase(8, 0), (() => { return q.b0l9 })())) : 0.0));
            this.dacOutAll(((mem[0] != undefined ? mem[0] : 0) + (mem[1] != undefined ? mem[1] : 0)));
          }`,
};


// test('compile-patch1', (t) => {

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