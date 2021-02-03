// here we use the default pattern but any RegEx can be configured
import mlworker from 'web-worker:./ml.worker.js';

export class Learner {
	/**
	 * @constructor
	 * @param {*} url
	 * @param {*} sab
	 */
	constructor() {
		this.worker = new mlworker();
		// const worker = new mlworker({ type: "module" });
	}

  /**
   * Initialises worker with origin URL
   * @param {*} url
   * @param {*} sab
   */
  init(url){
    if (this.worker && new URL(url)) {

      this.worker.postMessage({ url });
    }
  }

	/**
	 *
	 */
	createOutputChannel() {

  }

	/**
	 *
	 */
	eval() {

  }

	/**
	 *
	 * @param {*} callback
	 */
	subscribe(callback) {
		worker.onmessage;
	}

	/**
	 *
	 */
	terminate() {
		worker.terminate();
		worker = null; // make sure it is deleted by GC
	}
}
