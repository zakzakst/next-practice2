import { Args, PartialStoryFn, DecoratorFunction } from "@storybook/csf";
import type { Meta, StoryObj, ReactRenderer } from "@storybook/react";
import { AlertDialog, AlertDialogProvider } from "./";
import { AlertDialogState } from "./AlertDialogContext";

const createDecorator = (
  defaultState?: Partial<AlertDialogState>
): DecoratorFunction<ReactRenderer, Args> => {
  const Decorator = (Story: PartialStoryFn<ReactRenderer, Args>) => {
    return (
      <AlertDialogProvider defaultState={{ ...defaultState, isShown: true }}>
        <Story />
      </AlertDialogProvider>
    );
  };
  return Decorator;
};

const meta = {
  title: "Organisms/AlertDialog",
  component: AlertDialog,
} satisfies Meta<typeof AlertDialog>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  decorators: [createDecorator({ message: "成功しました" })],
};

export const CustomButtonLabel: Story = {
  decorators: [
    createDecorator({
      message: "記事を公開します。よろしいですか？",
      cancelButtonLabel: "キャンセル",
      okButtonLabel: "OK",
    }),
  ],
};

export const ExcludeCancel: Story = {
  decorators: [
    createDecorator({
      message: "投稿に成功しました",
      cancelButtonLabel: undefined,
      okButtonLabel: "OK",
    }),
  ],
};
