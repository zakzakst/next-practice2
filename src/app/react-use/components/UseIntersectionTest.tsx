"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useIntersection.md
import { useRef } from "react";
import { useIntersection } from "react-use";

export const UseIntersectionTest = () => {
  const intersectionRef = useRef<HTMLDivElement>(
    null
  ) as React.RefObject<HTMLDivElement>;
  const intersection = useIntersection(intersectionRef, {
    root: null,
    rootMargin: "0px",
    threshold: 1,
  });

  return (
    <div ref={intersectionRef}>
      {intersection && intersection.intersectionRatio < 1
        ? "Obscured"
        : "Fully in view"}
    </div>
  );
};
