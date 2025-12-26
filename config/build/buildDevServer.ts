import { BuildOptions } from "./types/buildConfigTypes";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function BuildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // Важное свойство, которое позволяет обновлять страницу, находясь не на главной
    historyApiFallback: true,
  };
}
