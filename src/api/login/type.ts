import * as z from "zod";

export const PostLoginRequestSchema = z.object({
  email: z.string().email("不正なメールアドレス形式です"),
  password: z.string().min(8, "8文字以上で入力してください"),
});

export type PostLoginRequest = z.infer<typeof PostLoginRequestSchema>;

export type PostLoginResponse = {
  id: number;
  name: string;
  email: string;
  imageUrl: string;
};

export type PostLoginError = {
  message: string;
};
