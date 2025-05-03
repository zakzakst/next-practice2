import * as z from "zod";
import { AppError } from "@/lib/app-error";

// NOTE: フォームでユーザーが入力しなくても決定する値がある場合、ベースのリクエストデータからOmitなどして各フォームのバリデーションに利用する想定（でいいのか？自信ない）
export const PostLikeRequestSchema = z.object({
  userId: z.number(),
  postId: z.number().positive().int(),
});

export type PostLikeRequest = z.infer<typeof PostLikeRequestSchema>;

export type PostLikeResponse = {
  id: number;
};

export type PostLikeError = {
  message: string;
};

type PostLikeError2Code = "UNAUTHORIZED_POST_USER";

export type PostLikeError2 = AppError<PostLikeError2Code>;
