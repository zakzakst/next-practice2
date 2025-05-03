"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useLocalStorage.md
import { useLocalStorage } from "react-use";

export const UseLocalStorageTest = () => {
  const [value, setValue, remove] = useLocalStorage("my-key", "foo");

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue("bar")}>bar</button>
      <button onClick={() => setValue("baz")}>baz</button>
      <button onClick={() => remove()}>Remove</button>
    </div>
  );
};
