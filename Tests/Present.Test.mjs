import { Present, hlpTxt } from '../Build/Present.js';

Present(
	{
		title: 'Hyper',
		tagLine: 'by @Shorky',
		description: 'A CLI to bootstrap new projects!',
		version: '1.0',
		fgColor: 'white',
		bgColor: 'magenta',
		clear: true
	},
	hlpTxt(
		'hyper',
		{
			init: 'Initilize a new project',
			list: 'List all available templates'
		},
		{
			'-h, --help': '   Show this help message',
			'-c, --clear': '  Clear Terminal',
			'-v, --version': 'Show CLI version'
		}
	)
);
