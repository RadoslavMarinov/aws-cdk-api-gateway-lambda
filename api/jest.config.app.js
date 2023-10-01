module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/lib'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testTimeout: 60 * 1000 // 60 sec
};
