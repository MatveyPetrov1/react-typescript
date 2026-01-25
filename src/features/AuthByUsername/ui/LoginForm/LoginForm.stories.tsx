import type { Meta, StoryObj } from "@storybook/react";
import LoginForm from "./LoginForm";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppTheme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    onSuccess: () => {
      return;
    },
  },
};

export const Dark: Story = {
  args: {
    onSuccess: () => {
      return;
    },
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};
