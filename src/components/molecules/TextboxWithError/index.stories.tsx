import type { Meta, StoryObj } from "@storybook/react";
import { TextboxWithError } from "./";

const meta = {
  title: "Molecules/TextboxWithError",
  component: TextboxWithError,
  args: {
    id: "title",
    name: "title",
    defaultValue: "タイトル",
    maxLength: 10,
  },
  // TODO: a11y設定する
  // parameters: {
  //   a11y: {
  //     config: { rules: [{ id: "label", enabled: false }] },
  //   },
  // },
} satisfies Meta<typeof TextboxWithError>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    error: "エラーがあります",
  },
};
