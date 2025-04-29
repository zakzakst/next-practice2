"use client";
// https://www.npmjs.com/package/react-use
import { UseHoverTest } from "./components/UseHoverTest";
// import { UseHashTest } from "./components/UseHashTest";
import { UseIntersectionTest } from "./components/UseIntersectionTest";

const Page = () => {
  return (
    <div>
      <UseHoverTest />
      {/* <UseHashTest /> */}
      <UseIntersectionTest />
    </div>
  );
};

export default Page;
