import type { Meta, StoryObj } from "@storybook/react";
import { DescriptionMessage } from "./";

const meta = {
  title: "Atoms/DescriptionMessage",
  component: DescriptionMessage,
  args: { children: "概要" },
} satisfies Meta<typeof DescriptionMessage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
