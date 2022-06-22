import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRegex: '/__Tests__/.+test.tsx?$',
	verbose: true,
	automock: false,
};

export default config;
