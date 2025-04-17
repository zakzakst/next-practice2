import type { Meta, StoryObj } from "@storybook/react";
import { ContentHeader } from "./";

const meta = {
  title: "Molecules/ContentHeader",
  component: ContentHeader,
} satisfies Meta<typeof ContentHeader>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { title: "見出し", description: "概要" },
};
