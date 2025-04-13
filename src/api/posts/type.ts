import * as z from "zod";

export const GetPostsParamsSchema = z.object({
  page: z.number().positive().int(),
  // TODO: OrderByコンポーネントのoptionsと関連付ける
  orderBy: z.enum(["updatedAt", "starCount"]),
});

export type GetPostsParams = z.infer<typeof GetPostsParamsSchema>;

type Post = {
  id: number;
  title: string;
  description: string;
  body: string;
  imageUrl: string;
  published: boolean;
  authorId: number;
  likeCount: number;
  authorName: string;
};

type Pagination = {
  current: number;
  prev: number | null;
  next: number | null;
  items: (number | string)[];
};

type PaginationInfo = {
  start: number;
  end: number;
  hitCount: number;
};

export type GetPostsResponse = {
  posts: Post[];
  pagination: Pagination;
  paginationInfo: PaginationInfo;
};

export type GetPostsError = {
  message: string;
};
