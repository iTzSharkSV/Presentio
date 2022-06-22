import { stdout, platform } from 'process';

/**
 * 💾 Cross platform clear console
 * @example
 * ```ts
 * import clearConsole from '...'
 * ---------
 * wannaClear && clearConsole()
 * ```
 */
function clearConsole(): void {
	let arg: string;

	switch (platform) {
		case 'win32':
			arg = '\x1B[2J\x1B[0f';
			break;
		default:
			arg = '\x1B[2J\x1B[3J\x1B[H';
	}

	stdout.write(arg);
}

export { clearConsole as default };
