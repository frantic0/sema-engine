"use strict";

import { RingBuffer } from "ringbuf.js";
self.RingBuffer = RingBuffer;

var outputSABs = {};

// var console = self.console;
var cl, ci, cw, ce;

if (self.console) {
	if (self.console.log) cl = console.log;
	if (self.console.log) ci = console.info;
	if (self.console.log) cw = console.warn;
	if (self.console.log) ce = console.error;
	if(cl && ci && cw && ce){
		// cw("taking over console");
		console.log = function () {
			self.postMessage({
				func: "logs",
				payload: [...arguments],
				logLevel: "log",
				origin: "[LEARNER]",
			});
			cl.apply(this, arguments);
		};
		console.info = function (text) {
			self.postMessage({
				func: "logs",
				payload: [...arguments],
				logLevel: "info",
				origin: "[LEARNER]",
			});
			ci.apply(this, arguments);
		};
		console.warn = function (text) {
			self.postMessage({
				func: "logs",
				payload: [...arguments],
				logLevel: "warn",
				origin: "[LEARNER]",
			});
			cw.apply(this, arguments);
		};
		console.error = function (text) {
			self.postMessage({
				func: "logs",
				payload: [...arguments],
				logLevel: "error",
				origin: "[LEARNER]",
			});
			ce.apply(this, arguments);
		};
		// ce("console taken over");
	}
}


class MLSABOutputTransducer {
	constructor(ttype, channel, blocksize) {
		this.channel = channel;
		this.blocksize = blocksize;
		//check for existing channels
		if (channel in outputSABs && outputSABs[channel].blocksize == blocksize) {
			//reuse existing
			this.ringbuf = outputSABs[channel].rb;
		} else {
			//create a new SAB and notify the receiver
			this.sab = RingBuffer.getStorageForCapacity(32 * blocksize, Float64Array);
			this.ringbuf = new RingBuffer(this.sab, Float64Array);

			outputSABs[channel] = {
				rb: this.ringbuf,
				// sab: this.sab,
				created: Date.now(),
				blocksize: blocksize,
			};

			postMessage({
				func: "sab",
				sab: this.sab,
				ttype: ttype,
				channelID: channel,
				blocksize: blocksize,
			});
		}
	}

	send(value) {
		if (this.ringbuf.available_write() > 1) {
			if (typeof value == "number") {
				this.ringbuf.push(new Float64Array([value]));
			} else {
				if (value.length == this.blocksize) {
					this.ringbuf.push(value);
				} else if (value.length < this.blocksize) {
					let newVal = new Float64Array(this.blocksize);
					for (let i in value) newVal[i] = value[i];
					this.ringbuf.push(newVal);
				} else {
					this.ringbuf.push(value.slice(0, this.blocksize));
				}
			}
		}
	}
}

self.createOutputChannel = ( id, blocksize ) => {
  return new MLSABOutputTransducer('ML', id, blocksize);
};

/**
 * User-defined function that acts as an event handler
 * @param {*} value
 * @param {*} channel
 */
self.input = ( value, channel ) => {}

//
/**
 * User-invokable function in the JS editor to direct value x to output channel
 * @param {*} value
 * @param {*} channel
 */
self.output = ( value, channel ) => {
  postMessage( {
                  func: 'data',
                  val: value,
                  ch: channel
                }
  );
}

self.loadResponders = {};

self.inputSABs = {};

self.sema = {
	saveF32Array: (name, val) => {
		postMessage({
			func: "save",
			name: name,
			val: val,
		});
		return 0;
	},
	loadF32Array: (name, onload) => {
		postMessage({
			func: "load",
			name: name,
		});
		loadResponders[name] = onload;
		return 0;
	},
	download: (name) => {
		postMessage({
			func: "download",
			name: name,
		});
	},
	sendCode: (code) => {
		postMessage({
			func: "sendcode",
			code: code,
		});
	},
	pbcopy: (msg) => {
		postMessage({
			func: "pbcopy",
			msg: msg,
		});
	},
	sendBuffer: (bufferName, data) => {
		postMessage({
			func: "sendbuf",
			name: bufferName,
			data: data,
		});
	},

	env: {
		saveLocal: (name) => {
			postMessage({
				func: "envsave",
				name: name,
				storage: "local",
			});
		},

		loadLocal: (name) => {
			postMessage({
				func: "envload",
				name: name,
				storage: "local",
			});
		},

		saveToPB: () => {
			postMessage({
				func: "envsave",
				storage: "pastebuffer",
			});
		},

		loadGist: (gistid) => {
			postMessage({
				func: "envload",
				name: gistid,
				storage: "gist",
			});
		},
	},

	//run in the DOM
	domeval: (code) => {
		postMessage({
			func: "domeval",
			code: code,
		});
	},

	peerinfo: () => {
		postMessage({
			func: "peerinfo",
		});
		console.log("Your peer ID has been copied to the paste buffer");
	},

};




function initWithURL(url){
  if( new URL(url) ){
    try {
      // importScripts(url + "/lalolib.js");
    } catch (err) {
      console.error("ERROR: importScripts – lalolib.js ", err);
    }
    try{
      // importScripts(url + "/svd.js");
    } catch (err) {
      console.error("ERROR: importScripts – svd.js ", err);
    }
    try{
      // importScripts(
      //   "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"
      // );
    } catch (err) {
      console.error("ERROR: importScripts – tfjs", err);
    }
    try{
      sabChecker();
    } catch (err) {
      console.error("ERROR: sabChecker", err);
    }
    postMessage({ init: true });
  }
  else
    console.error("ERROR: initWithURL – Invalid URL");
}

const gevalToConsole = e => {
  try {
		if (!geval) var geval = eval;

    let res = geval(e);
		// console.info(res);
    if (res !== undefined) console.info(res); // print to console if successful
		else console.info("done");

	} catch (error) {
    console.error(`Eval exception on Learner: `, error);
  }
}

onmessage = m => {

  if(m.data.url)
    initWithURL(m.data.url);

  else if (m.data.eval)
    gevalToConsole(m.data.eval);

  else if ("val" in m.data) {
    // console.log("DEBUG:ml.worker:onmessage:val");
    let val = m.data.val;
    // console.log(val);
    val = JSON.parse(`[${val}]`);
    // console.log(val);
    // console.log(loadResponders);
    loadResponders[m.data.name](val);
    delete loadResponders[m.data.name];

  } else if (m.data.type === "model-input-data") {
    input(m.data.value, m.data.ch);

  } else if (m.data.sab){
    console.info('buffer received');
    let sab = m.data.sab;
    let rb = new RingBuffer(sab, Float64Array);
    inputSABs[m.data.channelID] = {
      // sab,
      rb,
      blocksize: m.data.blocksize
    };
  }
};

function sabChecker() {
  try {
    // console.log(inputSABs);
    for (let v in inputSABs) {
      let avail = inputSABs[v].rb.available_read();
      // console.log(avail, inputSABs[v].rb.capacity, inputSABs[v].blocksize);
      if (avail != inputSABs[v].rb.capacity && avail > 0) {
        for (let i = 0; i < avail; i += inputSABs[v].blocksize) {
          let val = new Float64Array(inputSABs[v].blocksize);
          inputSABs[v].rb.pop(val);
          // console.log(val);
          input(v, val);
        }
      }
    }
    setTimeout(sabChecker, 20);
  } catch (error) {
    // console.log(error);
    setTimeout(sabChecker, 100);
  }
}

