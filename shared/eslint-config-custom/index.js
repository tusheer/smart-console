module.exports = {
    plugins: ['@typescript-eslint'],
    extends: ['next', 'turbo', 'prettier', 'next/core-web-vitals', 'plugin:@typescript-eslint/recommended'],
    rules: {
        '@next/next/no-html-link-for-pages': 'off',
        'react/jsx-key': 'off',
        '@typescript-eslint/no-unused-vars': 'error',
        'react-hooks/exhaustive-deps': 'off',
        'no-console': 'warn',
        'react/react-in-jsx-scope': 'off',
        '@next/next/no-img-element': 'off',
    },
};
