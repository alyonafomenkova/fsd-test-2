module.exports = {
  extends: [
    'airbnb-base',
    'eslint:recommended',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    createDefaultProgram: true,
  },
  rules: {
    'no-underscore-dangle': 0,
    'no-param-reassign': ['error', { 'props': false }],
    'no-unused-expressions': ['error', { 'allowTernary': true }],
    'import/extensions': 'off',
    'max-len': ['error', { code: 140 }],
    'no-trailing-spaces': ['error', { skipBlankLines: true }],
    'import/no-extraneous-dependencies': ['error', {devDependencies: true}]
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js'],
      },
    },
  },
  env: {
    browser: true,
    jquery: true
  },
};
