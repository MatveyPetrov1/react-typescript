import type { Meta, StoryObj } from "@storybook/react";
import { Text, TextTheme } from "./Text";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppTheme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "shared/Text",
  component: Text,
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: { text: "Text", title: "Title" },
};

export const Dark: Story = {
  args: { text: "Text", title: "Title" },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const OnlyTitle: Story = {
  args: { title: "Title" },
};

export const OnlyText: Story = {
  args: { text: "Text" },
};

export const Error: Story = {
  args: { text: "Text", title: "Title", theme: TextTheme.ERROR },
};

export const ErrorDark: Story = {
  args: { text: "Text", title: "Title", theme: TextTheme.ERROR },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};
