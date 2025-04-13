import { defaultHeaders, host } from "..";
import { GetPostsParams, GetPostsResponse, GetPostsError } from "./type";

const path = () => host("/posts");

export const getPosts = async (
  params: GetPostsParams
): Promise<GetPostsResponse> => {
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
      const errorData: GetPostsError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: GetPostsResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
