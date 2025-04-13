import { http, HttpResponse } from "msw";
import { PostLikeResponseMock } from "@/mocks/like";

const url = "http://localhost:3000/api/like";

export const postLikeHandler = http.post(url, async ({ request }) => {
  const data = await request.json();
  console.log("post request", data);
  return HttpResponse.json(PostLikeResponseMock);
});
