import type { RequestHandler } from "msw";
import { helloHandler } from "./hello";
import { postLikeHandler } from "./like";

export const handlers: RequestHandler[] = [helloHandler, postLikeHandler];
