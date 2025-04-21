import { GetPostsResponseMock } from "@/mocks/posts";
import type { Meta, StoryObj } from "@storybook/react";
import { PostItem } from "./";

const meta = {
  title: "Templates/Posts/PostItem",
  component: PostItem,
} satisfies Meta<typeof PostItem>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: { post: GetPostsResponseMock.posts[0] },
};

export const Draft: Story = {
  args: { post: { ...GetPostsResponseMock.posts[0], published: false } },
};
