import { PostLikeResponse, PostLikeError, PostLikeError2 } from "@/api/like";
import { AppError } from "@/lib/app-error";

export const PostLikeResponseMock: PostLikeResponse = {
  id: 1,
};

export const PostLikeErrorMock: PostLikeError = {
  message: "いいねに失敗しました",
};

export const PostLikeErrorMock2: PostLikeError2 = new AppError(
  "いいねに失敗しました",
  "UNAUTHORIZED_POST_USER"
);
