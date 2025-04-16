import { render, screen } from "@testing-library/react";
import { ContentHeader } from "./";

test("[role='banner']", () => {
  render(<ContentHeader title="記事タイトル" />);
  expect(screen.getByRole("banner")).toBeInTheDocument();
});

test("titleの指定", () => {
  render(<ContentHeader title="記事タイトル" />);
  expect(
    screen.getByRole("heading", { name: "記事タイトル" })
  ).toBeInTheDocument();
});

test("descriptionの指定", () => {
  render(<ContentHeader title="記事タイトル" description="概要" />);
  expect(screen.getByText("概要")).toBeInTheDocument();
});
