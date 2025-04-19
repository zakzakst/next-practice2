"use client";

// TODO: react-useのuseSearchParamもしかしたら便利かもなので調べる
// import { useSearchParam } from "react-use"
import { useSearchParams } from "next/navigation";

export const SearchParamsViewer = () => {
  const searchParams = useSearchParams();
  const name = searchParams.get("name");
  return <div>{name ? `Hello, ${name}` : "No name provided"}</div>;
};
