import {
  BadRequestError,
  InternalServerError,
  MethodNotAllowedError,
  NotFoundError,
  UnauthorizedError,
} from "@/lib/error";
import { PCStory, SPStory } from "@/tests/storybook";
import type { Meta, StoryObj } from "@storybook/react";
import { Error } from "./";

const meta = {
  title: "Templates/Error",
  component: Error,
  parameters: {
    ...PCStory.parameters,
  },
} satisfies Meta<typeof Error>;

export default meta;
type Story = StoryObj<typeof meta>;

export const BadRequest: Story = {
  args: new BadRequestError().serialize(),
};

export const Unauthorized: Story = {
  args: new UnauthorizedError().serialize(),
};

export const NotFound: Story = {
  args: new NotFoundError().serialize(),
};

export const MethodNotAllowed: Story = {
  args: new MethodNotAllowedError().serialize(),
};

export const InternalServer: Story = {
  args: new InternalServerError().serialize(),
};

export const SP: Story = {
  ...BadRequest,
  parameters: {
    ...SPStory.parameters,
  },
};
