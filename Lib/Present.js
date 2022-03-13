import fmt from './Modules/Fmt.js';
import clrCode from './Modules/Clrs.js';
import clearConsole from './Modules/Clear.js';

/**
 * 📟 Prints out an info header for Node.js CLIs
 * @param {object} uOptions
 * @example Advanced setup
 * ```js
 * Present({
 * 	title: '@projectName',
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
 * Present({
 * 	title: '@projectName',
 * 	tagLine: 'by ✨@author✨',
 * 	description: 'A very useful description!',
 * 	version: '1.0'
 * })
 * ```
 */
function Present(uOptions) {
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

	console.log(
		`\n${fmt(
			`${fmt(` ${title} `, clrCode(fgColor))}`,
			clrCode(bgColor) + 10
		)} v${version} ${fmt(`${tagLine} \n${description}`, 2)}\n`
	);
}

export default Present;
