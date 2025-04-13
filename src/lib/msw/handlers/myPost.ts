import { http, HttpResponse, PathParams } from "msw";
import {
  PostMyPostRequest,
  PostMyPostResponse,
  PostMyPostError,
} from "@/api/myPost";
import { PostMyPostResponseMock, PostMyPostErrorMock } from "@/mocks/myPost";

const url = "http://localhost:3000/api/my-post";

// NOTE: このHandlerではPathParamsの部分使わなかったけど、他で利用する場面あると思うので覚えておく
export const postMyPostHandler = http.post<
  PathParams,
  PostMyPostRequest,
  PostMyPostResponse | PostMyPostError
>(url, async ({ request }) => {
  const data = await request.json();
  console.log(`title: ${data.title}`);
  if (data.title === "404") {
    return HttpResponse.json(PostMyPostErrorMock, { status: 404 });
  }
  if (data.title === "503") {
    return HttpResponse.json(PostMyPostErrorMock, { status: 503 });
  }
  return HttpResponse.json(PostMyPostResponseMock);
});
