const prodConfig = require('./config/webpack.prod');
const devConfig = require('./config/webpack.dev');
const commonConfig = require('./config/webpack.common');

module.exports = env => {
  const { mode } = env;
  let res = {};
  switch (mode) {
    case 'production':
      res = prodConfig;
      break;

    case 'development':
      res = devConfig;
      break;

    default:
      res = commonConfig;
  }
  return res;
};
