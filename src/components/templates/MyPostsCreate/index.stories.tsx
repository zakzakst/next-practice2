// TODO: useRouterでエラーが出てしまうので調べる
import { PCStory, SPStory } from "@/tests/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { MyPostsCreate } from "./";

const meta = {
  title: "Templates/MyPostsCreate",
  component: MyPostsCreate,
} satisfies Meta<typeof MyPostsCreate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { ...PCStory };
export const SP: Story = { ...SPStory };
