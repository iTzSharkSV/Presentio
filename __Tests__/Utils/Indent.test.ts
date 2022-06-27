import Spc from '../../Lib/Utils/Indent';

describe('Indent', () => {
	it('Should leave space equivalent to the number then attach the string given', () => {
		expect(Spc(2, '\n')).toBe('  \n');
	});
});
