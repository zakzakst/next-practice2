import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { GetMyPostResponseMock } from "@/mocks/myPost";
import { MyPostEdit } from "./";

const user = userEvent.setup();
const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

const setup = async () => {
  render(<MyPostEdit post={GetMyPostResponseMock} />);
  const clearTitle = async () => {
    await user.clear(screen.getByRole("textbox", { name: "記事タイトル" }));
  };
  const saveAsPublished = async () => {
    await user.click(screen.getByRole("button", { name: "記事を公開する" }));
    // await screen.findByRole('alertdialog')
  };
  const saveAsDraft = async () => {
    await user.click(screen.getByRole("switch", { name: "公開ステータス" }));
    await user.click(screen.getByRole("button", { name: "下書き保存する" }));
  };
  const deletePost = async () => {
    await user.click(screen.getByRole("button", { name: "記事を削除する" }));
  };
  const clickButton = async (name: "はい" | "いいえ") => {
    await user.click(screen.getByRole("button", { name }));
  };
  return {
    clearTitle,
    saveAsPublished,
    saveAsDraft,
    deletePost,
    clickButton,
  };
};
