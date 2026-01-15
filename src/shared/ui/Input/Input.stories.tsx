//@ts-expect-error 1232
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Input, InputColor } from "./Input";
import "@/app/styles/index.scss";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppTheme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "shared/Input",
  component: Input,
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    value: "Текст",
    placeholder: "Введите текст",
    color: InputColor.PRIMARY,
  },
};

export const Inverted: Story = {
  args: {
    value: "Текст",
    placeholder: "Введите текст",
    color: InputColor.INVERTED,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};
