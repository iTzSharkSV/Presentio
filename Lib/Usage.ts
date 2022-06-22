import './Modules/Clrs';
import Spc from './Utils/Indent';

/**
 * Display all available cli commands!
 * @param {object} availableCmds
 * @example
 * ```ts
 * const cliCmds: {
 *  commands: {
 *    init: 'Initialize a new project',
 *    list: 'List all available templates',
 *  },
 *  flags: {
 *    help: {
 *      alais: '-h',
 *      description: 'Print CLI help message',
 *      default: false,
 *    },
 *    version: {
 *      alias: '-v',
 *      description: 'Print CLI version',
 *      default: false,
 *   },
 *  }
 * }
 *
 * helpTxt(cliCmds);
 * ```
 *
 * `Above code will return:`
 * ```Txt
 * Usage:
 *  $ hyper <commands> [options]
 *
 * Commands:
 *  init:   Initialize a new project
 *  list:   List all available templates
 *
 * Options:
 *  -h, --help:  Print CLI help message
 *  -v, --version:  Print CLI version
 * ```
 */
function helpTxt(availableCmds: iCliCmds): string {
	const objectNotEmpty = Object.keys(availableCmds).length !== 0;
	let hlpTxt = ``;

	if (objectNotEmpty) {
		hlpTxt += `\n  ${' USAGE '.paint('black', 'green')}\n\n`;
		hlpTxt +=
			Spc(4, '$ '.paint('dim')) +
			'cliName '.paint('green') +
			'<commands> '.paint('cyan') +
			'[options]\n'.paint('yellow');

		if (availableCmds.commands) {
			hlpTxt += `\n  ${' COMMANDS '.paint('black', 'cyan')}\n\n`;

			for (const [cmd, desc] of Object.entries(availableCmds.commands)) {
				hlpTxt +=
					Spc(4, cmd.paint('cyan') + ':  ') +
					desc.paint('dim') +
					'\n';
			}
		}

		// TODO:
		// Add flags sections
		// got bored (I'll do it later, promise :>)
	}

	return hlpTxt;
}

export { helpTxt as default };
