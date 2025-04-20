import { PCStory } from "@/tests/storybook";
// import { expect } from "@storybook/jest";
import type { Meta, StoryObj } from "@storybook/react";
import {
  userEvent as user,
  // waitFor,
  within,
} from "@storybook/testing-library";
import { PostForm } from "./";

const meta = {
  title: "Templates/PostForm",
  component: PostForm,
  parameters: {
    ...PCStory.parameters,
    nextjs: {
      router: {
        pathname: "/my/posts",
      },
    },
  },
  args: {
    title: "新規記事",
    onValid: () => {},
    onClickSave: () => {},
  },
} satisfies Meta<typeof PostForm>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};

export const SucceedSaveAsDraft: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await user.type(
      canvas.getByRole("textbox", { name: "記事タイトル" }),
      "私の技術記事"
    );
  },
};

// TODO: jestのテストコードでstoriesを参照しているのだが、多分@storybook/jestとjestのexpectの名前が一緒なのがエラーの原因？
export const FailedSaveAsDraft: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await user.click(canvas.getByRole("button", { name: "下書き保存する" }));
    // const textbox = canvas.getByRole("textbox", { name: "記事タイトル" });
    // await waitFor(() => {
    //   expect(textbox).toHaveAccessibleErrorMessage(
    //     "1文字以上で入力してください"
    //   );
    // });
  },
};

export const SavePublish: Story = {
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    await user.type(
      canvas.getByRole("textbox", { name: "記事タイトル" }),
      "私の技術記事"
    );
    await user.click(canvas.getByRole("switch", { name: "公開ステータス" }));
    // await expect(
    //   canvas.getByRole("button", { name: "記事を公開する" })
    // ).toBeInTheDocument();
  },
};
