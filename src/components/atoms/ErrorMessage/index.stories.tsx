import type { Meta, StoryObj } from "@storybook/react";
import { ErrorMessage } from "./";

const meta = {
  title: "Atoms/ErrorMessage",
  component: ErrorMessage,
  args: { children: "エラー" },
} satisfies Meta<typeof ErrorMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
