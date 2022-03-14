import fmt from './Modules/Fmt.js';
import clrCode from './Modules/Clrs.js';
import clearConsole from './Modules/Clear.js';
import iOptions from './Interfaces/Options.js';

/**
 * 📟 Prints out an info header for Node.js CLIs
 * @param {object} uOptions
 * @example Advanced setup
 * ```js
 * Info({
 * 	title: 'projectName',
 * 	tagLine: 'by ✨@author✨',
 * 	description: 'A very useful description!',
 * 	version: '1.0',
 * 	fgColor: 'white',
 * 	bgColor: 'green',
 * 	clear: true,
 * })
 * ```
 *
 * @example Basic setup
 * ```js
 * Info({
 * 	title: 'projectName',
 * 	tagLine: 'by ✨@author✨',
 * 	description: 'A very useful description!',
 * 	version: '1.0'
 * })
 * ```
 */
function Info(uOptions: iOptions): void {
	const defaultOptions = {
		title: 'Title',
		tagLine: 'by @author',
		description: 'An awesome description!',
		version: '3-Mil',
		fgColor: 'white',
		bgColor: 'green',
		clear: true
	};

	const options = { ...defaultOptions, ...uOptions };
	// prettier-ignore
	const {
		title,
		tagLine,
		description,
		version,
		fgColor,
		bgColor,
		clear
	} = options

	// Clear the terminal before printing
	clear && clearConsole();

	process.stdout.write(
		`\n${fmt(
			`${fmt(` ${title} `, clrCode(fgColor))}`,
			clrCode(bgColor) + 10
		)} v${version} ${fmt(`${tagLine} \n${description}`, 2)}\n`
	);
}

export default Info;
