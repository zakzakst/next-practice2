// TODO: 下記参考にエラーを返す方法を試してみる
// https://github.com/frontend-testing-book/nextjs/blob/main/src/services/client/MyPosts/__mock__/msw.ts#L12
import type { RequestHandler } from "msw";
import { postLikeHandler } from "./like";
import { postLoginHandler } from "./login";
import { getPostHandler } from "./post";
import { getPostsHandler } from "./posts";
import {
  getMyPostHandler,
  putMyPostHandler,
  deleteMyPostHandler,
} from "./myPost";

export const handlers: RequestHandler[] = [
  postLikeHandler,
  postLoginHandler,
  getPostHandler,
  getPostsHandler,
  getMyPostHandler,
  putMyPostHandler,
  deleteMyPostHandler,
];
