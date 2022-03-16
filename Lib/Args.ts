/**
 * 5-minutes-of-code with Shorky... `Arg parser`
 */
function Parse(): boolean {
	const args = process.argv.slice(2);

	switch (args.includes('--help')) {
		case true:
			return true;
		default:
			return false;
	}
}

export default Parse;
