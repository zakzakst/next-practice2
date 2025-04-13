"use client";

import { useState, useEffect } from "react";

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

  return <div>{test}</div>;
};
