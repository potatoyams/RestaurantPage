var path = require('path');

// webpack.config.js
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 8000,
        inline: true,
        hot: true
    },
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    }
}