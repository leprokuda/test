module.exports = {
  root: true,
  env: {
    browser: true,
    'jest/globals': true,
    node: true,
    es6: true,
  },
  extends: ['airbnb', 'plugin:jest/recommended', 'jest-enzyme', '@nuxtjs/eslint-config-typescript', 'plugin:nuxt/recommended', 'prettier'],
  plugins: [
    'jest',
    'prettier',
    'import',
  ],
  // add your custom rules here
  rules: {},
};
