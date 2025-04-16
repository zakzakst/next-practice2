import type { Meta, StoryObj } from "@storybook/react";
import { Combobox } from ".";

const meta = {
  title: "Molecules/Combobox",
  component: Combobox,
  args: {
    "aria-label": "ソート順",
    children: (
      <>
        <option>新着順</option>
        <option>スター順</option>
      </>
    ),
  },
  // TODO: a11y設定する
  // parameters: {
  //   a11y: {
  //     config: { rules: [{ id: "label", enabled: false }] },
  //   },
  // },
} satisfies Meta<typeof Combobox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
