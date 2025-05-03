"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useOrientation.md
import { useOrientation } from "react-use";

export const UseOrientationTest = () => {
  const state = useOrientation();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
