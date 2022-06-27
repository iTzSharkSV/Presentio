/**
 * Args interface for Present fn
 * @example Advanced setup
 * ```ts
 * Present({
 * 	title: 'projectName',
 * 	tagLine: 'by ✨@author✨',
 * 	description: 'A very useful description!',
 * 	version: '1.0',
 * 	fg: 'black',    // default: "black"
 * 	bg: 'green',    // default: "green"
 * 	clear: true,    // default: true
 * });
 * ```
 */
interface iOptions {
	title: string;
	tagLine: string;
	description: string;
	version: string;
	fg?: string;
	bg?: string;
	clear?: boolean;
}
