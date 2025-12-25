import webpack from "webpack";
import { BuildOptions } from "./types/buildConfigTypes";
import path from "path";

export function BuildResolvers(options: BuildOptions): webpack.ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true,
    modules: [path.resolve(options.paths.src), "node_modules"],
    alias: { "@/*": options.paths.alias },
    mainFiles: ["index"],
  };
}
