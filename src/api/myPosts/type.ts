export type GetMyPostsParams = {
  page: number;
  authorId: number;
  published?: boolean;
};

type Post = {
  id: number;
  title: string;
  description: string;
  body: string;
  imageUrl: string;
  published: boolean;
  authorId: number;
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

export type GetMyPostsResponse = {
  posts: Post[];
  pagination: Pagination;
  paginationInfo: PaginationInfo;
};

export type GetMyPostsError = {
  message: string;
};
