import type { Meta, StoryObj } from "@storybook/react";
import { Switch } from "./";

const meta = {
  title: "Atoms/Switch",
  component: Switch,
  // TODO: a11y設定する
  // parameters: {
  //   a11y: {
  //     config: { rules: [{ id: "label", enabled: false }] },
  //   },
  // },
} satisfies Meta<typeof Switch>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const Checked: Story = {
  args: { defaultChecked: true },
};

export const Disabled: Story = {
  args: { disabled: true },
};

export const DisabledChecked: Story = {
  args: { disabled: true, defaultChecked: true },
};
