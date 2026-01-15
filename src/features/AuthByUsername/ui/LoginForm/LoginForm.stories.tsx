//@ts-expect-error 1232
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { LoginForm } from "./LoginForm";
import "@/app/styles/index.scss";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
