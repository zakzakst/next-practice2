"use client";
// https://www.npmjs.com/package/react-use
import { UseHoverTest } from "./components/UseHoverTest";
// import { UseHashTest } from "./components/UseHashTest";
import { UseIntersectionTest } from "./components/UseIntersectionTest";
import { UseKeyTest } from "./components/UseKeyTest";
import { UseKeyPressEventTest } from "./components/UseKeyPressEventTest";

const Page = () => {
  return (
    <div>
      <UseHoverTest />
      {/* <UseHashTest /> */}
      <UseIntersectionTest />
      <UseKeyTest />
      <UseKeyPressEventTest />
    </div>
  );
};

export default Page;
