import { BuildOptions } from "./types/configTypes";
import { Configuration as DevServerConfiguration } from "webpack-dev-server";

export function BuildDevServer(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port,
    // В деве открывает страницу при запуске serve
    open: true,
    // Важное свойство, которое позволяет обновлять страницу, находясь не на главной
    historyApiFallback: true,
  };
}
