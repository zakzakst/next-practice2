import { http, HttpResponse, PathParams } from "msw";
import {
  // GetPostsParams,
  GetPostsResponse,
  GetPostsError,
} from "@/api/posts";
import { GetPostsResponseMock, GetPostsErrorMock } from "@/mocks/posts";

const url = "http://localhost:3000/api/posts";

// NOTE: このHandlerではPathParamsの部分使わなかったけど、他で利用する場面あると思うので覚えておく
export const getPostsHandler = http.get<
  PathParams,
  undefined,
  GetPostsResponse | GetPostsError
>(url, async ({ request }) => {
  // TODO: 理想としてはGetPostsParamsを絡めて型指定したい
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  console.log(`page: ${page}`);
  if (page === "404") {
    return HttpResponse.json(GetPostsErrorMock, { status: 404 });
  }
  if (page === "503") {
    return HttpResponse.json(GetPostsErrorMock, { status: 503 });
  }
  return HttpResponse.json(GetPostsResponseMock);
});
