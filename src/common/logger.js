import Dispatcher from './dispatcher.js';

// var cl, ci, cw, ce;

export class Logger {
	/**
	 * @constructor
	 */
	constructor() {
		if (Logger.instance) {
			return Logger.instance; // Singleton pattern
		}
		Logger.instance = this;

		this.log = [];
		this.rawLog = ""; //raw log of string data
		this.originTypes = { main: "[MAIN]", processor: "[PROCESSOR]", learner: "[LEARNER]"}

		this.dispatcher = new Dispatcher();
	}

	addEventListener(event, callback) {
		// console.log("registering", event, callback);
		if (this.dispatcher && event && callback) {
			this.dispatcher.addEventListener(event, callback);
			// console.log("registered");
		} else throw new Error("Error adding event listener to Logger");
	}

	push(data) {
		this.log.push(data);
		this.rawLog =
		this.rawLog + "\n" + data.origin + " " + [...data.payload].join();
		this.dispatcher.dispatch("onLog");
	}

	//clears all logs
	clear(){
		this.log = [];
		this.rawLog = "";
	}

	takeOverConsole() {
		if (window.console) {
			let cl, ci, cw, ce;

			if (window.console.log) cl = console.log;
			if (window.console.info) ci = console.info;
			if (window.console.warn) cw = console.warn;
			if (window.console.error) ce = console.error;
			if (cl && ci && cw && ce) {
				// cw("taking over MAIN console");
				console.log = function (text) {
					this.push({
						func: "logs",
						payload: [...arguments],
						logLevel: "log",
						origin: this.originTypes.main,
					});
					cl.apply(this, arguments);
				}.bind(this);

				console.info = function (text) {
					this.push({
						func: "logs",
						payload: [...arguments],
						logLevel: "info",
						origin: this.originTypes.main,
					});
					ci.apply(this, arguments);
				}.bind(this);

				console.warn = function (text) {
					this.push({
						func: "logs",
						payload: [...arguments],
						logLevel: "warn",
						origin: this.originTypes.main,
					});
					cw.apply(this, arguments);
				}.bind(this);

				console.error = function (text) {
					this.push({
						func: "logs",
						payload: [...arguments],
						logLevel: "error",
						origin: this.originTypes.main,
					});
					ce.apply(this, arguments);
				}.bind(this);

				// ce("MAIN console taken over");
			}
		}
	}
}
