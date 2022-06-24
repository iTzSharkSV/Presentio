import type { Config } from '@jest/types';

const config: Config.InitialOptions = {
	preset: 'ts-jest',
	testEnvironment: 'node',
	testRegex: '/__Tests__/.+test.tsx?$',
	collectCoverage: true,
	collectCoverageFrom: ['./Lib/**', '!./Lib/@Types/**'],
	coverageDirectory: 'Coverage',
	coverageThreshold: {
		global: {
			lines: 60,
		},
	},
};

export default config;
