const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');
const webpackNodeExternals = require('webpack-node-externals');

const _config = {
    /** Inform webpack that we 're building a bundle
     *  for nodeJs, rather than for browser 
     */
    target: 'node',

    // Tell the webpack the root file of our server application.
    entry: './src/index.js',

    // Tell the webpack where to put the output file that is genrated.
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'build')
    },

    externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, _config);