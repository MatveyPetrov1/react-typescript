//@ts-expect-error 1232
import type { Meta, StoryObj } from "@storybook/react-webpack5";
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

export const Secondary: Story = {
  args: { children: "Link", theme: AppLinkTheme.SECONDARY },
};

export const SecondaryDark: Story = {
  args: { children: "Link", theme: AppLinkTheme.SECONDARY },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};
