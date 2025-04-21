// TODO: useRouterでエラーが出てしまうので調べる
import { GetMyProfileResponseMock } from "@/mocks/myProfile";
import { PCStory, SPStory } from "@/tests/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { MyProfileEdit } from "./";

const meta = {
  title: "Templates/MyProfileEdit",
  component: MyProfileEdit,
  args: { profile: GetMyProfileResponseMock },
} satisfies Meta<typeof MyProfileEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { ...PCStory };
export const SP: Story = { ...SPStory };
