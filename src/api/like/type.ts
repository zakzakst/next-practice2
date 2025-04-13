import * as z from "zod";

// NOTE: フォームでユーザーが入力しなくても決定する値がある場合、ベースのリクエストデータからOmitなどして各フォームのバリデーションに利用する想定
export const PostLikeRequestSchema = z.object({
  postId: z.number().positive().int(),
});

export type PostLikeRequest = z.infer<typeof PostLikeRequestSchema>;

export type PostLikeResponse = {
  id: number;
};
