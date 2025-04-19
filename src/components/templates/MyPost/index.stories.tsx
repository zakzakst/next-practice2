import { GetMyPostResponseMock } from "@/mocks/myPost";
import { PCStory, SPStory } from "@/tests/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { MyPost } from "./";

const meta = {
  title: "Templates/MyPost",
  component: MyPost,
  args: { post: GetMyPostResponseMock },
} satisfies Meta<typeof MyPost>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { ...PCStory };

export const SP: Story = { ...SPStory };
