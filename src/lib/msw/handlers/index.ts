import { http, HttpResponse, type RequestHandler } from "msw";

const url = "https://jsonplaceholder.typicode.com/todos/1";

const helloHandler = http.get(url, () => {
  return HttpResponse.json({
    message: "Hello, world!",
  });
});

export const handlers: RequestHandler[] = [helloHandler];
