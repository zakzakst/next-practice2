import { http, HttpResponse } from "msw";

const url = "https://jsonplaceholder.typicode.com/todos/1";

export const helloHandler = http.get(url, () => {
  return HttpResponse.json({
    message: "Hello, world!",
  });
});
