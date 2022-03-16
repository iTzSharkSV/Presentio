import { argv } from 'process';

/**
 * Bom-Bow Argument Parser
 * @description Blt-in parser for `hlp & ver` options
 */
function Parse(): { helpFlag: boolean; versionFlag: boolean } {
	const args: string[] = argv.slice(2);

	let helpFlag = false;
	let versionFlag = false;

	for (let i = 0; i < args.length; i++) {
		if (args.indexOf(args[i]) > -1) {
			switch (args[i]) {
				case '-h':
				case '--help':
					helpFlag = true;
					break;
				case '-v':
				case '--version':
					versionFlag = true;
					break;
				default:
					break;
			}

			args.splice(i, 1);
		}
	}

	return {
		helpFlag,
		versionFlag
	};
}

export default Parse;
