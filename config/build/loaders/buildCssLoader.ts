import MiniCssExtractPlugin from "mini-css-extract-plugin";

export function buildCssLoader(isDev: boolean) {
  return {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        // Для модульных файлов
        options: {
          modules: {
            // Позволяет распознавать модульные scss файлы
            auto: (resPath: string) =>
              Boolean(resPath.includes(".module.scss")),
            // Меняем имя для модульных файлов dev режима
            localIdentName: isDev
              ? "[path][name]__[local]--[hash:base64:5]"
              : "[hash:base64:8]",
            namedExport: false,
          },
        },
      },
      "sass-loader",
    ],
  };
}
