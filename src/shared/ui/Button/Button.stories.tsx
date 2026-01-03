//@ts-expect-error 1232
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button, ButtonTheme } from "./Button";
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppTheme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "shared/Button",
  component: Button,
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Button",
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const Clear: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR,
  },
};

export const ClearDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const Outline: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
  },
};

export const OutlineDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};
