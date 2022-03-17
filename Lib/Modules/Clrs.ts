/**
 * js-like-im-5 text-coordination
 * @param {string} color
 * @returns {number}
 * @example
 * ```js
 * import clrCode from '...'
 * ...
 * clrCode('gReeN');
 * ```
 */
function clrCode(color: string): number {
	switch (color.toLowerCase()) {
		case 'black':
			return 30;
		case 'red':
			return 31;
		case 'yellow':
			return 33;
		case 'blue':
			return 34;
		case 'magenta':
			return 35;
		case 'cyan':
			return 36;
		case 'white':
			return 37;
		default:
			return 32;
	}
}

export default clrCode;
