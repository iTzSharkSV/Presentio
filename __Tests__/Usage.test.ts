import '../Lib/Modules/Clrs';
import helpTxt from '../Lib/Usage';
import Spc from '../Lib/Utils/Indent';

describe('Clrs', () => {
	it('Should print black text on green background', () => {
		let expectedOutput = ``;

		expectedOutput += `\n  ${' USAGE '.paint('black', 'green')}\n\n`;
		expectedOutput +=
			Spc(4, '$ '.paint('dim')) +
			'cliName '.paint('green') +
			'<commands> '.paint('cyan') +
			'[options]\n'.paint('yellow');

		expectedOutput += `\n  ${' COMMANDS '.paint('black', 'cyan')}\n\n`;
		expectedOutput +=
			Spc(4, 'rainbows'.paint('cyan') + ':  ') +
			'I wonder?!'.paint('dim') +
			'\n';

		expect(
			helpTxt({
				commands: {
					rainbows: 'I wonder?!',
				},
			})
		).toBe(expectedOutput);
	});
});
