import '../Lib/Modules/Clrs';
import handleErrors from '../Lib/Utils/ErrorHandler';

describe('ErrorHandler', () => {
	it('Should format error message', () => {
		const someRandomError = new Error('Some random reason');
		expect(handleErrors(someRandomError)).toBe(
			console.log(
				'\n %s\n\n %s',
				' ERROR '.paint('black', 'red'),
				someRandomError.message
			)
		);
	});
});
