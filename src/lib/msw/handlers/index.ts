import type { RequestHandler } from "msw";
import { helloHandler } from "./hello";
import { postLikeHandler } from "./like";
import { postLoginHandler } from "./login";
import { getPostHandler } from "./post";

export const handlers: RequestHandler[] = [
  helloHandler,
  postLikeHandler,
  postLoginHandler,
  getPostHandler,
];
