import fmt from './Modules/Fmt.js';
import Info from './Info.js';
import iOptions from './Interfaces/Options.js';

/**
 * 📟 Prints out an info header for Node.js CLIs
 * @param {object} options
 * @param {string} hlpTxt
 * @example Advanced setup
 * ```js
 * Present({
 * 	title: 'projectName',
 * 	tagLine: 'by ✨@author✨',
 * 	description: 'A very useful description!',
 * 	version: '1.0',
 * 	fgColor: 'white',  // default: 'white'
 * 	bgColor: 'green',  // default: 'green'
 * 	clear: true,       // default: true
 * },
 * // hlpTxt goes here
 * // example: (Hyper: Project-Generator CLI)
 * `
 * Usage:
 * 	$ hyper <commands> [options]
 *
 * Commands:
 *  init   Initialize a new project
 *  list   List all available templates
 *
 * Options:
 *  -h, --help  Show CLI help
 *  -c, --clear  Clear Terminal
 *  -v, --version  Show CLI version
 * `);
 * ```
 */
function Present(options: iOptions, hlpTxt: string): void {
	// prettier-ignore
	const { 
		title, 
		tagLine, 
		description, 
		version, 
		fgColor, 
		bgColor, 
		clear 
	} = options;

	Info({
		title,
		tagLine,
		description,
		version,
		fgColor,
		bgColor,
		clear
	});

	process.stdout.write(hlpTxt);
}

/**
 * Default hlpTxt for Present()
 * @param {string} name
 * @param {object} cmds
 * @returns {string}
 * @example Advanced setup
 * ```js
 * hlpTxt({
 *   'Hyper',
 *   {
 * 	   init: 'Initialize a new project',
 * 	   list: 'List all available templates',
 *   },
 *   {
 * 	   '-h, --help': 'Show CLI help',
 * 	   '-c, --clear': 'Clear Terminal',
 * 	   '-v, --version': 'Show CLI version',
 *   }
 * })
 * ```
 */
function hlpTxt(name: string, cmds: object, options: object): string {
	let hlpTxt = ``;

	// Usage
	hlpTxt += `\n  ${fmt(' USAGE ', 42)}\n\n`;
	hlpTxt +=
		fmt(`    $ `, 2) +
		fmt(`${name} `, 32) +
		fmt(`<commands> `, 36) +
		fmt(`[options]\n`, 33);

	// Commands
	hlpTxt += `\n  ${fmt(' COMMANDS ', 46)}\n\n`;
	Object.entries(cmds).forEach((entry) => {
		const [key, value] = entry;
		hlpTxt += `    ${fmt(key, 36)}   ${fmt(value, 2)}\n`;
	});

	// Options
	hlpTxt += `\n  ${fmt(' OPTIONS ', 43)}\n\n`;
	Object.entries(options).forEach((entry) => {
		const [key, value] = entry;
		hlpTxt += `    ${fmt(key, 33)}   ${fmt(value, 2)}\n`;
	});

	return hlpTxt;
}

export { Present, hlpTxt };
export default Present;
