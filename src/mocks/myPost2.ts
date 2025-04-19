import { GetMyPost2Response, GetMyPost2Error } from "@/api/myPost2";

export const GetMyPost2ResponseMock: GetMyPost2Response = {
  id: 1,
  title: "記事タイトル",
  description: "記事の概要",
  body: "記事の内容",
  imageUrl: "https://picsum.photos/id/237/300/300",
  published: true,
  authorId: 1,
};

export const GetMyPost2ErrorMock: GetMyPost2Error = {
  message: "記事の取得に失敗しました",
};
