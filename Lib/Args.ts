import { argv } from 'process';

/**
 * Bom-Bow Argument Parser
 * @description A built-in argument parser!
 *
 * @example
 * ```ts
 * import Argo from '...'
 * ---------
 * const flags = Argo();
 *
 * if (flags.rainbow) {
 *   return `girl-in-red?!`
 * }
 * ```
 *
 * @returns {object} passed-in-flags
 */
function Argo(): iArgs {
	const args: string[] = argv.slice(2);
	const flags = {
		help: false,
		version: false,
	};

	for (const i in args) {
		const obj = args[i];

		if (args.indexOf(obj) > -1) {
			switch (obj) {
				case '-h':
				case '--help':
					flags.help = true;
					break;
				case '-v':
				case '--version':
					flags.version = true;
					break;
				default:
					break;
			}
		}
	}

	return flags;
}

export { Argo as default };
