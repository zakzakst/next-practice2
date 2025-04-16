import type { Meta, StoryObj } from "@storybook/react";
import { InputFileButton } from "./";

const meta = {
  title: "Atoms/InputFileButton",
  component: InputFileButton,
  args: {
    buttonProps: { children: "画像を選択" },
    inputProps: {},
  },
  // TODO: a11y設定する
  // parameters: {
  //   a11y: {
  //     config: { rules: [{ id: "label", enabled: false }] },
  //   },
  // },
} satisfies Meta<typeof InputFileButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
