import { defaultHeaders, host } from "..";
import { PostLikeRequest, PostLikeResponse, PostLikeError } from "./type";
import { PostLikeResponseMock } from "@/mocks/like";

const path = () => host("/like");

export const postLike = async (
  request: PostLikeRequest
): Promise<PostLikeResponse> => {
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_API === "false")
    return PostLikeResponseMock;
  try {
    const res = await fetch(path(), {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      // TODO: この辺の処理自信ない。。
      const errorData: PostLikeError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: PostLikeResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
