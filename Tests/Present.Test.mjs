import Present from '../Build/Present.js';

const hlpTxt = `
Usage:
	$ hyper <commands> [options]

Commands:
	init   Initialize a new project
	list   List all available templates

Options:
	-h, --help  Show CLI help
	-c, --clear  Clear Terminal
	-v, --version  Show CLI version
`;

Present(
	{
		title: 'Hyper',
		tagLine: 'by @Shorky',
		description: 'A CLI to bootstrap new projects!',
		version: '1.0',
		fgColor: 'white',
		bgColor: 'green',
		clear: true
	},
	hlpTxt
);
