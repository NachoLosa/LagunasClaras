module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:astro/recommended', 'plugin:prettier/recommended'],
  plugins: ['astro', 'prettier'],
  overrides: [
    {
      files: ['*.astro', '*.ts', '*.tsx', '*.js', '*.jsx'],
      parser: 'astro-eslint-parser',
      parserOptions: {
        parser: '@typescript-eslint/parser',
        extraFileExtensions: ['.astro', '.js', '.jsx', '.ts', '.tsx'],
      },
      rules: {
        'prettier/prettier': 'warn',
      },
    },
  ],
};
