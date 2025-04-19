import { render, screen } from "@testing-library/react";
import { UserContext, User } from "./UserContext";
import { UserInfo } from "./UserInfo";

const mockUser: User = {
  id: "u123",
  name: "Alice",
};

describe("UserInfo", () => {
  it('shows "Please log in" when user is null', () => {
    render(
      <UserContext.Provider
        value={{ user: null, login: jest.fn(), logout: jest.fn() }}
      >
        <UserInfo />
      </UserContext.Provider>
    );
    expect(screen.getByText("Please log in.")).toBeInTheDocument();
  });

  it("shows user name when user is logged in", () => {
    render(
      <UserContext.Provider
        value={{ user: mockUser, login: jest.fn(), logout: jest.fn() }}
      >
        <UserInfo />
      </UserContext.Provider>
    );
    expect(screen.getByText("Welcome, Alice!")).toBeInTheDocument();
  });
});
