import Argo from '../Lib/Args';

describe('Argo', () => {
	it('Should parse cli arguments', () => {
		const whatItShouldBe = {
			help: true,
			version: false,
		};

		expect(JSON.stringify(Argo({ forceDisplayHelp: true }))).toBe(
			JSON.stringify(whatItShouldBe)
		);
	});
});
