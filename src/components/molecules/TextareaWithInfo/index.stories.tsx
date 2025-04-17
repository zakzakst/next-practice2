import type { Meta, StoryObj } from "@storybook/react";
import { TextareaWithInfo } from "./";

const meta = {
  title: "Molecules/TextareaWithInfo",
  component: TextareaWithInfo,
  args: { title: "記事本文" },
} satisfies Meta<typeof TextareaWithInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Info: Story = {
  args: { info: "0 / 64" },
};

export const Description: Story = {
  args: { description: "半角英数64文字以内で入力してください" },
};

export const Error: Story = {
  args: { error: "不正な文字が含まれています" },
};

export const FullProps: Story = {
  args: {
    info: "0 / 64",
    description: "半角英数64文字以内で入力してください",
    error: "不正な文字が含まれています",
  },
};
