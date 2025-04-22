import { http, HttpResponse, PathParams } from "msw";
import {
  // GetPostParams,
  GetPostResponse,
  GetPostError,
} from "@/api/post";
import { GetPostResponseMock, GetPostErrorMock } from "@/mocks/post";
import { host } from "@/api";

const url = host("/post");

export const getPostHandler = http.get<
  PathParams,
  undefined,
  GetPostResponse | GetPostError
>(url, async ({ request }) => {
  // TODO: 理想としてはGetPostParamsを絡めて型指定したい
  const url = new URL(request.url);
  const postId = url.searchParams.get("postId");
  console.log(`postId: ${postId}`);
  if (postId === "404") {
    return HttpResponse.json(GetPostErrorMock, { status: 404 });
  }
  if (postId === "503") {
    return HttpResponse.json(GetPostErrorMock, { status: 503 });
  }
  return HttpResponse.json(GetPostResponseMock);
});
