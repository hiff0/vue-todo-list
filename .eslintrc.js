module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    'eslint:recommended',
    '@vue/typescript/recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020
  },
  overrides: [
    {
      files: ['src/views/**/*.vue'],
    },
  ],
  rules: {
    "vue/multi-word-component-names": [
      "error",
      {
        ignores: ["Assignment", "Home", "Task"], //Component names to be ignored
      },
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
}
