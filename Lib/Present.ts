import fmt from './Modules/Fmt.js';
import Info from './Info.js';
import Parse from './Args.js';
import Spc from './Utils/Space.js';
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

	const { helpFlag } = Parse();
	helpFlag && console.log(hlpTxt);
}

/**
 * Default hlpTxt for Present()
 * @param {string} name
 * @param {object} cmds
 * @param {object} options
 * @returns {string}
 * @example
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
	let hlpTxt: string = ``;

	// Usage
	hlpTxt += `\n  ${fmt(' USAGE ', 42)}\n\n`;
	hlpTxt +=
		Spc(4) +
		fmt(`$ `, 2) +
		fmt(`${name} `, 32) +
		fmt(`<commands> `, 36) +
		fmt(`[options]\n`, 33);

	// Commands
	hlpTxt += `\n  ${fmt(' COMMANDS ', 46)}\n\n`;
	for (const [key, value] of Object.entries(cmds)) {
		// prettier-ignore
		hlpTxt += 
			Spc(4) + 
			fmt(key, 36) + 
			Spc(3) + 
			fmt(value, 2) + 
			`\n`;
	}

	// Options
	hlpTxt += `\n  ${fmt(' OPTIONS ', 43)}\n\n`;
	for (const [key, value] of Object.entries(options)) {
		// prettier-ignore
		hlpTxt += 
			Spc(4) + 
			fmt(key, 33) + 
			Spc(3) + 
			fmt(value, 2) + 
			`\n`;
	}

	return hlpTxt;
}

export { Present, hlpTxt };
export default Present;
