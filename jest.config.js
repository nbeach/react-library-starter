const {defaults} = require('jest-config');
module.exports = {
    moduleFileExtensions: [...defaults.moduleFileExtensions, 'ts', 'tsx'],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    setupFilesAfterEnv: ["<rootDir>src/setupTests.ts"]
}
