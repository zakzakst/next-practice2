import { http, HttpResponse, PathParams } from "msw";
import { GetTestUserResponse, GetTestUserError } from "@/api/testUser";
import { host } from "@/api";

const url = host("/api-test/user");

export const getTestUserHandler = http.get<
  PathParams,
  undefined,
  GetTestUserResponse | GetTestUserError
>(url, () => {
  // return HttpResponse.json({
  //   id: "123",
  //   name: "太郎",
  // })
  const error: GetTestUserError = {
    code: "NOT_FOUND",
    message: "ユーザーが見つかりません",
    details: { type: "USER" },
  };
  return HttpResponse.json(error, { status: 401 });
});
