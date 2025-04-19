"use client";

import { createContext, useContext, useState } from "react";

type CounterContextType = {
  count: number;
  increment: () => void;
};

export const CounterContext = createContext<CounterContextType | undefined>(
  undefined
);

export const useCounter = () => {
  const ctx = useContext(CounterContext);
  if (!ctx) throw new Error("useCounter must be used within a CounterProvider");
  return ctx;
};

export const CounterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [count, setCount] = useState(0);
  const increment = () => setCount((prev) => prev + 1);
  return (
    <CounterContext.Provider value={{ count, increment }}>
      {children}
    </CounterContext.Provider>
  );
};
