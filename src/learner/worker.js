"use strict";

  function gevalAll() {
		if (!geval) {
			var geval = eval; // puts eval into global scope https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
			geval("var input = (value, channel) => {}");
			geval(
				"var output = (value,channel) => {postMessage({func:'data', val:value, ch:channel});}"
			);

			geval(`
var outputSABs = {};
class MLSABOutputTransducer {
  constructor(bufferType, channel, blocksize) {
    this.channel = channel;
    this.blocksize = blocksize;

    //check for existing channels
    if (channel in outputSABs && outputSABs[channel].blocksize == blocksize) {
      //reuse existing
      this.ringbuf = outputSABs[channel].rb;
    }else{
      //create a new SAB and notify the receiver
      this.sab = RingBuffer.getStorageForCapacity(32 * blocksize, Float64Array);
      this.ringbuf = new RingBuffer(this.sab, Float64Array);
      outputSABs[channel] = {rb:this.ringbuf, sab:this.sab, created:Date.now(), blocksize:blocksize};

      postMessage({
        func: 'sab',
        value: this.sab,
        ttype: bufferType,
        channelID: channel,
        blocksize:blocksize
      });
    }
  }

  send(value) {
    if (this.ringbuf.available_write() > 1) {
      if (typeof(value) == "number") {
        this.ringbuf.push(new Float64Array([value]));
      }else{
        if (value.length == this.blocksize) {
          this.ringbuf.push(value);
        }else if (value.length < this.blocksize) {
          let newVal = new Float64Array(this.blocksize);
          for(let i in value) newVal[i] = value[i];
          this.ringbuf.push(newVal);
        }else{
          this.ringbuf.push(value.slice(0,this.blocksize));
        }
      }
    }
  }

}

var createOutputChannel = (id, blocksize) => {
  return new MLSABOutputTransducer('ML', id, blocksize);
};
`);

			geval(`
var loadResponders = {};
var inputSABs={};
var sema = {
  saveF32Array: (name, val) => {
    postMessage({
      "func": "save",
      "name": name,
      "val": val
    });
    return 0;
  },
  loadF32Array: (name, onload) => {
    postMessage({
      "func": "load",
      "name": name,
    });
    loadResponders[name] = onload;
    return 0;
  },
  download: (name) => {
    postMessage({
      "func": "download",
      "name": name,
    });
  },
  sendCode: (code) => {
    postMessage({
      "func": "sendcode",
      "code": code,
    });
  },
  pbcopy: (msg) => {
    postMessage({
      "func": "pbcopy",
      "msg": msg,
    });
  },
  sendBuffer: (bufferName,data) => {
      postMessage({
          "func": "sendbuf",
          "name": bufferName,
          "data": data
      });
  },
  env: {
    saveLocal: (name) => {
      postMessage({
            "func": "envsave",
            "name": name,
            "storage":"local"
        }
      )
    },
    loadLocal: (name) => {
      postMessage({
            "func": "envload",
            "name": name,
            "storage":"local"
        }
      )
    },
    saveToPB: () => {
      postMessage({
            "func": "envsave",
            "storage":"pastebuffer"
        }
      )
    },
    loadGist: (gistid) => {
      postMessage({
            "func": "envload",
            "name": gistid,
            "storage":"gist"
        }
      )
    },

  },
  //run in the DOM
  domeval: (code) => {
    postMessage({
          "func": "domeval",
          "code": code,
      }
    )
  },
  peerinfo: () => {
    postMessage ({
      "func": "peerinfo"
    });
    console.log("Your peer ID has been copied to the paste buffer")
  }
};
`);
		}
		try {

			// let evalRes = geval("var channel0 = createOutputChannel(0, 1)");
		} catch (err) {
			console.error("ERROR:eval:", err);
		}
	}

  function initWithURL(url){
    if(new URL(url))
      try {
        importScripts(url + "/lalolib.js");
        importScripts(url + "/svd.js");
        importScripts(url + "/mlworkerscripts.js");
        importScripts(
          "https://cdn.jsdelivr.net/npm/@tensorflow/tfjs/dist/tf.min.js"
        );
        gevalAll();
        sabChecker();

        postMessage({ init: true });
        // console.log(
        //   "DEBUG:worker: importScripts, gevalAll and sabChecker succeeded"
        // );
      } catch (err) {
        console.error("ERROR: on importScripts, gevalAll and sabChecker");
      }
    else
      console.error("ERROR:worker:initWithURL: Invalid URL");

  }

onmessage = m => {
  // console.log("DEBUG:worker:onmessage");
	// console.log(m);

  // Init message only
  if(m.data.url){
    initWithURL(m.data.url);
  }

  if (m.data.eval) {
    try {
      if (!geval) var geval = eval;
      let evalRes = geval(m.data.eval);

      // console.log("DEBUG:worker:geval");
      // console.log(evalRes);
    } catch (e) {
      console.error(`ERROR:worker:geval exception: ${e} `, m.data.eval);
    }

  } else if ("val" in m.data) {
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

  // } else if (m.data.type === "model-input-buffer") {
  } else if (m.data.sab){

    console.log("DEBUG: SAB received", m);

    let sab = m.data.sab;
    let rb = new RingBuffer(sab, Float64Array);

    inputSABs[m.data.channelID] = {
      sab,
      rb,
      blocksize: m.data.blocksize
    };

    console.log("ML", inputSABs);
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

