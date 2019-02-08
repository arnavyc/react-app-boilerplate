const HTMLWebpackPlugin = require("html-webpack-plugin");
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const appRoot = require('app-root-path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: `${appRoot.toString()}/dist`,
    filename: 'bundle.js',
  },
  stats: 'errors-only',
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
      {
        test: /\.html$/,
        use: "html-loader",
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new FriendlyErrorsWebpackPlugin(),
  ],
};

