"use client";

import { useUser } from "./UserContext";

export const UserInfo = () => {
  const { user } = useUser();
  return (
    <div>{user ? <p>Welcome, {user.name}!</p> : <p>Please log in.</p>}</div>
  );
};
