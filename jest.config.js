const path = require('path');

module.exports = {
  rootDir: path.join(__dirname),
  testURL: 'http://localhost:8000',
  // testEnvironment: './tests/PuppeteerEnvironment',
  verbose: true,
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'json'],
  setupFiles: ['./tests/setup.js'],
  testEnvironment: 'jsdom',
  collectCoverage: true,
  collectCoverageFrom: ['src/**/*.{ts,tsx}'],
  moduleNameMapper: {
    '\\.(css|less)$': 'identity-obj-proxy', //Jest less encountered an unexpected token
    '^@/(.*)$': '<rootDir>/$1',
  },
};
