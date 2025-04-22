import { http, HttpResponse, PathParams } from "msw";
import {
  PostLoginRequest,
  PostLoginResponse,
  PostLoginError,
} from "@/api/login";
import { PostLoginResponseMock, PostLoginErrorMock } from "@/mocks/login";
import { host } from "@/api";

const url = host("/login");

// NOTE: このHandlerではPathParamsの部分使わなかったけど、他で利用する場面あると思うので覚えておく
export const postLoginHandler = http.post<
  PathParams,
  PostLoginRequest,
  PostLoginResponse | PostLoginError
>(url, async ({ request }) => {
  const data = await request.json();
  console.log(`password: ${data.password}`);
  if (data.password === "password404") {
    return HttpResponse.json(PostLoginErrorMock, { status: 404 });
  }
  if (data.password === "password503") {
    return HttpResponse.json(PostLoginErrorMock, { status: 503 });
  }
  return HttpResponse.json(PostLoginResponseMock);
});
