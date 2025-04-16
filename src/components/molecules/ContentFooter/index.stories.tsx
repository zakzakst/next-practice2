import type { Meta, StoryObj } from "@storybook/react";
import { ContentFooter } from ".";

const meta = {
  title: "Molecules/ContentFooter",
  component: ContentFooter,
} satisfies Meta<typeof ContentFooter>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
