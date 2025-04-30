"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useKeyPress.md
import { useState } from "react";
import { useKeyPressEvent } from "react-use";

export const UseKeyPressEventTest = () => {
  const [count, setCount] = useState(0);

  const increment = () => setCount((count) => ++count);
  const decrement = () => setCount((count) => --count);
  const reset = () => setCount(0);

  useKeyPressEvent("]", increment, increment);
  useKeyPressEvent("[", decrement, decrement);
  useKeyPressEvent("r", reset);

  return (
    <div>
      <p>
        Try pressing <code>[</code>, <code>]</code>, and <code>r</code> to see
        the count incremented and decremented.
      </p>
      <p>Count: {count}</p>
    </div>
  );
};
