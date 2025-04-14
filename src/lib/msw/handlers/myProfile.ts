import { http, HttpResponse, PathParams } from "msw";
import {
  // GetMyProfileParams,
  GetMyProfileResponse,
  GetMyProfileError,
} from "@/api/myProfile";
import {
  GetMyProfileResponseMock,
  GetMyProfileErrorMock,
} from "@/mocks/myProfile";

const url = "http://localhost:3000/api/my-profile";

// NOTE: このHandlerではPathParamsの部分使わなかったけど、他で利用する場面あると思うので覚えておく
export const getMyProfileHandler = http.get<
  PathParams,
  undefined,
  GetMyProfileResponse | GetMyProfileError
>(url, async ({ request }) => {
  // TODO: 理想としてはGetMyProfileParamsを絡めて型指定したい
  const url = new URL(request.url);
  const id = url.searchParams.get("id");
  console.log(`id: ${id}`);
  if (id === "404") {
    return HttpResponse.json(GetMyProfileErrorMock, { status: 404 });
  }
  if (id === "503") {
    return HttpResponse.json(GetMyProfileErrorMock, { status: 503 });
  }
  return HttpResponse.json(GetMyProfileResponseMock);
});
