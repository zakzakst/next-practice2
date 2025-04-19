import { ReactNode } from "react";
import { UserContext } from "./UserContext";
import type { User } from "./UserContext";

type Props = {
  children: ReactNode;
  user?: User | null;
  loading?: boolean;
  error?: boolean;
};

export const UserProviderMock = ({
  children,
  user = null,
  loading = false,
  error = false,
}: Props) => {
  return (
    <UserContext.Provider
      value={{
        user,
        loading,
        error,
        refetch: () => {}, // Storybook では不要
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
