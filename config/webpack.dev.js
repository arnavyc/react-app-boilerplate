const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const ESLintFormatterPretty = require('eslint-formatter-pretty');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const config = {
  mode: 'development',
  plugins: [new BundleAnalyzerPlugin()],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          formatter: ESLintFormatterPretty,
        },
      },
    ],
  },
  devServer: {
    quiet: true,
  },
};

module.exports = merge.smart(commonConfig, config);
