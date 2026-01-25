import type { Meta, StoryObj } from "@storybook/react";
import { CountrySelect } from "./CountrySelect";
import "@/app/styles/index.scss";

const meta = {
  title: "entities/CountrySelect",
  component: CountrySelect,
} satisfies Meta<typeof CountrySelect>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {},
};
