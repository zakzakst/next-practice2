import { PostMyPostResponse, PostMyPostError } from "@/api/myPost/type";

export const PostMyPostResponseMock: PostMyPostResponse = {
  id: 1,
};

export const PostMyPostErrorMock: PostMyPostError = {
  message: "記事の更新に失敗しました",
};
