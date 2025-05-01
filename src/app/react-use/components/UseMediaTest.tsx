"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useMedia.md
import { useMedia } from "react-use";

export const UseMediaTest = () => {
  const isWide = useMedia("(min-width: 480px)");

  return <div>Screen is wide: {isWide ? "Yes" : "No"}</div>;
};
