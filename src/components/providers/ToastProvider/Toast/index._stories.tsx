// TODO: contextとstorybookの連携勉強する
// import { Args, PartialStoryFn, DecoratorFunction } from "@storybook/csf";
// import {
//   ToastProvider,
//   ToastState,
// } from "@/components/providers/ToastProvider";
// import type { Meta, StoryObj, ReactRenderer } from "@storybook/react";
// import { Toast } from "./";

// const createDecorator = (
//   defaultState?: Partial<ToastState>
// ): DecoratorFunction<ReactRenderer, Args> => {
//   const Decorator = (Story: PartialStoryFn<ReactRenderer, Args>) => {
//     return (
//       <ToastProvider defaultState={{ ...defaultState, isShown: true }}>
//         <Story />
//       </ToastProvider>
//     );
//   };
//   return Decorator;
// };

// const meta = {
//   title: "Providers/Toast",
//   component: Toast,
// } satisfies Meta<typeof Toast>;

// export default meta;
// type Story = StoryObj<typeof meta>;

// export const Succeed: Story = {
//   // args: {
//   //   children: null,
//   //   defaultState: {
//   //     message: "成功しました",
//   //     style: "succeed",
//   //     isShown: true,
//   //   },
//   // },
//   decorators: [createDecorator({ message: "成功しました", style: "succeed" })],
// };
