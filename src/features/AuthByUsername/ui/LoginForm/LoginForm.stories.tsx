//@ts-expect-error 1232
import type { Meta, StoryObj } from "@storybook/react-webpack5";
import { LoginFormAsync as LoginForm } from "./LoginForm.async";
import "@/app/styles/index.scss";
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator";

const meta = {
  title: "features/LoginForm",
  component: LoginForm,
} satisfies Meta<typeof LoginForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};

export const WithError: Story = {
  args: {},
  decorators: [
    StoreDecorator({ loginForm: "123", username: "123", error: "ERROR" }),
  ],
};

export const Loading: Story = {
  args: {},
  decorators: [StoreDecorator({ isLoading: true })],
};
