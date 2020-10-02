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
    'import/extensions': 'off',
    'max-len': ['error', { code: 120 }],
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
