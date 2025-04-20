import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { PostForm } from "./";

const user = userEvent.setup();

const setup = () => {
  const onClickSave = jest.fn();
  const onValid = jest.fn();
  const onInvalid = jest.fn();
  render(
    <PostForm
      title="新規記事"
      onClickSave={onClickSave}
      onValid={onValid}
      onInvalid={onInvalid}
    />
  );
  const typeTitle = async (title: string) => {
    const textbox = screen.getByRole("textbox", { name: "記事タイトル" });
    await user.type(textbox, title);
  };
  const saveAsPublished = async () => {
    await user.click(screen.getByRole("switch", { name: "公開ステータス" }));
    await user.click(screen.getByRole("button", { name: "記事を公開する" }));
  };
  const saveAsDraft = async () => {
    await user.click(screen.getByRole("button", { name: "下書き保存する" }));
  };
  return {
    typeTitle,
    saveAsDraft,
    saveAsPublished,
    onClickSave,
    onValid,
    onInvalid,
  };
};

test("不適正内容で「下書き保存」を試みると、バリデーションエラーが表示される", async () => {
  const { saveAsDraft } = setup();
  await saveAsDraft();
  await waitFor(() => {
    expect(
      screen.getByRole("textbox", { name: "記事タイトル" })
    ).toHaveAccessibleErrorMessage("1文字以上で入力してください");
  });
});

test("不適正内容で「下書き保存」を試みると、onInvalid イベントハンドラーが実行される", async () => {
  const { saveAsDraft, onClickSave, onValid, onInvalid } = setup();
  await saveAsDraft();
  expect(onClickSave).toHaveBeenCalled();
  expect(onValid).not.toHaveBeenCalled();
  expect(onInvalid).toHaveBeenCalled();
});

// TODO: 上手くできない。調べる（react-hook-formで不正内容の時はsubmit自体が実行されていない？）
// test("適正内容で「下書き保存」を試みると、onValid イベントハンドラーが実行される", async () => {
//   const { typeTitle, saveAsDraft, onClickSave, onValid, onInvalid } = setup();
//   await typeTitle("私の技術記事");
//   await saveAsDraft();
//   expect(onClickSave).toHaveBeenCalled();
//   expect(onValid).toHaveBeenCalled();
//   expect(onInvalid).not.toHaveBeenCalled();
// });

test("適正内容で「記事を公開」を試みると、onClickSave イベントハンドラーのみ実行される", async () => {
  const { typeTitle, saveAsPublished, onClickSave, onValid, onInvalid } =
    setup();
  await typeTitle("私の技術記事");
  await saveAsPublished();
  expect(onClickSave).toHaveBeenCalled();
  expect(onValid).not.toHaveBeenCalled();
  expect(onInvalid).not.toHaveBeenCalled();
});
