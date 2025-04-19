import { render, screen, waitFor } from "@testing-library/react";
import { FetchUserProvider, FetchUser } from "./FetchUserContext";
import { FetchUserStatus } from "./FetchUserStatus";

describe("FetchUserStatus", () => {
  beforeEach(() => {
    global.fetch = jest.fn();
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it("shows loading then user greeting when fetch succeeds", async () => {
    // モックのレスポンス
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async (): Promise<FetchUser | null> => ({
        id: "ui",
        name: "Alice",
      }),
    });
    render(
      <FetchUserProvider>
        <FetchUserStatus />
      </FetchUserProvider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("ようこそ、Aliceさん")).toBeInTheDocument();
    });
  });

  it("shows fallback text when user is null", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      json: async (): Promise<FetchUser | null> => null,
    });
    render(
      <FetchUserProvider>
        <FetchUserStatus />
      </FetchUserProvider>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
    await waitFor(() => {
      expect(screen.getByText("ログインしてください")).toBeInTheDocument();
    });
  });
});
