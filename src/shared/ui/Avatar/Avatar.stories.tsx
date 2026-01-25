import type { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "./Avatar";
import "@/app/styles/index.scss";

const meta = {
  title: "shared/Avatar",
  component: Avatar,
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    src: "", ///
    size: 20,
    alt: "avatar",
  },
};
