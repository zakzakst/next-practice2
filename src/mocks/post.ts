import { GetPostResponse, GetPostError } from "@/api/post";

export const GetPostResponseMock: GetPostResponse = {
  id: 1,
  title: "記事タイトル",
  description: "記事の概要",
  body: "記事の内容",
  imageUrl: "https://picsum.photos/id/237/300/300",
  published: true,
  authorId: 1,
  likeCount: 1,
  liked: true,
};

export const GetPostErrorMock: GetPostError = {
  message: "記事の取得に失敗しました",
};
