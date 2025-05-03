import {
  GetTestUserResponse,
  GetTestUserError,
  GetTestUserErrorCode,
} from "./type";
import { AppError } from "@/lib/app-error";

export const getTestUser = async (
  code: string
): Promise<GetTestUserResponse> => {
  const query = code ? `?code=${code}` : "";
  const res = await fetch(`/api-test/user${query}`);

  if (!res.ok) {
    const body: GetTestUserError = await res.json();
    throw new AppError<GetTestUserErrorCode>(
      body.message,
      body.code,
      res.status,
      body.details
    );
  }

  const data: GetTestUserResponse = await res.json();
  return data;
};
