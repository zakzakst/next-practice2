import { GetMyProfileResponse, GetMyProfileError } from "@/api/myProfile";

export const GetMyProfileResponseMock: GetMyProfileResponse = {
  id: 1,
  name: "山田太郎",
  bio: "フロントエンドエンジニア。TypeScript と UIコンポーネントのテストに興味があります。",
  twitterAccount: "taro-yamada",
  githubAccount: "taro-yamada",
  imageUrl: "https://picsum.photos/id/237/300/300",
  email: "yamada@mail.com",
  likeCount: 1,
};

export const GetMyProfileErrorMock: GetMyProfileError = {
  message: "プロフィールの取得に失敗しました",
};
