"use client";

import { useRouter } from "next/navigation";

export const MyLink = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push("/about");
  };

  return <button onClick={handleClick}>Go to About</button>;
};
