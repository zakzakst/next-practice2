// TODO: next-router-mockの使い方調べる
import { GetMyPostResponseMock } from "@/mocks/myPost";
import {
  render,
  screen,
  // waitFor,
} from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import mockRouter from "next-router-mock";
import { MyPost } from "./";

// const user = userEvent.setup();
jest.mock("react-markdown", () => {
  return {
    __esModule: true,
    default: (props: { children: React.ReactNode }) => {
      return props.children;
    },
  };
});

test("見出しの表示", () => {
  render(<MyPost post={GetMyPostResponseMock} />);
  expect(
    screen.getByRole("heading", { name: "記事タイトル" })
  ).toBeInTheDocument();
});

// test("「編集する」リンクを押下すると、編集ページに遷移する", async () => {
//   render(<MyPost post={GetMyPostResponseMock} />);
//   await user.click(screen.getByRole("link", { name: "編集する" }));
//   await waitFor(() =>
//     expect(mockRouter).toMatchObject({ pathname: "/my/posts/1/edit" })
//   );
// });
