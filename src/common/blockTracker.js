/**
 * Find code between dividers,
 * const divider = "__________";
 */
export function getBlock(editor) {
	if (editor) {
		let cursorInfo = editor.getCursor();
		//find post divider
		let line = cursorInfo.line;
		let linePost = editor.lastLine();

		while (line < linePost) {
			if (/___+/.test(editor.getLine(line))) {
				// Test RegEx at least 3 underscores
				linePost = line - 1;
				break;
			}
			line++;
		}

		line = cursorInfo.line;
		let linePre = -1;
		while (line >= 0) {
			// console.log(editor2.getLine(line));
			if (/___+/.test(editor.getLine(line))) {
				linePre = line;
				break;
			}
			line--;
		}
		if (linePre > -1) {
			linePre++;
		}
		let code = editor.getRange(
			{
				line: linePre,
				ch: 0,
			},
			{
				line: linePost + 1,
				ch: 0,
			}
		);

		return code;
	}
}
