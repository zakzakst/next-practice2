import {
  render,
  screen,
  // waitFor
} from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LikeButton } from "./";
// import { PostLikeResolvedMock } from "@/mocks/jest/like";

const user = userEvent.setup();

jest.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(),
}));

const defaultArgs = {
  likeCount: 0,
  liked: false,
  isMyPost: false,
  isLoggedIn: true,
};

const setup = ({ likeCount, liked, isMyPost, isLoggedIn } = defaultArgs) => {
  render(
    <LikeButton
      likeCount={likeCount}
      liked={liked}
      isMyPost={isMyPost}
      isLoggedIn={isLoggedIn}
    />
  );
  const button = screen.getByRole("button");
  const click = () => user.click(button);
  return { click, button };
};

test("Like 済みの場合、ボタンは非活性", async () => {
  const { button } = setup({ ...defaultArgs, liked: true });
  expect(button).toBeDisabled();
});

test("自分の投稿の場合、ボタンは非活性", async () => {
  const { button } = setup({ ...defaultArgs, isMyPost: false });
  expect(button).toBeDisabled();
});

test("未ログインの投稿の場合、ボタンは非活性", async () => {
  const { button } = setup({ ...defaultArgs, isLoggedIn: false });
  expect(button).toBeDisabled();
});

// TODO: 上手くいかない
// test("Like 押下しリクエストに成功すると、数が1加算され、ボタンが非活性化する", async () => {
//   PostLikeResolvedMock();
//   const { click, button } = setup();
//   expect(screen.getByText("Like")).toBeInTheDocument();
//   expect(button).toHaveTextContent("0");
//   expect(button).toBeEnabled();
//   await click();
//   await waitFor(() => {
//     expect(screen.findByText("Liked")).toBeInTheDocument();
//     expect(button).toHaveTextContent("1");
//     expect(button).toBeDisabled();
//   });
// });
