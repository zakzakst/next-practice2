import type { Meta, StoryObj } from "@storybook/react";
import { Textarea } from "./";

const meta = {
  title: "Atoms/Textarea",
  component: Textarea,
  args: { placeholder: "ここに文字を入力します" },
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Disabled: Story = {
  args: { disabled: true },
};
