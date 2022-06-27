// Rollup base config file
import pkg from './package.json';
import esb from 'rollup-plugin-esbuild';
import dts from 'rollup-plugin-dts';

/**
 * Base config for rollup
 * @param {object} config
 * @returns {object}
 */
function Bundle(config) {
	return {
		input: './Lib/Present.ts',
		output: {
			format: 'es',
			sourcemap: true,
		},
		...config,
	};
}

export default [
	Bundle({
		plugins: [esb()],
		target: 'esnext',
		output: {
			file: pkg.module,
		},
		minify: pkg.minify,
	}),
	Bundle({
		plugins: [dts()],
		output: {
			file: pkg.typings,
		},
	}),
];
