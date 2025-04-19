import { render, screen, fireEvent } from "@testing-library/react";
import { GlobalNav } from "./GlobalNav";

let mockPathname = "/home";
const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  usePathname: () => mockPathname,
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("GlobalNav", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });

  it("should highlight current path on initial render", () => {
    mockPathname = "/home";
    render(<GlobalNav />);
    expect(screen.getByText("Home")).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("About")).not.toHaveAttribute("aria-current");
  });

  it("should update aria-current after navigation", () => {
    mockPathname = "/home";
    const { rerender } = render(<GlobalNav />);
    const aboutButton = screen.getByText("About");
    fireEvent.click(aboutButton);
    expect(pushMock).toHaveBeenCalledWith("/about");

    // パスが変わった想定で再レンダー
    mockPathname = "/about";
    rerender(<GlobalNav />);
    expect(screen.getByText("About")).toHaveAttribute("aria-current", "page");
    expect(screen.getByText("Home")).not.toHaveAttribute("aria-current");
  });
});
