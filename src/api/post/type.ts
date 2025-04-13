import * as z from "zod";

export const GetPostParamsSchema = z.object({
  postId: z.number().positive().int(),
});

export type GetPostParams = z.infer<typeof GetPostParamsSchema>;

export type GetPostResponse = {
  id: number;
  title: string;
  description: string;
  body: string;
  imageUrl: string;
  published: boolean;
  authorId: number;
  likeCount: number;
  liked: boolean;
};

export type GetPostError = {
  message: string;
};
