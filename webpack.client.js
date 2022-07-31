const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const _config = {
    // Tell the webpack the root file of our server application.
    entry: './src/client/client.js',

    // Tell the webpack where to put the output file that is genrated.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public')
    }
}

module.exports = merge(baseConfig, _config);