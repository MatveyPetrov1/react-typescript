import path from "path";
import webpack from "webpack";
import { BuildPaths } from "./../build/types/buildConfigTypes";
import { buildCssLoader } from "../build/loaders/buildCssLoader";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default ({ config }: { config: webpack.Configuration }) => {
  const paths: BuildPaths = {
    build: "",
    html: "",
    entry: "",
    alias: path.resolve(__dirname, "..", "..", "src/*"),
    src: path.resolve(__dirname, "..", "..", "src"),
  };

  config.resolve?.modules?.push(paths.src);
  if (config.resolve) {
    config.resolve.alias = { "@/*": paths.alias };
  }
  config.resolve?.extensions?.push(".ts", ".tsx");

  config.module?.rules?.push(buildCssLoader(true));

  //@ts-expect-error 123
  config.module.rules = config.module?.rules?.map(
    //@ts-expect-error 123
    (rule: webpack.RuleSetRule) => {
      if (/svg/.test(rule.test as string)) {
        return { ...rule, exclude: /\.svg$/i };
      }

      return rule;
    }
  );

  config?.module?.rules?.push({
    test: /\.svg$/,
    use: ["@svgr/webpack"],
  });

  return config;
};
