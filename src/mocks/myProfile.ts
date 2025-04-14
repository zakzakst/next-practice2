import {
  GetMyProfileResponse,
  GetMyProfileError,
  PutMyProfileResponse,
  PutMyProfileError,
} from "@/api/myProfile";

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

export const PutMyProfileResponseMock: PutMyProfileResponse = {
  id: 1,
  name: "山田太郎",
  imageUrl: "https://picsum.photos/id/237/300/300",
};

export const PutMyProfileErrorMock: PutMyProfileError = {
  message: "プロフィールの更新に失敗しました",
};
