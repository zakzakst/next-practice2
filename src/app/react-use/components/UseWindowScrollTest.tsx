"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useWindowScroll.md
import { useWindowScroll } from "react-use";

export const UseWindowScrollTest = () => {
  const { x, y } = useWindowScroll();

  return (
    <div>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};
