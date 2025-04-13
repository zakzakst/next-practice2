import { http, HttpResponse, PathParams } from "msw";
import { PostLikeRequest, PostLikeResponse, PostLikeError } from "@/api/like";
import { PostLikeResponseMock, PostLikeErrorMock } from "@/mocks/like";

const url = "http://localhost:3000/api/like";

// NOTE: このHandlerではPathParamsの部分使わなかったけど、他で利用する場面あると思うので覚えておく
export const postLikeHandler = http.post<
  PathParams,
  PostLikeRequest,
  PostLikeResponse | PostLikeError
>(url, async ({ request }) => {
  const data = await request.json();
  console.log(`postId: ${data.postId}`);
  if (data.postId === 404) {
    return HttpResponse.json(PostLikeErrorMock, { status: 404 });
  }
  if (data.postId === 503) {
    return HttpResponse.json(PostLikeErrorMock, { status: 503 });
  }
  return HttpResponse.json(PostLikeResponseMock);
});
