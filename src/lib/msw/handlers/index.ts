import type { RequestHandler } from "msw";
import { helloHandler } from "./hello";
import { postLikeHandler } from "./like";
import { postLoginHandler } from "./login";
import { getPostHandler } from "./post";
import { getPostsHandler } from "./posts";

export const handlers: RequestHandler[] = [
  helloHandler,
  postLikeHandler,
  postLoginHandler,
  getPostHandler,
  getPostsHandler,
];
