import type { RequestHandler } from "msw";
import { postLikeHandler } from "./like";
import { postLoginHandler } from "./login";
import { getPostHandler } from "./post";
import { getPostsHandler } from "./posts";
import {
  getMyPostHandler,
  postMyPostHandler,
  deleteMyPostHandler,
} from "./myPost";

export const handlers: RequestHandler[] = [
  postLikeHandler,
  postLoginHandler,
  getPostHandler,
  getPostsHandler,
  getMyPostHandler,
  postMyPostHandler,
  deleteMyPostHandler,
];
