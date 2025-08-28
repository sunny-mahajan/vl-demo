module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['react', 'react-hooks', '@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
    'prettier',
  ],
  settings: { react: { version: 'detect' } },
  rules: {
    // Disable problematic rules that might cause issues
    '@typescript-eslint/no-unused-expressions': 'off',
  },
};
