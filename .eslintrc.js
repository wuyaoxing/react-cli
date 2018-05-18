// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parserOptions: {
        parser: 'babel-eslint'
    },
    env: {
        browser: true
    },
    extends: 'standard',
    plugins: ['react'],
    // add your custom rules here
    rules: {
        eqeqeq: ['error', 'always'],
        indent: [2, 4, { SwitchCase: 1 }],
        quotes: ['error', 'single', { allowTemplateLiterals: true }],
        semi: ['error', 'never'],

        // Prevent definitions of unused prop types
        "react/no-unused-prop-types": 2,
        // Prevent definitions of unused state properties
        "react/no-unused-state": 2,
        // Prevent missing props validation in a React component definition
        "react/prop-types": 2,
        // Prevent variables used in JSX to be incorrectly marked as unused
        'react/jsx-uses-vars': 2,
        // Prevent React to be incorrectly marked as unused
        'react/jsx-uses-react': 2,
        // Prevent missing React when using JSX
        'react/react-in-jsx-scope': 2,
        "import/no-webpack-loader-syntax": 0,
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off'
    }
}
