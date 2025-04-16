import type { Meta, StoryObj } from "@storybook/react";
import { Textbox } from "./";

const meta = {
  title: "Atoms/Textbox",
  component: Textbox,
  args: { placeholder: "ここに文字を入力します" },
} satisfies Meta<typeof Textbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
