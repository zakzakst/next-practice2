import { PostLoginResponse, PostLoginError } from "@/api/login/type";

export const PostLoginResponseMock: PostLoginResponse = {
  id: 1,
  name: "山田太郎",
  email: "yamada@mail.com",
  imageUrl: "https://picsum.photos/id/237/300/300",
};

export const PostLoginErrorMock: PostLoginError = {
  message: "ログインに失敗しました",
};
