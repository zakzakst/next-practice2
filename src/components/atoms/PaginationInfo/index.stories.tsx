import type { Meta, StoryObj } from "@storybook/react";
import { PaginationInfo } from "./";

const meta = {
  title: "Atoms/PaginationInfo",
  component: PaginationInfo,
  args: { start: 1, end: 10, hitCount: 100 },
} satisfies Meta<typeof PaginationInfo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
