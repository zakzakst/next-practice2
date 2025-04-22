import { defaultHeaders, host } from "..";
import { GetMyPost2Response, GetMyPost2Error } from "./type";
import { GetMyPost2ResponseMock } from "@/mocks/myPost2";

const url = (id: number) => host(`/my-post2/${id}`);

export const getMyPost2 = async (id: number): Promise<GetMyPost2Response> => {
  if (process.env.NEXT_PUBLIC_FEATURE_ABLE_MOCK === "false")
    return GetMyPost2ResponseMock;
  try {
    const res = await fetch(url(id), {
      method: "GET",
      headers: defaultHeaders,
    });
    if (!res.ok) {
      const errorData: GetMyPost2Error = await res.json();
      throw new Error(errorData.message || "エラーが発生しました");
    }
    const data: GetMyPost2Response = await res.json();
    return data;
  } catch (err) {
    throw err;
  }
};
