const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

/** @type {import('jest').Config} */
const customJestConfig = {
  moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],

  moduleDirectories: ['node_modules', '<rootDir>/'],

  testEnvironment: 'jest-environment-jsdom',
  testMatch: ['**/*.(test|spec).(js|jsx|ts|tsx)'],
  coveragePathIgnorePatterns: ['/node_modules/'],
  /**
   * Absolute imports and module path aliases.
   */
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1',
  },
  setupFilesAfterEnv: ['@testing-library/jest-dom', '<rootDir>/jest.setup.tsx'],
};

module.exports = createJestConfig(customJestConfig);
