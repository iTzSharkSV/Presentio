/**
 * 5-minutes-craft Terminal-Styling
 * @param {string} args
 * @param {number} clrCodes
 * @returns {string}
 * @example
 * ```js
 * import fmt from '...'
 * ...
 * fmt('Hallo', 32);
 * ```
 */
function fmt(args: string, clrCodes: number): string {
	const fmtTxt = `\x1B[${clrCodes}m${args}\x1B[0m`;

	return fmtTxt;
}

export default fmt;
