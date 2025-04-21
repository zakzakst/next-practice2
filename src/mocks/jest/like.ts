import { HttpError } from "@/lib/error";
import * as Like from "@/api/like/fetcher";
import { PostLikeResponseMock } from "@/mocks/like";

jest.mock("@/api/like/fetcher");

export const PostLikeResolvedMock = () => {
  return jest.spyOn(Like, "postLike").mockResolvedValue(PostLikeResponseMock);
};

export const PostLikeRejectedMock = () => {
  return jest
    .spyOn(Like, "postLike")
    .mockRejectedValue(new HttpError(500).serialize());
};
