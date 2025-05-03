"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useSessionStorage.md
import { useSessionStorage } from "react-use";

export const UseSessionStorageTest = () => {
  const [value, setValue] = useSessionStorage("my-key", "foo");

  return (
    <div>
      <div>Value: {value}</div>
      <button onClick={() => setValue("bar")}>bar</button>
      <button onClick={() => setValue("baz")}>baz</button>
    </div>
  );
};
