const { merge } = require("webpack-merge");
const webpackBaseConfig = require("./webpack.base");

module.exports = merge(webpackBaseConfig, {
  mode: "production",
  devtool: "source-map",
  optimization: {
    minimize: true,
  },
  output: {
    publicPath: "http://localhost:3000/",
    clean: true,
  },
});
