import Dispatcher from '../common/dispatcher.js';

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
		this.rawLog = ">"; //raw log of string data
		this.dispatcher = new Dispatcher();
	}

	/*
	//pass in svelte store, of log
	setStore(storeLog){
		storeLog.set = this.rawLog;
	}
	

	addEventListener(event, callback) {
		if (this.dispatcher && event && callback)
			this.dispatcher.addEventListener(event, callback);
		else throw new Error("Error adding event listener to Logger");
	}
	*/
	

	push(data){
		this.log.push(data);
		this.rawLog = this.rawLog + "\n" + data.text;
		this.dispatcher.dispatch("onConsoleLogsUpdate", {test:10});
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
						log.push
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
