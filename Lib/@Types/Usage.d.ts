/**
 * helpTxt param object
 * @example
 * ```ts
 * const cliCmds: {
 *  commands: {
 *    init: 'Initialize a new project',
 *    list: 'List all available templates',
 *  },
 *  flags: {
 *    help: {
 *      alais: '-h',  // optional
 *      description: 'Print CLI help message',
 *      default: false,
 *    },
 *    ....
 *  }
 * }
 * ```
 */
interface iCliCmds {
	commands?: {
		[key: string]: string;
	};
	flags?: {
		alias: string;
		description: string;
		default: boolean;
	};
}
