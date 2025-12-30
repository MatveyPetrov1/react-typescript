import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";
import { BuildOptions } from "./types/buildConfigTypes";
import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";

export function buildPlugins(
  options: BuildOptions
): webpack.WebpackPluginInstance[] {
  return [
    new HTMLWebpackPlugin({
      template: path.resolve(options.paths.html),
    }),
    new webpack.ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: "css/[name].[contenthash:8].css",
      chunkFilename: "css/[name].[contenthash:8].css",
    }),

    new BundleAnalyzerPlugin({ openAnalyzer: false }),
  ];
}
