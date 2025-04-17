import { Args, PartialStoryFn } from "@storybook/csf";
import type { Meta, StoryObj, ReactRenderer } from "@storybook/react";
import { AlertDialog, AlertDialogProvider } from ".";
import { AlertDialogState } from "./AlertDialogContext";

// TODO: contextとの連携の仕方勉強する。アロー関数で指定する方法調べる
// const createDecorator = (defaultState?: Partial<AlertDialogState>) => {
//   const Decorator = (Story: PartialStoryFn<ReactRenderer, Args>) => {
//     <AlertDialogProvider defaultState={{...defaultState, isShown: true}}>
//       <Story />
//     </AlertDialogProvider>
//   }
//   return Decorator
// }

function createDecorator(defaultState?: Partial<AlertDialogState>) {
  return function Decorator(Story: PartialStoryFn<ReactRenderer, Args>) {
    return (
      <AlertDialogProvider defaultState={{ ...defaultState, isShown: true }}>
        <Story />
      </AlertDialogProvider>
    );
  };
}

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
