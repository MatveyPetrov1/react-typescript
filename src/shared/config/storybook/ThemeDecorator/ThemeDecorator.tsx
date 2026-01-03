import { AppTheme } from "@/app/providers/ThemeProvider";
//@ts-expect-error Иди нахуй еслинт
import { Story } from "@storybook/react-webpack5";
import "@/app/styles/index.scss";

export const ThemeDecorator =
  // eslint-disable-next-line react/display-name
  (theme: AppTheme) => (StoryComponent: () => Story) => {
    return (
      <div className={`app ${theme}`}>
        <StoryComponent />
      </div>
    );
  };
