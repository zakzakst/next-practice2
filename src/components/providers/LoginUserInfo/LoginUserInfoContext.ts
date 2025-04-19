import { GetMyProfileParams, GetMyProfileResponse } from "@/api/myProfile";
import { createContext } from "react";

export type LoginUserInfoState = {
  error?: Error;
  loading?: boolean;
  value?: GetMyProfileResponse;
};

export const defaultState: LoginUserInfoState = {
  error: undefined,
  loading: undefined,
  value: undefined,
};

export const LoginUserInfoStateContext =
  createContext<LoginUserInfoState>(defaultState);

export const LoginUserInfoActionContext = createContext({
  updateProfile: {} as (
    params: GetMyProfileParams
  ) => Promise<GetMyProfileResponse>,
});
