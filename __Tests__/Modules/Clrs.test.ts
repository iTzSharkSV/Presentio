import '../../Lib/Modules/Clrs';

describe('Clrs', () => {
	it('Should print black text on green background', () => {
		expect('Hallo'.paint('bLaCk', 'gReEn')).toBe('\x1B[30;42mHallo\x1B[0m');
	});
});
