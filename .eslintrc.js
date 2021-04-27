module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'eslint:recommended',
    '@nuxtjs',
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:nuxt/recommended',
    'plugin:vue/essential'
  ],
  plugins: ['prettier'],
  rules: {
    'comma-dangle': ['error', 'never'],
    eqeqeq: 'off',
    'max-len': ['warn', { code: 80 }],
    'no-console': 'off',
    'prettier/prettier': 'warn',
    quotes: [2, 'single', { avoidEscape: true }],
    'vue/html-indent': ['warn', 2, { baseIndent: 1 }],
    'vue/no-use-v-if-with-v-for': 'off',
    'vue/script-indent': ['warn', 2, { baseIndent: 0 }],
    'vue/max-attributes-per-line': 'off',
    'vue/no-template-shadow': 'off',
    'vue/no-unused-vars': 'off',
    'vue/require-default-prop': 'off'
  }
};
