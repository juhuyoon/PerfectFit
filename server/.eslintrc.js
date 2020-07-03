module.exports = {
  env: {
    commonjs: true,
    es2020: true,
    node: true,
  },
  extends: ['airbnb-base', 'prettier', 'plugin:node/recommended'],
  plugins: ['prettier'],
  parserOptions: {
    ecmaVersion: 11,
  },
  rules: {
    'prettier/prettier': 'error',
    'no-unused-vars': 'warn',
    'func-names': 'off',
    'camelcase': 'off'
  },
};
