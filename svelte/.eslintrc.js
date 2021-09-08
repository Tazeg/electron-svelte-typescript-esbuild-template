module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2019,
    sourceType: 'module'
  },
  env: {
    browser: true,
    es6: true
  },
  plugins: [
    'svelte3',
    '@typescript-eslint'
  ],
  overrides: [
    {
      files: ['**/*.svelte'],
      processor: 'svelte3/svelte3'
    }
  ],
  extends: [
    'standard',
    'plugin:@typescript-eslint/recommended'
  ],
  settings: {
    'svelte3/typescript': () => require('typescript')
  },
  rules: {
    'no-multiple-empty-lines': 0,
    '@typescript-eslint/no-var-requires': 0
  }
}
