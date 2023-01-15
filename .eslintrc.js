module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'react-app',
    'react-app/jest',
    'plugin:react/recommended', 'airbnb'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'formatjs'],
  rules: {
    'formatjs/no-offset': 'error',
    'no-console': 'warn',
    'formatjs/enforce-id': [
      'error',
      {
        idInterpolationPattern: '[sha512:contenthash:base64:6]',
        idWhitelist: '^general.*',
      },
    ],
    'formatjs/no-id': 'error',
  },
};
