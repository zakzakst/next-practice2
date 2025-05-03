"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useScroll.md
import { useScroll } from "react-use";
import { useRef } from "react";

// NOTE: 上手く動かない
export const UseScrollTest = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const { x, y } = useScroll(scrollRef as React.RefObject<HTMLElement>);

  return (
    <div ref={scrollRef}>
      <div>x: {x}</div>
      <div>y: {y}</div>
    </div>
  );
};
