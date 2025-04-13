import * as z from "zod";

// GET
export type GetMyPostParams = {
  id: number;
  authorId: number;
};

export type GetMyPostResponse = {
  id: number;
  title: string;
  description: string;
  body: string;
  imageUrl: string;
  published: boolean;
  authorId: number;
};

export type GetMyPostError = {
  message: string;
};

// POST
export const PostMyPostInputSchema = z.object({
  title: z.string().min(1, "1文字以上で入力してください"),
  description: z.string().nullable(),
  body: z.string().nullable(),
  published: z.boolean(),
  imageUrl: z
    .string({ required_error: "イメージを選択してください" })
    .nullable(),
});

export type PostMyPostInput = z.infer<typeof PostMyPostInputSchema>;

export type PostMyPostRequest = PostMyPostInput;

export type PostMyPostResponse = {
  id: number;
};

export type PostMyPostError = {
  message: string;
};
