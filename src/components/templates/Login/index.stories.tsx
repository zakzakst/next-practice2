import { PCStory, SPStory } from "@/tests/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { Login } from "./";

const meta = {
  title: "Templates/Login",
  component: Login,
} satisfies Meta<typeof Login>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = { ...PCStory };

export const SP: Story = { ...SPStory };
