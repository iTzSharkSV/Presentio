import '../Lib/Modules/Clrs';
import helpTxt from '../Lib/Usage';
import Spc from '../Lib/Utils/Indent';

describe('Print help msg', () => {
	it('Print a help message with set options', () => {
		let expectedOutput = ``;

		expectedOutput += `\n  ${' USAGE '.paint('black', 'green')}\n\n`;
		expectedOutput +=
			Spc(4, '$ '.paint('dim')) +
			'cliName '.paint('green') +
			'<commands> '.paint('cyan') +
			'[options]\n'.paint('yellow');

		expectedOutput += `\n  ${' COMMANDS '.paint('black', 'cyan')}\n\n`;
		expectedOutput +=
			Spc(4, 'prettify'.paint('cyan') + ':  ') +
			'Rainbows everywhere!'.paint('dim') +
			'\n';

		expectedOutput += `\n  ${' FLAGS '.paint('black', 'yellow')}\n\n`;
		expectedOutput +=
			Spc(4, '-h, --help:'.paint('yellow')) +
			Spc(3, 'Print CLI help message\n'.paint('dim'));
		expectedOutput +=
			Spc(4, `-r, --rainbows:`.paint('yellow')) +
			Spc(3, 'I wonder?!'.paint('dim')) +
			'\n';

		expect(
			helpTxt({
				commands: {
					prettify: 'Rainbows everywhere!',
				},
				flags: {
					rainbows: {
						description: 'I wonder?!',
						alias: 'r',
						default: true,
					},
				},
			})
		).toBe(expectedOutput);
	});
});
