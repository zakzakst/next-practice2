"use client";
// https://github.com/streamich/react-use/blob/HEAD/docs/useMediaDevices.md
import { useMediaDevices } from "react-use";

export const UseMediaDevicesTest = () => {
  const state = useMediaDevices();

  return <pre>{JSON.stringify(state, null, 2)}</pre>;
};
