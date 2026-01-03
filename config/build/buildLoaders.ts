import webpack from "webpack";
import { BuildOptions } from "./types/buildConfigTypes";
import { buildCssLoader } from "./loaders/buildCssLoader";

export function buildLoaders(options: BuildOptions): webpack.RuleSetRule[] {
  // Если не используем тайпскрипт - нужен babel-loader
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const sassLoader = buildCssLoader(options.isDev);

  const svgLoader = {
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: "file-loader",
      },
    ],
  };

  const babelLoader = {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        targets: "defaults",
        presets: [["@babel/preset-env"]],
      },
    },
  };

  return [fileLoader, svgLoader, babelLoader, typescriptLoader, sassLoader];
}
