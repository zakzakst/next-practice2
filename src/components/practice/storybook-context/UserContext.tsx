"use client";

import { createContext, useContext } from "react";

export type User = { id: string; name: string };

type UserContextType = {
  user: User | null;
  loading: boolean;
  error: boolean;
  refetch: () => void;
};

export const UserContext = createContext<UserContextType | undefined>(
  undefined
);

export const useUser = () => {
  const ctx = useContext(UserContext);
  if (!ctx) throw new Error("useUser must be used within UserProvider");
  return ctx;
};
