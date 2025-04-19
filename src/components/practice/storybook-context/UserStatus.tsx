"use client";

import { useUser } from "./UserContext";

export const UserStatus = () => {
  const { user, loading } = useUser();

  if (loading) return <p>Loading...</p>;
  return <p>{user ? `ようこそ、${user.name}さん` : "ログインしてください"}</p>;
};
