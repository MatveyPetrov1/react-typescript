import type { Meta, StoryObj } from "@storybook/react";
import { AppLink, AppLinkTheme } from "./AppLink";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppTheme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "shared/AppLink",
  component: AppLink,
  args: {
    to: "/",
  },
} satisfies Meta<typeof AppLink>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: "Link",
    theme: AppLinkTheme.PRIMARY,
  },
};

export const PrimaryDark: Story = {
  args: {
    children: "Link",
    theme: AppLinkTheme.PRIMARY,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const Inverted: Story = {
  args: { children: "Link", theme: AppLinkTheme.INVERTED },
};

export const InvertedDark: Story = {
  args: { children: "Link", theme: AppLinkTheme.INVERTED },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};
