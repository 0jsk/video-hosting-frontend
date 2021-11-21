module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'plugin:nuxt/recommended'
  ],
  plugins: [
  ],
  rules: {
    semi: ['error', 'always', { omitLastInOneLineBlock: true }],
    '@typescript-eslint/no-unused-vars': [
      'error',
      { ignoreRestSiblings: false }
    ],
    '@typescript-eslint/consistent-type-imports': [
      'error',
      { prefer: 'type-imports' }
    ]
  }
};
