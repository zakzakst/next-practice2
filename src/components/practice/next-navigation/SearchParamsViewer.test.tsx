import { render, screen } from "@testing-library/react";
import { SearchParamsViewer } from "./SearchParamsViewer";

jest.mock("next/navigation", () => ({
  useSearchParams: () => new URLSearchParams("name=John"),
}));

describe("SearchParamsViewer", () => {
  it("displays name from search params", () => {
    render(<SearchParamsViewer />);
    expect(screen.getByText("Hello, John")).toBeInTheDocument();
  });
});
