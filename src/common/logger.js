import Dispatcher from './dispatcher.js';

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

		this.dispatcher = new Dispatcher();
	}

	//pass in svelte store, of log
	// setStore(storeLog){
	// 	storeLog.set = this.rawLog;
	// }


	addEventListener(event, callback) {
		// console.log("registering", event, callback);
		if (this.dispatcher && event && callback){
			this.dispatcher.addEventListener(event, callback);
			// console.log("registered");
		}
		else throw new Error("Error adding event listener to Logger");
	}


	push(data){
		this.log.push(data);
		this.rawLog = this.rawLog + "\n" + data.type + " " + [...data.payload].join();
		this.dispatcher.dispatch("onLog");
		//console.log("getting dispatched", this.rawLog);
		//this.dispatcher.dispatch("onConsoleLogsUpdate", {test:10});
	}

	//console.log = overrideConsoleLog();



	takeOverConsole(f) {
		if (f) {
			try {
				var original = window.console;

				function handle(method, args) {
					var message = Array.prototype.slice.apply(args).join(" ");
					if (original) original[method]("> " + message);
				}

				window.console = {
					log: function () {
						handle("log", arguments);
					},
					warn: function () {
						handle("warn", arguments);
					},
					error: function () {
						handle("error", arguments);
					},
					info: function () {
						handle("info", arguments);
					},
				};
			} catch (error) {
				console.error(error);
			}
		}
	}

}
