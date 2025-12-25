import { BuildOptions } from "./types/buildConfigTypes";
import webpack from "webpack";
import { buildPlugins } from "./buildPlugins";
import { buildLoaders } from "./buildLoaders";
import { BuildResolvers } from "./buildResolvers";
import { BuildDevServer } from "./buildDevServer";

export function buildWebpackConfig(
  options: BuildOptions
): webpack.Configuration {
  const { mode, paths, isDev } = options;

  return {
    mode,
    entry: paths.entry,
    output: {
      filename: "[name].[contenthash].js",
      path: paths.build,
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: BuildResolvers(options),
    devtool: isDev ? "inline-source-map" : undefined,
    devServer: isDev ? BuildDevServer(options) : undefined,
  };
}
