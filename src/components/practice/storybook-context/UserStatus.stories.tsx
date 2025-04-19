import type { Meta, StoryObj } from "@storybook/react";
import { UserStatus } from "./UserStatus";
import { UserProviderMock } from "./UserProviderMock";

const meta = {
  title: "Practice/UserStatus",
  component: UserStatus,
} satisfies Meta<typeof UserStatus>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [
    (Story) => (
      <UserProviderMock user={{ id: "1", name: "Alice" }}>
        <Story />
      </UserProviderMock>
    ),
  ],
};

export const Loading: Story = {
  decorators: [
    (Story) => (
      <UserProviderMock loading>
        <Story />
      </UserProviderMock>
    ),
  ],
};
