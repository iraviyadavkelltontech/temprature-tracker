import type {Config} from '@jest/types';
// Sync object
const config: Config.InitialOptions = {
  verbose: true,
  testEnvironment: "jsdom",
  transform: {
  '^.+\\.tsx?$': 'ts-jest',
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json', 'node'],
  resolver: '<rootDir>/resolver.js',
  globals: {
    'ts-jest': {
      tsconfig: {
        rootDir: './src'
      }
    }
  }
};
export default config;