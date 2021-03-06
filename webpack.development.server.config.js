const path = require('path');

module.exports = {
    entry: './src/server/index.js',
    mode: 'development',
    output: { 
        path: path.resolve(__dirname, 'dist/server')
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/, 
                loader: 'ts-loader'
            },
            {
                test: /\.m?js$/,
                loader: 'babel-loader'
            }
        ]
    },
    node: {
        __dirname: false
    },
    target: 'node'
}