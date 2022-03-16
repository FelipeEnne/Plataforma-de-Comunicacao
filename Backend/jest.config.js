// Sync object
/** @type {import('@jest/types').Config.InitialOptions} */
const config = {
  verbose: true,
  bail: true,
  clearMocks: true,
  collectCoverage: true,
  coverageDirectory: "__test__/coverage",
  collectCoverageFrom: ["api/**"],
  testEnvironment: "node",
};

module.exports = config;
