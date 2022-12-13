const HtmlWebpackPlugin = require("html-webpack-plugin");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const WebpackBar = require("webpackbar");
// const ESLintPlugin = require('eslint-webpack-plugin');

const setupPlugins = () => ({
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      title: "Traning project",
      favicon: "./src/img/favicon.ico",
      inject: "body",
    }),
    new WebpackBar(),
    new BundleAnalyzerPlugin({
      analyzerMode: "disabled",
      openAnalyzer: false,
      generateStatsFile: true,
    }),
    // new ESLintPlugin(),
  ],
});

module.exports = { setupPlugins };
