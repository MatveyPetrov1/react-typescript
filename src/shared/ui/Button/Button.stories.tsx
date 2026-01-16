//@ts-expect-error 1232
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { Button, ButtonSize, ButtonTheme } from "./Button";
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

export const ClearInverted: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR_INVERTED,
  },
};

export const ClearInvertedDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.CLEAR_INVERTED,
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

export const OutlineInverted: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE_INVERTED,
  },
};

export const OutlineInvertedDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.OUTLINE_INVERTED,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const Background: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND,
  },
};

export const BackgroundDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const BackgroundInverted: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
};

export const BackgroundInvertedDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const Square: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
};

export const SquareDark: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const SquareSizeM: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
};

export const SquareSizeMDark: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const SquareSizeL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
};

export const SquareSizeLDark: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const SquareSizeXL: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
};

export const SquareSizeXLDark: Story = {
  args: {
    children: ">",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    square: true,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const SizeM: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
  },
};

export const SizeMDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.M,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const SizeL: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
  },
};

export const SizeLDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.L,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const SizeXL: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
  },
};

export const SizeXLDark: Story = {
  args: {
    children: "Button",
    theme: ButtonTheme.BACKGROUND_INVERTED,
    size: ButtonSize.XL,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};

export const Disabled: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
};

export const DisabledDark: Story = {
  args: {
    children: "Button",
    disabled: true,
  },
  decorators: [ThemeDecorator(AppTheme.DARK)],
};
