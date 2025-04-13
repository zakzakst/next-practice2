"use client";

import { useState, useEffect } from "react";
import { postLike } from "@/api/like";

const url = "https://jsonplaceholder.typicode.com/todos/1";

export const TestComponent = () => {
  const [test, setTest] = useState<string | null>(null);

  useEffect(() => {
    const fetchTest = async () => {
      try {
        const res = await fetch(url);
        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const json = await res.json();
        setTest(json.message);
      } catch (err) {
        console.error(err);
      }
    };
    fetchTest();
  }, []);

  const handlePostLike = async (postId: number) => {
    try {
      const data = await postLike({ postId });
      console.log(data?.id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <p>{test}</p>
      <button onClick={() => handlePostLike(10)}>Post Like</button>
      <button onClick={() => handlePostLike(404)}>Post Like 404</button>
      <button onClick={() => handlePostLike(503)}>Post Like 503</button>
    </div>
  );
};
