import { getMyProfile, GetMyProfileResponse } from "@/api/myProfile";
import { useEffect } from "react";
import { useAsyncFn } from "react-use";
import { AsyncState } from "react-use/lib/useAsyncFn";

import {
  LoginUserInfoActionContext,
  LoginUserInfoStateContext,
} from "./LoginUserInfoContext";

type LoginUserInfoProviderProps = {
  children: React.ReactNode;
  defaultState?: AsyncState<GetMyProfileResponse>;
};

export const LoginUserInfoProvider = ({
  children,
  defaultState,
}: LoginUserInfoProviderProps) => {
  const [profile, updateProfile] = useAsyncFn(getMyProfile, [], defaultState);
  useEffect(() => {
    updateProfile({ id: 1 });
  }, [updateProfile]);

  return (
    <LoginUserInfoStateContext.Provider value={profile}>
      <LoginUserInfoActionContext.Provider value={{ updateProfile }}>
        {children}
      </LoginUserInfoActionContext.Provider>
    </LoginUserInfoStateContext.Provider>
  );
};
