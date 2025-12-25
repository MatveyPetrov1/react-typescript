import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import path from "path";
import { BuildOptions } from "./types/configTypes";
import MiniCssExtractPlugin from "mini-css-extract-plugin";

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
  ];
}
