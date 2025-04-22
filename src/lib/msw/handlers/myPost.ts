import { http, HttpResponse, PathParams } from "msw";
import {
  // GetMyPostParams,
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
} from "@/api/myPost";
import {
  GetMyPostResponseMock,
  GetMyPostErrorMock,
  PostMyPostResponseMock,
  PostMyPostErrorMock,
  PutMyPostResponseMock,
  PutMyPostErrorMock,
  DeleteMyPostResponseMock,
  DeleteMyPostErrorMock,
} from "@/mocks/myPost";
import { host } from "@/api";

const url = host("/my-post");

export const getMyPostHandler = http.get<
  PathParams,
  undefined,
  GetMyPostResponse | GetMyPostError
>(url, async ({ request }) => {
  // TODO: 理想としてはGetMyPostParamsを絡めて型指定したい
  // get("id")のidをPathParamsのkeyの内の一つみたいな指定する？
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

export const putMyPostHandler = http.put<
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
