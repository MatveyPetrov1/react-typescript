//@ts-expect-error 1232
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Loader } from "./Loader";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppTheme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "shared/Loader",
  component: Loader,
} satisfies Meta<typeof Loader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {},
};

export const Dark: Story = {
  args: {},
  decorators: [ThemeDecorator(AppTheme.DARK)],
};
