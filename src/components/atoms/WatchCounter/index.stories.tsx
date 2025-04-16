import type { Meta, StoryObj } from "@storybook/react";
import { useForm } from "react-hook-form";
import { Textbox } from "@/components/atoms/Textbox";
import { WatchCounter } from "./";

export const TestComponent = ({ text = "" }: { text?: string }) => {
  const { register, control } = useForm({ defaultValues: { text } });
  const name = "text";
  return (
    <>
      <Textbox {...register(name)} id="input" />
      <WatchCounter max={10} name={name} control={control} />
    </>
  );
};

const meta = {
  title: "Atoms/WatchCounter",
  component: TestComponent,
  // TODO: excludeStoriesについて調べる
  excludeStories: /.*Component$/,
  // TODO: a11y設定する
  // parameters: {
  //   a11y: {
  //     config: { rules: [{ id: "label", enabled: false }] },
  //   },
  // },
} satisfies Meta<typeof TestComponent>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const LimitOver: Story = {
  args: { text: "01234567890" },
};
