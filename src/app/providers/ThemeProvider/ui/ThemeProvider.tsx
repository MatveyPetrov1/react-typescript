import React from "react";
import {
  AppTheme,
  ThemeContext,
  LOCAL_STORAGE_THEME_KEY,
} from "@/app/providers/ThemeProvider/lib/ThemeContext";

//Так как метод getItem возвращает строку, а в generic состояния theme указан тип AppTheme, мы должны явно привести его к этому типу, а так же указать что делать в случае если theme в local storage вообще не найдется
const defaultTheme =
  (localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as AppTheme) || AppTheme.LIGHT;

interface ThemeContextProps {
  children: React.ReactNode;
}

export const ThemeProvider: React.FC<ThemeContextProps> = ({ children }) => {
  const [theme, setTheme] = React.useState<AppTheme>(defaultTheme);

  //На каждый рендер компонента объект, который передается в value будет инициализироваться заново, соответсвтенно будет перерисовываться и компонент, поэтому используем useMemo(). useMemo() позволяет каждый раз не создавать новый объект, а возвращать уже существующий
  const defaultProps = React.useMemo(
    () => ({
      theme,
      setTheme,
    }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={defaultProps}>
      {children}
    </ThemeContext.Provider>
  );
};
