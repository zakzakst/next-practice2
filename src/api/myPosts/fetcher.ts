import { defaultHeaders, host } from "..";
import { GetMyPostsParams, GetMyPostsResponse, GetMyPostsError } from "./type";
import { GetMyPostsResponseMock } from "@/mocks/myPosts";

const url = host("/my-posts");

export const getMyPosts = async (
  // TODO: paramsでまとめた状態でオプショナルなパラメータにデフォルト値を設定する方法を調べる
  params: GetMyPostsParams
): Promise<GetMyPostsResponse> => {
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_MOCK === "false")
    return GetMyPostsResponseMock;
  try {
    const query = new URLSearchParams(
      Object.entries(params).reduce((acc, [key, value]) => {
        acc[key] = String(value);
        return acc;
      }, {} as Record<string, string>)
    );
    const res = await fetch(`${url}?${query.toString()}`, {
      method: "GET",
      headers: defaultHeaders,
    });
    if (!res.ok) {
      const errorData: GetMyPostsError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: GetMyPostsResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
