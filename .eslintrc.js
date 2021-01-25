module.exports = {
    env: {
        "browser": true,
        "es2021": true
    },
    extends: "eslint:recommended",
    parserOptions: {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import', 'html'],
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/errors',
        'plugin:import/warnings',
    ],
    rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
        '@typescript-eslint/explicit-module-boundary-types': 'off',
        '@typescript-eslint/no-non-null-assertion': 'off',
        'import/named': 'off',
        'import/no-unresolved': 'off',
        'import/no-duplicates': 'off',
        'import/extensions': 'off',
    },
};
