"use client";
// https://www.npmjs.com/package/react-use
// import { UseHoverTest } from "./components/UseHoverTest";
// import { UseIntersectionTest } from "./components/UseIntersectionTest";
// import { UseKeyTest } from "./components/UseKeyTest";
// import { UseKeyPressEventTest } from "./components/UseKeyPressEventTest";
// import { UseMediaDevicesTest } from "./components/UseMediaDevicesTest";
// import { UseMouseTest } from "./components/UseMouseTest";
// import { UseOrientationTest } from "./components/UseOrientationTest";
// import { UseWindowScrollTest } from "./components/UseWindowScrollTest";
// import { UseClickAwayTest } from "./components/UseClickAwayTest";
// import { UseDropAreaTest } from "./components/UseDropAreaTest";
// import { UseVideoTest } from "./components/UseVideoTest";
import { UseCopyToClipboardTest } from "./components/UseCopyToClipboardTest";

// 上手く動かなかった
// import { UseHashTest } from "./components/UseHashTest";
// import { UseMediaTest } from "./components/UseMediaTest";
// import { UseScrollTest } from "./components/UseScrollTest";
// import { UseCookieTest } from "./components/UseCookieTest";

const Page = () => {
  return (
    <div>
      {/*
      <UseHoverTest />
      <UseIntersectionTest />
      <UseKeyTest />
      <UseKeyPressEventTest />
      <UseMediaDevicesTest />
      <UseMouseTest />
      <UseOrientationTest />
      <UseWindowScrollTest />
      <UseClickAwayTest />
      <UseDropAreaTest />
      <UseVideoTest />
      */}
      <UseCopyToClipboardTest />

      {/* ▼▼▼ 上手く動かなかった ▼▼▼ */}
      {/* <UseHashTest /> */}
      {/* <UseMediaTest /> */}
      {/* <UseScrollTest /> */}
      {/* <UseCookieTest /> */}
      {/* ▲▲▲ 上手く動かなかった ▲▲▲ */}
    </div>
  );
};

export default Page;
