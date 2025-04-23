"use client";

import { useRouter, useSearchParams } from "next/navigation";

export const Test = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const movePage = () => {
    const currentParams = Object.fromEntries(searchParams.entries());

    const params = new URLSearchParams({
      ...currentParams,
      page: "2",
      sort: "asc",
    });
    router.push(`/test?${params.toString()}`);
  };
  return <button onClick={movePage}>test</button>;
};
