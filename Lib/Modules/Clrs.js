/**
 * js-like-im-5 text-coordination
 * @param {string} color
 * @returns {number} code
 * @example
 * ```js
 * import clrCode from '...'
 * ...
 * clrCode('gReeN')
 * ```
 */
function clrCode(color) {
	/**
	 * @type {number} code
	 */
	let code;

	switch (color.toLowerCase()) {
		case 'black':
			code = 30;
			break;
		case 'red':
			code = 31;
			break;
		case 'yellow':
			code = 33;
			break;
		case 'blue':
			code = 34;
			break;
		case 'magenta':
			code = 35;
			break;
		case 'cyan':
			code = 36;
			break;
		case 'white':
			code = 37;
			break;
		default:
			code = 32;
	}

	return code;
}

export default clrCode;
