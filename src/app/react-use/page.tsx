"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useIntersection.md
import { UseHoverTest } from "./components/UseHoverTest";
import { UseHashTest } from "./components/UseHashTest";

const Page = () => {
  return (
    <div>
      <UseHoverTest />
      <UseHashTest />
    </div>
  );
};

export default Page;
