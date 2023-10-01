module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/e2e'],
  testMatch: ['**/*.e2e.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  },
  testTimeout: 2 * 60 * 1000 // 2 mins
};
