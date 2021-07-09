export function takeOverConsole(f) {
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
