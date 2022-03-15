/**
 * @property {string} title
 * @property {string} tagLine
 * @property {string} description
 * @property {string} version
 * @property {string} fgColor
 * @property {string} bgColor
 * @property {boolean} clear
 */
interface iOptions {
	title: string;
	tagLine: string;
	description: string;
	version: string;
	fgColor?: string;
	bgColor?: string;
	clear?: boolean;
}

export default iOptions;
