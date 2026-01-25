import React from "react";
import {
  AppTheme,
  LOCAL_STORAGE_THEME_KEY,
  ThemeContext,
} from "./ThemeContext";

interface UseThemeResult {
  theme: AppTheme;
  toggleTheme: () => void;
}

export function useTheme(): UseThemeResult {
  const { theme, setTheme } = React.useContext(ThemeContext);

  React.useEffect(() => {
    document.body.className = theme as AppTheme;
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === AppTheme.LIGHT ? AppTheme.DARK : AppTheme.LIGHT;
    setTheme?.(newTheme);
    localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
  };

  return { theme: theme || AppTheme.LIGHT, toggleTheme };
}
