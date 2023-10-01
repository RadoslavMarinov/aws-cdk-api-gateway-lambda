module.exports = {
  testEnvironment: 'node',
  roots: ['<rootDir>/infra/tests'],
  testMatch: ['**/*.test.ts'],
  transform: {
    '^.+\\.tsx?$': 'ts-jest'
  }
};
