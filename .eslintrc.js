module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    es6: true,
    node: true,
  },
  plugins:['@typescript-eslint','prettier'],
  extends: [
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint'
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  rules: {
    "import/no-unresolved": "off",
    "prettier/prettier":"error",
    "class-methods-use-this":"off",
    "no-param-reassign":"off",
    "comma-dangle":"off",
    "camelcase":"off",
    "@typescript-eslint/ban-ts-ignore":"off",
    "@typescript-eslint/camelcase":'off',
    "no-unused-vars":["error",{"argsIgnorePattern":"next"}]
  },
};
