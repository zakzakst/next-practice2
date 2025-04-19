"use client";

import { useCounter } from "./CounterContext";

export const CounterDisplay = () => {
  const { count, increment } = useCounter();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+1</button>
    </div>
  );
};
