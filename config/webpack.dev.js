const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const config = {
  mode: 'development',
  plugins: [
    new BundleAnalyzerPlugin(),
  ],
  devServer: {
    quiet: true,
  },
};

module.exports = merge.smart(commonConfig, config);
