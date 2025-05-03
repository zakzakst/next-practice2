"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useClickAway.md
import { useClickAway } from "react-use";
import { useRef } from "react";

export const UseClickAwayTest = () => {
  const ref = useRef<HTMLDivElement>(null);
  useClickAway(ref, () => {
    console.log("OUTSIDE CLICKED");
  });

  return (
    <div
      ref={ref}
      style={{
        width: 200,
        height: 200,
        background: "red",
      }}
    />
  );
};
