import { http, HttpResponse, PathParams } from "msw";
import {
  // GetMyPostParams,
  GetMyPostResponse,
  GetMyPostError,
  PostMyPostRequest,
  PostMyPostResponse,
  PostMyPostError,
} from "@/api/myPost";
import {
  GetMyPostResponseMock,
  GetMyPostErrorMock,
  PostMyPostResponseMock,
  PostMyPostErrorMock,
} from "@/mocks/myPost";

const url = "http://localhost:3000/api/my-post";

export const getMyPostHandler = http.get<
  PathParams,
  undefined,
  GetMyPostResponse | GetMyPostError
>(url, async ({ request }) => {
  // TODO: 理想としてはGetMyPostParamsを絡めて型指定したい
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  console.log(`id: ${id}`);
  if (id === "404") {
    return HttpResponse.json(GetMyPostErrorMock, { status: 404 });
  }
  if (id === "503") {
    return HttpResponse.json(GetMyPostErrorMock, { status: 503 });
  }
  return HttpResponse.json(GetMyPostResponseMock);
});

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
