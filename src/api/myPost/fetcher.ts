import { defaultHeaders, host } from "..";
import {
  GetMyPostParams,
  GetMyPostResponse,
  GetMyPostError,
  PostMyPostRequest,
  PostMyPostResponse,
  PostMyPostError,
  PutMyPostRequest,
  PutMyPostResponse,
  PutMyPostError,
  DeleteMyPostRequest,
  DeleteMyPostResponse,
  DeleteMyPostError,
} from "./type";
import {
  GetMyPostResponseMock,
  PostMyPostResponseMock,
  PutMyPostResponseMock,
  DeleteMyPostResponseMock,
} from "@/mocks/myPost";

// TODO: パスでIDを渡す方法にする
// https://github.com/frontend-testing-book/nextjs/blob/main/src/services/client/MyPost/index.ts#L4
const path = () => host("/my-post");

export const getMyPost = async (
  params: GetMyPostParams
): Promise<GetMyPostResponse> => {
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_API === "false")
    return GetMyPostResponseMock;
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
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_API === "false")
    return PostMyPostResponseMock;
  try {
    const res = await fetch(path(), {
      method: "POST",
      headers: defaultHeaders,
      body: JSON.stringify(request),
    });
    if (!res.ok) {
      const errorData: PostMyPostError = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: PostMyPostResponse = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};

export const putMyPost = async (
  request: PutMyPostRequest
): Promise<PutMyPostResponse> => {
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_API === "false")
    return PutMyPostResponseMock;
  try {
    const res = await fetch(path(), {
      method: "PUT",
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
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_API === "false")
    return DeleteMyPostResponseMock;
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
