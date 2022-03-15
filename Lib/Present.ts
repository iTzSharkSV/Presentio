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

export { Present };
export default Present;
