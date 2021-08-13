const CopyWebpackPlugin = require("copy-webpack-plugin");
const webpack = require("webpack");
const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".mjs", ".tsx", ".ts", ".js"],
  },
  devServer: {
    contentBase: "./dist",
    overlay: true,
    hot: true,
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: ["index.html"],
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
};
