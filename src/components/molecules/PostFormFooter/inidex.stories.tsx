import type { Meta, StoryObj } from "@storybook/react";
import { PostFormFooter } from "./";
import { PostMyPostInput } from "@/api/myPost";
import { useForm } from "react-hook-form";

const TestComponent = (
  props: Omit<
    React.ComponentPropsWithoutRef<typeof PostFormFooter>,
    "register" | "control"
  >
) => {
  const { register, control } = useForm<PostMyPostInput>();
  return <PostFormFooter {...props} register={register} control={control} />;
};

const meta = {
  title: "Molecules/PostFormFooter",
  component: TestComponent,
  args: {
    isSubmitting: false,
    onClickSave: () => {},
  },
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const HasDeleteButton: Story = {
  args: { onClickDelete: () => {} },
};

export const IsSubmitting: Story = {
  args: { isSubmitting: true },
};
