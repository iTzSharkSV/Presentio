import './Modules/Clrs';
import clearConsole from './Modules/Clear';
import handleErrors from './Utils/ErrorHandler';
import Argo from './Args';
import helpTxt from './Usage';

/**
 * 📟 Prints out an info header for Node.js CLIs
 * @param {object} options
 * @example Advanced setup
 * ```ts
 * Present({
 * 	title: 'projectName',
 * 	tagLine: 'by ✨@author✨',
 * 	description: 'A very useful description!',
 * 	version: '1.0',
 * 	fg: 'black',	// default: "black"
 * 	bg: 'green',	// default: "green"
 * 	clear: true,	// default: true
 * }, $helpTxt);
 * ```
 */
function Present(options: iOptions, helpTxt: string): void {
	const defaultOptions = {
		title: 'Title',
		tagLine: 'by @author',
		description: 'An awesome description!',
		version: '3-Mil',
		fg: 'black',
		bg: 'green',
		clear: true,
	};

	const cli = {
		...defaultOptions,
		...options,
	};

	// Clear the terminal before printing
	cli.clear && clearConsole();

	console.log(
		`\n%s v%s %s\n%s`,
		` ${cli.title} `.paint(cli.fg, cli.bg),
		cli.version,
		cli.tagLine.paint('dim'),
		cli.description.paint('dim')
	);

	Argo().help && console.log(helpTxt);
}

process.on('uncaughtException', (err) => {
	handleErrors(err);
	process.exit(1);
});

export { Present as default, helpTxt };
