module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
    es2021: true
  },
  parser: 'vue-eslint-parser',
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier'
  ],
  parserOptions: {
    ecmaVersion: 12,
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      modules: true
    },
    vueFeatures: {
      filter: true,
      interpolationAsNonHTML: false,
      styleCSSVariableInjection: true
    }
  },
  // eslint-plugin-vue @typescript-eslint/eslint-plugin eslint-plugin-prettier的缩写
  plugins: ['vue', '@typescript-eslint', 'prettier'],
  rules: {
    'no-var': 'error',
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false,
        parser: 'flow',
        trailingComma: 'none',
        arrowParens: 'avoid',
        overrides: {
          files: ['*.vue'],
          options: {
            parser: 'vue'
          }
        }
      }
    ],
    '@typescript-eslint/no-unused-vars': 'error',
    '@typescript-eslint/no-explicit-any': 'off'
  }
}
