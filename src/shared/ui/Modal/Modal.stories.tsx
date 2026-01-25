import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Modal } from "./Modal";
import { ThemeDecorator } from "@/shared/config/storybook/ThemeDecorator/ThemeDecorator";
import { AppTheme } from "@/app/providers/ThemeProvider";

const meta = {
  title: "shared/Modal",
  component: Modal,
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Light: Story = {
  args: {
    children: "Text",
    isOpen: true,
  },
};

export const Dark: Story = {
  args: { children: "Text", isOpen: true },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};
