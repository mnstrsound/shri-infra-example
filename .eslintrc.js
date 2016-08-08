module.exports = {
    parserOptions: {
        ecmaVersion: 5,
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true
    },
    rules: {
        quotes: ['error', 'single'],
        'no-console': 'warn',
        'linebreak-style': ['error', 'unix']
    }

};