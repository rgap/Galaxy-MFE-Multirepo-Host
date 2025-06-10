const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const federationConfig = require("./federationConfig");

module.exports = {
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
      {
        test: /\.scss$/,
        use: [
          "style-loader", // Injects styles into DOM
          "css-loader", // Turns CSS into JS
          {
            loader: "sass-loader", // Compiles SCSS to CSS
            options: {
              sassOptions: {
                includePaths: ["node_modules"],
              },
            },
          },
        ],
      },
    ],
  },
  output: {
    publicPath: "http://localhost:3000/",
  },
  plugins: [
    new ModuleFederationPlugin({
      ...federationConfig,
      shared: {
        ...federationConfig.shared,
        react: {
          ...federationConfig.shared.react,
          singleton: true,
          eager: true,
        },
        "react-dom": {
          ...federationConfig.shared["react-dom"],
          singleton: true,
          eager: true,
        },
        "react-router-dom": {
          ...federationConfig.shared["react-router-dom"],
          singleton: true,
          eager: true,
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: "public/index.html",
      title: "Host App",
      filename: "index.html",
      chunks: ["main"],
    }),
  ],
  resolve: {
    extensions: [".jsx", ".js", ".json"],
  },
};
