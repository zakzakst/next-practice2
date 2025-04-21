import { GetPostsResponseMock } from "@/mocks/posts";
import { PCStory, SPStory } from "@/tests/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { Posts } from "./";

const meta = {
  title: "Templates/Posts",
  component: Posts,
  args: GetPostsResponseMock,
} satisfies Meta<typeof Posts>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { ...PCStory };
export const SP: Story = { ...SPStory };
