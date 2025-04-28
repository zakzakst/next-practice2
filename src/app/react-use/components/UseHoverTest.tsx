"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useHover.md
import { useHover } from "react-use";

export const UseHoverTest = () => {
  const element = (hovered: boolean) => (
    <div>Hover me! {hovered && "Thanks!"}</div>
  );
  const [hoverEl, hovered] = useHover(element);

  return (
    <div>
      {hoverEl}
      <div>{hovered ? "HOVERED" : ""}</div>
    </div>
  );
};
