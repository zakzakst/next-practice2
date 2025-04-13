import { defaultHeaders, host } from "..";
import { PostMyPostRequest, PostMyPostResponse, PostMyPostError } from "./type";

const path = () => host("/my-post");

export const postMyPost = async (
  request: PostMyPostRequest
): Promise<PostMyPostResponse> => {
  try {
    const res = await fetch(path(), {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      // TODO: この辺の処理自信ない。。
      const errorData: PostMyPostError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: PostMyPostResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
