import { GetMyProfileResponseMock } from "@/mocks/myProfile";
import type { Meta, StoryObj } from "@storybook/react";
import { Profile } from "./";

const meta = {
  title: "Templates/Profile",
  component: Profile,
  args: GetMyProfileResponseMock,
} satisfies Meta<typeof Profile>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
