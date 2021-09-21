module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019
  },
  env: {
    node: true,
    browser: true,
    es6: true
  },
  plugins: [
    '@typescript-eslint'
  ],
  ignorePatterns: [
    'public/'
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  rules: {
    'no-unused-vars': 'off', // turn off the eslint core 
    '@typescript-eslint/no-unused-vars': 'error', // turn on the typescript-eslint rule
    semi: [ 'error', 'never' ], // remove ;
    quotes: [ 'error', 'single' ], // " -> '
    indent: [ 'error', 2, // 2 spaces indent
      { 'SwitchCase': 1 } ], // https://eslint.org/docs/rules/indent
    'object-curly-spacing': [ 'error', 'always' ], // spaces before and after {}
    'array-bracket-spacing': [ 'error', 'always' ], // spaces before and after []
    'no-trailing-spaces': [ 'error', { 'ignoreComments': true } ] // no trailing spaces except for comments
  }
}