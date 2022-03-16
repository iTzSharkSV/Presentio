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
			args[i] == '--help' && (helpFlag = true);
			args[i] == '--version' && (versionFlag = true);

			args.splice(i, 1);
		}
	}

	return {
		helpFlag,
		versionFlag
	};
}

export default Parse;
