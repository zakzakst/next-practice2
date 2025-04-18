import { composeStories } from "@storybook/react";
import { render, screen } from "@testing-library/react";
import { TextboxWithInfo } from "./";
import * as stories from "./index.stories";

const { FullProps } = composeStories(stories);

test("TextboxWithInfo", () => {
  render(<FullProps />);
  expect(screen.getByRole("textbox")).toHaveAccessibleName("記事タイトル");
  expect(screen.getByRole("textbox")).toHaveAccessibleDescription(
    "半角英数64文字以内で入力してください"
  );
  expect(screen.getByRole("textbox")).toHaveAccessibleErrorMessage(
    "不正な文字が含まれています"
  );
});

test("TextboxWithInfo", () => {
  const args = {
    title: "記事タイトル",
    info: "0 / 64",
    description: "半角英数64文字以内で入力してください",
    error: "不正な文字が含まれています",
  };
  render(<TextboxWithInfo {...args} />);
  const textbox = screen.getByRole("textbox");
  expect(textbox).toHaveAccessibleName(args.title);
  expect(textbox).toHaveAccessibleDescription(args.description);
  expect(textbox).toHaveAccessibleErrorMessage(args.error);
});
