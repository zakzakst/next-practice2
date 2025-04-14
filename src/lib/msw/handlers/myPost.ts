import { http, HttpResponse, PathParams } from "msw";
import {
  // GetMyPostParams,
  GetMyPostResponse,
  GetMyPostError,
  PutMyPostRequest,
  PutMyPostResponse,
  PutMyPostError,
  DeleteMyPostRequest,
  DeleteMyPostResponse,
  DeleteMyPostError,
} from "@/api/myPost";
import {
  GetMyPostResponseMock,
  GetMyPostErrorMock,
  PutMyPostResponseMock,
  PutMyPostErrorMock,
  DeleteMyPostResponseMock,
  DeleteMyPostErrorMock,
} from "@/mocks/myPost";

// TODO: PathParamsでのIDを受け取る
// https://mswjs.io/docs/best-practices/typescript/#http-handlers
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

export const putMyPostHandler = http.post<
  PathParams,
  PutMyPostRequest,
  PutMyPostResponse | PutMyPostError
>(url, async ({ request }) => {
  const data = await request.json();
  console.log(`title: ${data.title}`);
  if (data.title === "404") {
    return HttpResponse.json(PutMyPostErrorMock, { status: 404 });
  }
  if (data.title === "503") {
    return HttpResponse.json(PutMyPostErrorMock, { status: 503 });
  }
  return HttpResponse.json(PutMyPostResponseMock);
});

export const deleteMyPostHandler = http.delete<
  PathParams,
  DeleteMyPostRequest,
  DeleteMyPostResponse | DeleteMyPostError
>(url, async ({ request }) => {
  const data = await request.json();
  console.log(`id: ${data.id}`);
  if (data.id === 404) {
    return HttpResponse.json(DeleteMyPostErrorMock, { status: 404 });
  }
  if (data.id === 503) {
    return HttpResponse.json(DeleteMyPostErrorMock, { status: 503 });
  }
  return HttpResponse.json(DeleteMyPostResponseMock);
});
