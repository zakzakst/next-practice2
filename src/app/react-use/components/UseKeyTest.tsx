"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useKey.md
import { useState } from "react";
import { useKey } from "react-use";

export const UseKeyTest = () => {
  const [count, set] = useState(0);
  const increment = () => set((count) => ++count);
  useKey("ArrowUp", increment);

  return <div>Press arrow up: {count}</div>;
};
