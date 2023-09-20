module.exports = {
    preset: 'jest-expo',
    transform: {
      '^.+\\.jsx?$': '<rootDir>/node_modules/babel-jest',
      '^.+\\.tsx?$': 'ts-jest',
    },
    setupFilesAfterEnv: ['@testing-library/jest-native/extend-expect'],
    transformIgnorePatterns: [
      'node_modules/(?!(jest-)?react-native|@react-native|@react-native-community|expo(nent)?|@expo(nent)?/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base)',
    ],
    collectCoverage: true,
    collectCoverageFrom: [
      'src/**/*.{ts,tsx}',
    ],
  };
  