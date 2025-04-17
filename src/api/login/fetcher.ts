import { defaultHeaders, host } from "..";
import { PostLoginRequest, PostLoginResponse, PostLoginError } from "./type";
import { PostLoginResponseMock } from "@/mocks/login";

const path = () => host("/login");

export const postLogin = async (
  request: PostLoginRequest
): Promise<PostLoginResponse> => {
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_API === "false")
    return PostLoginResponseMock;
  try {
    const res = await fetch(path(), {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      // TODO: この辺の処理自信ない。。
      const errorData: PostLoginError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: PostLoginResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
