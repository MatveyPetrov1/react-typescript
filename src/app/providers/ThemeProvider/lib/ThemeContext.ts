import React from "react";

export enum AppTheme {
  LIGHT = "light",
  DARK = "dark",
}

export interface ThemeContextProps {
  theme?: AppTheme;
  setTheme?: (theme: AppTheme) => void;
}

//Тупа самое банальное использование context
export const ThemeContext = React.createContext<ThemeContextProps>({});

// Ключ для получения темы из local storage
export const LOCAL_STORAGE_THEME_KEY = "theme";
