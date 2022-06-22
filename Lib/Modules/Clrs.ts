const clrList: { [key: string]: number } = {
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
	value: function (fg: string, bg?: string) {
		const fgColor = fg.toLowerCase();
		const bgColor = bg && bg.toLowerCase();

		if (fgColor in clrList) {
			if (bgColor) {
				if (bgColor in clrList) {
					return `\x1B[${clrList[fgColor]};${
						clrList[bgColor] + 10
					}m${this}\x1B[0m`;
				}

				throw new Error(`Unknown background color: ${bgColor}`);
			}

			return `\x1B[${clrList[fgColor]}m${this}\x1B[0m`;
		}

		throw new Error(`Unknown foreground color: ${fgColor}`);
	},
});

export {};
