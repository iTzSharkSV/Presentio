/**
 * 💾 Cross platform clear console
 * @example
 * ```js
 * import clearConsole from '...'
 * ...
 * clear
 *   ? clearConsole()
 *   : doSomethingElse();
 * ```
 */
function clearConsole(): void {
	/**
	 * @type {string} arg
	 */
	let arg: string;

	switch (process.platform) {
		case 'win32':
			arg = '\x1B[2J\x1B[0f';
			break;
		default:
			arg = '\x1B[2J\x1B[3J\x1B[H';
	}

	process.stdout.write(arg);
}

export default clearConsole;
