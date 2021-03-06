module.exports = {
  "preset": "ts-jest",
  "testEnvironment": "node",
  "coverageDirectory": "coverage",
  "globals": {
    "ts-jest": {
      "tsconfig": "tsconfig.json"
    }
  },
  "modulePathIgnorePatterns": [
    "dist",
    "node_modules",
    "coverage",
    "fixing-modules"
  ],
  "testMatch": [
    "**/?(*.)+(spec|test).(js|ts|tsx)"
  ],
  "bail": 1,
  "clearMocks": true,
  "coverageReporters": [
    "lcov",
    "html",
    "text"
  ],
  "coveragePathIgnorePatterns": [
    "/node_modules/"
  ],
}
