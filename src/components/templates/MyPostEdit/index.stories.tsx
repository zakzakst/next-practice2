// TODO: useRouterでエラーが出てしまうので調べる
import { PCStory, SPStory } from "@/tests/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { GetMyPostResponseMock } from "@/mocks/myPost";
import { MyPostEdit } from "./";
// import mockRouter from "next-router-mock";

const meta = {
  title: "Templates/MyPostEdit",
  component: MyPostEdit,
  args: {
    post: GetMyPostResponseMock,
  },
  // beforeEach: () => {
  //   mockRouter.setCurrentUrl("/");
  // },
} satisfies Meta<typeof MyPostEdit>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { ...PCStory };
export const SP: Story = { ...SPStory };
