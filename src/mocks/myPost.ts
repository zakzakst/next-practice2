import {
  GetMyPostResponse,
  GetMyPostError,
  PostMyPostResponse,
  PostMyPostError,
} from "@/api/myPost/type";

export const GetMyPostResponseMock: GetMyPostResponse = {
  id: 1,
  title: "記事タイトル",
  description: "記事の概要",
  body: "記事の内容",
  imageUrl: "https://picsum.photos/id/237/300/300",
  published: true,
  authorId: 1,
};

export const GetMyPostErrorMock: GetMyPostError = {
  message: "記事の取得に失敗しました",
};

export const PostMyPostResponseMock: PostMyPostResponse = {
  id: 1,
};

export const PostMyPostErrorMock: PostMyPostError = {
  message: "記事の更新に失敗しました",
};
