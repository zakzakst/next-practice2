"use client";
// https://www.npmjs.com/package/react-use
import { UseHoverTest } from "./components/UseHoverTest";
// import { UseHashTest } from "./components/UseHashTest";
import { UseIntersectionTest } from "./components/UseIntersectionTest";
import { UseKeyTest } from "./components/UseKeyTest";
import { UseKeyPressEventTest } from "./components/UseKeyPressEventTest";
// import { UseMediaTest } from "./components/UseMediaTest";
import { UseMediaDevicesTest } from "./components/UseMediaDevicesTest";
import { UseMouseTest } from "./components/UseMouseTest";
import { UseOrientationTest } from "./components/UseOrientationTest";
// import { UseScrollTest } from "./components/UseScrollTest";
import { UseWindowScrollTest } from "./components/UseWindowScrollTest";

const Page = () => {
  return (
    <div>
      <UseHoverTest />
      {/* <UseHashTest /> */}
      <UseIntersectionTest />
      <UseKeyTest />
      <UseKeyPressEventTest />
      {/* <UseMediaTest /> */}
      <UseMediaDevicesTest />
      <UseMouseTest />
      <UseOrientationTest />
      {/* <UseScrollTest /> */}
      <UseWindowScrollTest />
    </div>
  );
};

export default Page;
