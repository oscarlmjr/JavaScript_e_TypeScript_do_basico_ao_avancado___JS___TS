const path = require('path'); // CommonJS

module.exports = {
    mode: 'production',
    entry: './frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js',
        clean: true //
    },
    module: {
        rules: [
            {
            exclude: /node_modules/,
            test: /\.js$/,
            type: 'javascript/auto', //
            use: {
                loader: 'babel-loader',
                options: {
                    sourceType: 'unambiguous', //
                    presets: ['@babel/env']
                    }
                },
            },
            { 
            test: /\.css$/, 
            use: ['style-loader', 'css-loader']
            } 
        ]
    },
    devtool: 'source-map',
};
