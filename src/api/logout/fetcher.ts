import { defaultHeaders, host } from "..";
import { PostLogoutResponseMock } from "@/mocks/logout";
import { PostLogoutResponse, PostLogoutError } from "./type";

const path = () => host("/logout");

export const postLogout = async (): Promise<PostLogoutResponse> => {
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_API === "false")
    return PostLogoutResponseMock;
  try {
    const res = await fetch(path(), {
      method: "POST",
      headers: defaultHeaders,
    });
    if (!res.ok) {
      // TODO: この辺の処理自信ない。。
      const errorData: PostLogoutError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: PostLogoutResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
