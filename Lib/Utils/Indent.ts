/**
 * Indent space
 * @param {number} times
 * @param {string} attach
 * @returns {string} Indentation
 * @example
 * ```ts
 * import Spc from '...'
 * ---------
 * let someTxt = '';
 * someTxt += Spc(4) + someVariable...
 * ```
 */
function Spc(times: number, attach?: string): string {
	const attachment: string = attach || '';
	let space = '';

	for (let i = 0; i < times; i++) {
		space += ' ';
	}

	return space + attachment;
}

export { Spc as default };
