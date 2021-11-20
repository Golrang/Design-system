const { merge } = require("webpack-merge");
const commonConfig = require("./webpack.common");

module.exports = (envVar) => {
  const { env } = envVar;
  const envConfig = require(`./webpack.${env}.js`);
  const config = merge(commonConfig, envConfig);
  return config;
};
