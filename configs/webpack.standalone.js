const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");

module.exports = {
  mode: "development",
  devtool: "eval-source-map",
  cache: false,
  optimization: {
    minimize: false,
  },
  entry: {
    main: path.join(__dirname, "../src/index.js"),
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/preset-react", "@babel/preset-env"],
        },
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development"),
        STANDALONE_MODE: JSON.stringify("true"),
      },
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      title: "Host App (Standalone)",
      filename: "index.html",
      chunks: ["main"],
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"],
    alias: {
      // Mock all remotes for standalone mode
      "catalog/App": path.resolve(__dirname, "../src/mocks/catalogMock.js"),
      "cart/App": path.resolve(__dirname, "../src/mocks/cartMock.js"),
      "cart/CartWidget": path.resolve(__dirname, "../src/mocks/cartMock.js"),
      "cart/CartContext": path.resolve(__dirname, "../src/mocks/cartMock.js"),
      "checkout/App": path.resolve(__dirname, "../src/mocks/checkoutMock.js"),
      // Mock common components for standalone mode
      "mfe-common-components": path.resolve(__dirname, "../src/mocks/commonComponentsMock.js"),
    },
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "../dist"),
    },
    port: 3000,
    hot: true,
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    historyApiFallback: true,
  },
};
