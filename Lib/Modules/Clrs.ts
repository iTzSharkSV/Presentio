import Spc from '../Utils/Indent';

const Styles: iStyle = {
	dim: 2,
	black: 30,
	red: 31,
	green: 32,
	yellow: 33,
	blue: 34,
	magenta: 35,
	cyan: 36,
	white: 37,
};

declare global {
	interface String {
		/**
		 * Extends native String object
		 * @example
		 * ```ts
		 * import '...'
		 * ---------
		 * 'Hello'.paint('black', 'red');
		 *                          ^ bgColor // optional
		 * ```
		 */
		paint(color: string, subColor?: string): string;
	}
}

Object.defineProperty(String.prototype, 'paint', {
	value: function (fg: string, bg?: string): string {
		const fgColor = fg.toLowerCase();
		const stringObject = {
			fg: Styles[fgColor],
			bg: '',
			msg: 'm' + this,
		};

		if (fgColor in Styles) {
			if (bg !== undefined && bg.toLowerCase() in Styles) {
				stringObject.bg = `;${Styles[bg.toLowerCase()] + 10}`;
			}

			return (
				`\x1B[` +
				stringObject.fg +
				stringObject.bg +
				stringObject.msg +
				`\x1B[0m`
			);
		}

		// prettier-ignore
		throw new Error(
			`1 |\n 2 | "${this}".paint("${fg}");\n 3 | ${Spc(this.length + 9)} ^ color provided is not valid...\n 4 |\n 5 | Reason: color "${fg}" not in color list;\n 6 | Todo: Visit our wiki to get info about our supported color list!\n 7 |\n`.paint('red')
		);
	},
});

export {};
