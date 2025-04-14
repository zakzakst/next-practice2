import { defaultHeaders, host } from "..";
import {
  GetMyProfileParams,
  GetMyProfileResponse,
  GetMyProfileError,
} from "./type";

const path = () => host("/my-profile");

export const getMyProfile = async (
  params: GetMyProfileParams
): Promise<GetMyProfileResponse> => {
  try {
    const query = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>)
    );
    const res = await fetch(`${path()}?${query.toString()}`, {
      method: "GET",
      headers: defaultHeaders,
    });
    if (!res.ok) {
      const errorData: GetMyProfileError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: GetMyProfileResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
