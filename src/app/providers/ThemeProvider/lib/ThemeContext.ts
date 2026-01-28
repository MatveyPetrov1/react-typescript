import React from "react";

export enum AppTheme {
  LIGHT = "app_light_theme",
  DARK = "app_dark_theme",
  ORANGE = "app_orange_theme",
}

export interface ThemeContextProps {
  theme?: AppTheme;
  setTheme?: (theme: AppTheme) => void;
}

//Тупа самое банальное использование context
export const ThemeContext = React.createContext<ThemeContextProps>({});

// Ключ для получения темы из local storage
export const LOCAL_STORAGE_THEME_KEY = "theme";
