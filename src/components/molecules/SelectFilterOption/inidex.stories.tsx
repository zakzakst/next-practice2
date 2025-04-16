import type { Meta, StoryObj } from "@storybook/react";
import { SelectFilterOption } from ".";

const meta = {
  title: "Molecules/SelectFilterOption",
  component: SelectFilterOption,
} satisfies Meta<typeof SelectFilterOption>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: "公開ステータス",
    selectProps: {},
    options: [
      { value: "all", label: "すべて" },
      { value: "public", label: "公開" },
      { value: "private", label: "下書き" },
    ],
  },
};
