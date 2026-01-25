// Тип для мода из переменной окружения из скрипта в package.json

export type BuildMode = "development" | "production";

// Тип для путей для сборки

export interface BuildPaths {
  entry: string;
  html: string;
  build: string;
  src: string;
  alias: string;
}

// Тип для путей для сборки

export interface BuildEnvOptions {
  port: number;
  mode: BuildMode;
  apiUrl: string;
}

// Тип для всего что передается в написанную функцию, для конфигурации WP

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPaths;
  isDev: boolean;
  port: number;
  apiUrl: string;
}
