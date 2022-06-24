import Argo from '../Lib/Args';

describe('Argo', () => {
	it('Should parse cli arguments', () => {
		const whatItShouldBe = {
			help: false,
			version: false,
		};

		expect(JSON.stringify(Argo())).toBe(JSON.stringify(whatItShouldBe));
	});
});
