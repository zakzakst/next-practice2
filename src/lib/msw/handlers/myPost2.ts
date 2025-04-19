import { http, HttpResponse } from "msw";
import { GetMyPost2Response, GetMyPost2Error } from "@/api/myPost2";
import { GetMyPost2ResponseMock, GetMyPost2ErrorMock } from "@/mocks/myPost2";

type GetMyPost2Params = {
  id: string;
};

const url = "http://localhost:3000/api/my-post2/:id";

export const getMyPost2Handler = http.get<
  GetMyPost2Params,
  undefined,
  GetMyPost2Response | GetMyPost2Error
>(url, async ({ params }) => {
  const { id } = params;
  console.log(`id: ${id}`);
  if (id === "404") {
    return HttpResponse.json(GetMyPost2ErrorMock, { status: 404 });
  }
  if (id === "503") {
    return HttpResponse.json(GetMyPost2ErrorMock, { status: 503 });
  }
  return HttpResponse.json(GetMyPost2ResponseMock);
});
