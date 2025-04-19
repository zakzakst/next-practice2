"use client";

import { useFetchUser } from "./FetchUserContext";

export const FetchUserStatus = () => {
  const { user, loading } = useFetchUser();

  if (loading) return <p>Loading...</p>;
  return <p>{user ? `ようこそ、${user.name}さん` : "ログインしてください"}</p>;
};
