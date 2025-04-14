import {
  GetMyPostResponse,
  GetMyPostError,
  PutMyPostResponse,
  PutMyPostError,
  DeleteMyPostResponse,
  DeleteMyPostError,
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

export const PutMyPostResponseMock: PutMyPostResponse = {
  id: 1,
};

export const PutMyPostErrorMock: PutMyPostError = {
  message: "記事の更新に失敗しました",
};

export const DeleteMyPostResponseMock: DeleteMyPostResponse = {
  id: 1,
};

export const DeleteMyPostErrorMock: DeleteMyPostError = {
  message: "記事の削除に失敗しました",
};
