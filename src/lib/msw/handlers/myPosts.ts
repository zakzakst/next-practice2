import { http, HttpResponse, PathParams } from "msw";
import {
  // GetMyPostsParams,
  GetMyPostsResponse,
  GetMyPostsError,
} from "@/api/myPosts";
import { GetMyPostsResponseMock, GetMyPostsErrorMock } from "@/mocks/myPosts";

const url = "http://localhost:3000/api/my-posts";

// NOTE: このHandlerではPathParamsの部分使わなかったけど、他で利用する場面あると思うので覚えておく
export const getMyPostsHandler = http.get<
  PathParams,
  undefined,
  GetMyPostsResponse | GetMyPostsError
>(url, async ({ request }) => {
  // TODO: 理想としてはGetMyPostsParamsを絡めて型指定したい
  const url = new URL(request.url);
  const page = url.searchParams.get("page");
  console.log(`page: ${page}`);
  if (page === "404") {
    return HttpResponse.json(GetMyPostsErrorMock, { status: 404 });
  }
  if (page === "503") {
    return HttpResponse.json(GetMyPostsErrorMock, { status: 503 });
  }
  return HttpResponse.json(GetMyPostsResponseMock);
});
