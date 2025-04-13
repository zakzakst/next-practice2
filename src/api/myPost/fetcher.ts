import { defaultHeaders, host } from "..";
import {
  GetMyPostParams,
  GetMyPostResponse,
  GetMyPostError,
  PostMyPostRequest,
  PostMyPostResponse,
  PostMyPostError,
} from "./type";

const path = () => host("/my-post");

export const getMyPost = async (
  params: GetMyPostParams
): Promise<GetMyPostResponse> => {
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
      const errorData: GetMyPostError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: GetMyPostResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

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
