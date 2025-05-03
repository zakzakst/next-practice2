"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useCopyToClipboard.md
import { useState } from "react";
import { useCopyToClipboard } from "react-use";

export const UseCopyToClipboardTest = () => {
  const [text, setText] = useState("");
  const [state, copyToClipboard] = useCopyToClipboard();

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => copyToClipboard(text)}>copy text</button>
      {state.error ? (
        <p>Unable to copy value: {state.error.message}</p>
      ) : (
        state.value && <p>Copied {state.value}</p>
      )}
    </div>
  );
};
