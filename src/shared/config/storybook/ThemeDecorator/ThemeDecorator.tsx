import { AppTheme, ThemeProvider } from "@/app/providers/ThemeProvider";
import "@/app/styles/index.scss";
//eslint-disable-next-line
export const ThemeDecorator = (theme: AppTheme) => (Story: any) => {
  return (
    <ThemeProvider initialTheme={theme}>
      <div className={`app ${theme}`}>{Story()}</div>
    </ThemeProvider>
  );
};
