"use client";

import { createContext, useContext, useEffect, useState } from "react";

export type FetchUser = {
  id: string;
  name: string;
};

type FetchUserContextType = {
  user: FetchUser | null;
  loading: boolean;
};

export const FetchUserContext = createContext<FetchUserContextType | undefined>(
  undefined
);

export const useFetchUser = () => {
  const context = useContext(FetchUserContext);
  if (!context)
    throw new Error("useFetchUser must be used within a FetchUserProvider");
  return context;
};

export const FetchUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [fetchUser, setFetchUser] = useState<FetchUser | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFetchUser = async () => {
      try {
        const res = await fetch("/ap/me");
        const data = await res.json();
        setFetchUser(data);
      } catch (err) {
        console.error("Failed to fetch user:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchFetchUser();
  }, []);

  return (
    <FetchUserContext.Provider value={{ user: fetchUser, loading }}>
      {children}
    </FetchUserContext.Provider>
  );
};
