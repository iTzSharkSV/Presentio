import Present from '../Lib/Present';

describe('Present', () => {
	it('Prints out an info header for Node.js CLIs', () => {
		expect(
			Present(
				{
					title: 'Hyper',
					tagLine: 'by Shorky',
					description: 'A CLI to bootstrap new projects!',
					version: '3-Mil',
				},
				'Placeholder'
			)
		).toBe(
			console.log(
				`\n%s v%s %s\n%s`,
				' Hyper '.paint('black', 'Green'),
				'3-Mil',
				'by Shorky',
				'A CLI to bootstrap new projects!'
			)
		);
	});
});
