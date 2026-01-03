import { RouterDecorator } from "./../../src/shared/config/storybook/RouterDecorator/RouterDecorator";
import { AppTheme } from "../../src/app/providers/ThemeProvider";
import { ThemeDecorator } from "./../../src/shared/config/storybook/ThemeDecorator/ThemeDecorator";

import type { Preview } from "@storybook/react-webpack5";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export const decorators = [ThemeDecorator(AppTheme.LIGHT), RouterDecorator];

export default preview;
