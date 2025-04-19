import { PostLogoutResponse, PostLogoutError } from "@/api/logout/type";

export const PostLogoutResponseMock: PostLogoutResponse = {
  message: "ok",
};

export const PostLogoutErrorMock: PostLogoutError = {
  message: "ログインに失敗しました",
};
