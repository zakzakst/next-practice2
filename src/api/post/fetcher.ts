import { defaultHeaders, host } from "..";
import { GetPostParams, GetPostResponse, GetPostError } from "./type";

const path = () => host("/post");

export const getPost = async (
  params: GetPostParams
): Promise<GetPostResponse> => {
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
      const errorData: GetPostError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: GetPostResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
