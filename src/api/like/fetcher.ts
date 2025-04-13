import { defaultHeaders, host } from "..";
import { PostLikeRequest, PostLikeResponse } from "./type";

export const path = () => host(`/like`);

// TODO: エラーハンドリングの方法調べる
export const postLike = async (
  request: PostLikeRequest
): Promise<PostLikeResponse | undefined> => {
  try {
    const res = await fetch(path(), {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(request),
    });
    const data = await res.json();
    if (!res.ok) {
      // throw new Error(data.error)
      console.error("エラー");
    }
    return data;
  } catch (err) {
    console.error(err);
  }
};
