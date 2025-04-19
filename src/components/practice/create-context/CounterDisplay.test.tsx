import { render, screen, fireEvent } from "@testing-library/react";
import { CounterProvider, CounterContext } from "./CounterContext";
import { CounterDisplay } from "./CounterDisplay";

describe("CounterDisplay", () => {
  it("should display initial count and increment on click", () => {
    render(
      <CounterProvider>
        <CounterDisplay />
      </CounterProvider>
    );
    expect(screen.getByText("Count: 0")).toBeInTheDocument();
    fireEvent.click(screen.getByText("+1"));
    expect(screen.getByText("Count: 1")).toBeInTheDocument();
  });

  it("CounterDisplay with mocked context", () => {
    const mockFn = jest.fn();
    render(
      <CounterContext.Provider value={{ count: 42, increment: mockFn }}>
        <CounterDisplay />
      </CounterContext.Provider>
    );
    fireEvent.click(screen.getByText("+1"));
    expect(mockFn).toHaveBeenCalledTimes(1);
  });
});
