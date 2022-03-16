/**
 * A `Spacer` :>
 * @param {number} times
 * @returns {string}
 * @example
 * ```js
 * import Spc from '...'
 * ...
 * Spc(3);
 * ```
 */
function Spc(times: number): string {
	let str: string = ``;

	for (let i = 0; i < times; i++) {
		str += ' ';
	}

	return str;
}

export default Spc;
