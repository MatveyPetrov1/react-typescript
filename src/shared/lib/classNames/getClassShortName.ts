import { AppTheme } from "@/app/providers/ThemeProvider";

export const getClassShortName = (theme: AppTheme) => {
  const currentTheme = theme === AppTheme.LIGHT ? "light" : "dark";

  return { currentTheme };
};
