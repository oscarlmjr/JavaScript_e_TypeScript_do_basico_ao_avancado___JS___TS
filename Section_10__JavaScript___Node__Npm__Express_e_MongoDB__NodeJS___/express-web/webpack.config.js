const path = require('path'); // CommonJS
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); //

module.exports = {
    mode: 'production',
    entry: './frontend/main.js',
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
        filename: 'bundle.js',
        // path: path.resolve(__dirname, 'public'),
        // filename: 'assets/js/bundle.js',
        clean: true //
    },
    plugins: [ //
        new MiniCssExtractPlugin({ //
            // filename: 'assets/css/styles.css',
            filename: 'styles.css', //
        }), //
    ], //
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
            { //
            test: /\.css$/, //
            use: [MiniCssExtractPlugin.loader, 'css-loader'], //
            } //
        ]
    },
    devtool: 'source-map',
};
