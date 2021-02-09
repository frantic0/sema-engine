import Maximilian from "./maximilian.wasmmodule.js";
import RingBuffer from "./ringbuf.js";

export class SABInputTransducer {

	constructor(id, triggered = 0) {
		this.value = 0;
		this.id = id;
		this.triggered = triggered;
		this.zx = new Maximilian.maxiTrigger();
	}

	getSABValue(inputBuffers, trigger) {
		let reading = 1;
		if (this.triggered) {
			reading = this.zx.onZX(trigger);
		}
		if (reading) {
			let sab = inputBuffers[this.id];
			if (sab) {
				this.value = sab.value;
			}
		}
		return this.value;
	}
}

export class SABOutputTransducer {
	constructor(outputSABs, port, bufferType, channel, now, blocksize) {
		this.port = port;
		this.zx = new Maximilian.maxiTrigger();
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
				sab: this.sab,
				created: now,
				blocksize: blocksize,
			};

			this.port.postMessage({
				rq: "buf",
				value: this.sab,
				ttype: bufferType,
				channelID: channel,
				blocksize: blocksize,
			});
		}
	}

	send(trig, value) {
		if (this.zx.onZX(trig)) {
			//console.log("tr", this.ringbuf.available_write(), value, this);
			if (this.ringbuf.available_write() > this.blocksize) {
				if (typeof value == "number") {
					this.ringbuf.push(new Float64Array([value]));
				} else {
					// console.log("SAB", value.length, this.blocksize);
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
				// console.log('val written', value);
			}
		}
		return value;
	}
}
