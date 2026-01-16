import { AppTheme, ThemeProvider } from "@/app/providers/ThemeProvider";
//@ts-expect-error Иди нахуй еслинт
import { Story } from "@storybook/react-webpack5";
import "@/app/styles/index.scss";

export const ThemeDecorator =
  (theme: AppTheme) => (StoryComponent: () => Story) => {
    return (
      <ThemeProvider initialTheme={theme}>
        <div className={`app ${theme}`}>
          <StoryComponent />
        </div>
      </ThemeProvider>
    );
  };
