import * as z from "zod";

// GET
export type GetMyProfileParams = {
  id: number;
};

export type GetMyProfileResponse = {
  id: number;
  name: string;
  bio: string;
  twitterAccount: string;
  githubAccount: string;
  imageUrl: string;
  email: string;
  likeCount: number;
};

export type GetMyProfileError = {
  message: string;
};

// PUT
export const PutMyProfileInputSchema = z.object({
  name: z.string().min(1, "1文字以上で入力してください"),
  bio: z.string().min(1, "1文字以上で入力してください"),
  twitterAccount: z.string().optional(),
  githubAccount: z.string().optional(),
  imageUrl: z.string().optional(),
});

export type PutMyProfileInput = z.infer<typeof PutMyProfileInputSchema>;

export type PutMyProfileRequest = {
  id: number;
} & PutMyProfileInput;

export type PutMyProfileResponse = {
  id: number;
  name: string;
  imageUrl: string;
};

export type PutMyProfileError = {
  message: string;
};
