import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
// import mockRouter from "next-router-mock";
import { OrderBy } from "./";

// const user = userEvent.setup();

jest.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams(),
}));

const setup = (asPath = "/posts") => {
  // mockRouter.setCurrentUrl(asPath);
  console.log(asPath);
  render(<OrderBy />);
  const combobox = screen.getByRole("combobox");
  return { combobox };
};

test("初期表示、query.orderBy なしの場合「公開日時順」が選択されている", async () => {
  const { combobox } = setup();
  expect(combobox).toHaveDisplayValue("更新日時順");
});
