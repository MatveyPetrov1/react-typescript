import { BuildOptions } from "../types/buildConfigTypes";

export const buildBabelLoader = (options: BuildOptions) => {
  return {
    test: /\.(?:js|mjs|cjs)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: {
        targets: "defaults",
        presets: [["@babel/preset-env"]],
        plugins: [
          options.isDev && require.resolve("react-refresh/babel"),
        ].filter(Boolean),
      },
    },
  };
};
