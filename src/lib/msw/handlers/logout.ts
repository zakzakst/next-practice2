import { http, HttpResponse, PathParams, DefaultBodyType } from "msw";
import { PostLogoutResponse, PostLogoutError } from "@/api/logout";
import { PostLogoutResponseMock } from "@/mocks/logout";
import { host } from "@/api";

const url = host("/logout");

// NOTE: このHandlerではPathParamsの部分使わなかったけど、他で利用する場面あると思うので覚えておく
export const postLogoutHandler = http.post<
  PathParams,
  DefaultBodyType,
  PostLogoutResponse | PostLogoutError
>(url, () => {
  return HttpResponse.json(PostLogoutResponseMock);
});
