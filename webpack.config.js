const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const DIST_DIR = path.resolve(__dirname, "public");
const SRC_DIR = path.resolve(__dirname, "src");

module.exports = {
  entry: SRC_DIR + "/app/index.js",
  output: {
    path: DIST_DIR,
    filename: "bundle.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devServer: {
    watchFiles: ["src/**/*"],
    hot: true,
  },
  plugins: [new HtmlWebpackPlugin()],
};
