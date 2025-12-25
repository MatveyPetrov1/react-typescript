import webpack from "webpack";
import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import path from "path";
import { BuildEnvOptions } from "./config/build/types/buildConfigTypes";

export default function config(env: BuildEnvOptions): webpack.Configuration {
  const paths = {
    entry: path.resolve(__dirname, "src", "index.tsx"),
    html: path.resolve(__dirname, "public", "index.html"),
    build: path.resolve(__dirname, "build"),
    src: path.resolve(__dirname, "src"),
    alias: path.resolve(__dirname, "src/*"),
  };

  const port = env.port || 3000;
  const mode = env.mode || "development";
  const isDev = mode === "development";

  return buildWebpackConfig({
    mode,
    paths,
    isDev,
    port,
  });
}
