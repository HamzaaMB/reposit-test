module.exports = {
  preset: 'ts-jest',
  testEnvironment: 'node',
  collectCoverage: true, // Enable coverage collection
  collectCoverageFrom: [
    "src/**/*.{ts,tsx}",  // Specify the files to collect coverage from
    "!src/index.ts",      // Exclude specific files if necessary
    "!src/**/*.d.ts"      // Exclude type definition files
  ],
  coverageDirectory: "coverage", // Output directory for coverage reports
  coverageReporters: ["text", "lcov"], // Report formats
  moduleFileExtensions: ['ts', 'js'],
  testMatch: ['**/*.test.ts']
};
