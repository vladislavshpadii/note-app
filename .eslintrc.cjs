module.exports = {
  root: true,
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@babel/eslint-parser',
    babelOptions: {
      parserOpts: {
        plugins: ["jsx", "typescript"]
      }
    }
  },
  plugins: [
    'vue',
    '@typescript-eslint',
  ],
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/typescript/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    "no-console": ["error", { allow: ["warn", "error"] }],
    '@typescript-eslint/no-explicit-any': 'off',
  }
};