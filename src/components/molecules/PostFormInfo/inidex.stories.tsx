import { PostMyPostInput } from "@/api/myPost";
import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { PostFormInfo } from "./";

const TestComponent = () => {
  const {
    register,
    control,
    formState: { errors },
  } = useForm<PostMyPostInput>();
  return <PostFormInfo register={register} control={control} errors={errors} />;
};

const meta = {
  title: "Molecules/PostFormInfo",
  component: TestComponent,
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
