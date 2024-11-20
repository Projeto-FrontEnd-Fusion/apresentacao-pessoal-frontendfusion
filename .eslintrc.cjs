module.exports = {
  root: true,
  env: {
    browser: true,
    es2020: true,
    node: true, // Adiciona suporte para o ambiente Node.js
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', '*.css'], // Ignora arquivos CSS para ESLint
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
  },
  overrides: [
    {
      files: ['*.css', '*.scss'],
      rules: {
        'at-rule-no-unknown': null, // Ignora regras desconhecidas no CSS
      },
    },
  ],
};


