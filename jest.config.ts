export default {
    preset: 'ts-jest',
    testEnvironment: 'node',
    transform: {
        '^.+\\.ts?$': 'ts-jest'
    },
    transformIgnorePatterns: ['<rootDir>/node_modules/'],
    setupFiles: ['<rootDir>/src/routers/controllers/__mocks__/testSetup.ts']
};
