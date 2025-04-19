import { render, screen, fireEvent } from "@testing-library/react";
import { MyLink } from "./MyLink";

const pushMock = jest.fn();

jest.mock("next/navigation", () => ({
  useRouter: () => ({
    push: pushMock,
  }),
}));

describe("MyLink", () => {
  beforeEach(() => {
    pushMock.mockClear();
  });
  it("should navigate to /about when clicked", () => {
    render(<MyLink />);

    const button = screen.getByText("Go to About");
    fireEvent.click(button);

    expect(pushMock).toHaveBeenCalledWith("/about");
  });
});
