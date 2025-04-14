import { defaultHeaders, host } from "..";
import {
  GetMyPostParams,
  GetMyPostResponse,
  GetMyPostError,
  PutMyPostRequest,
  PutMyPostResponse,
  PutMyPostError,
  DeleteMyPostRequest,
  DeleteMyPostResponse,
  DeleteMyPostError,
} from "./type";

// TODO: パスでIDを渡す方法にする
// https://github.com/frontend-testing-book/nextjs/blob/main/src/services/client/MyPost/index.ts#L4
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

export const putMyPost = async (
  request: PutMyPostRequest
): Promise<PutMyPostResponse> => {
  try {
    const res = await fetch(path(), {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      const errorData: PutMyPostError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: PutMyPostResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const deleteMyPost = async (
  request: DeleteMyPostRequest
): Promise<DeleteMyPostResponse> => {
  try {
    const res = await fetch(path(), {
      method: "DELETE",
      headers: defaultHeaders,
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      const errorData: DeleteMyPostError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: DeleteMyPostResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
