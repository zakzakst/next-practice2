import { NextRequest, NextResponse } from "next/server";
import { GetTestUserResponse, GetTestUserError } from "@/api/testUser";

export const GET = (
  request: NextRequest
): NextResponse<GetTestUserResponse | GetTestUserError> => {
  const params = request.nextUrl.searchParams;
  const code = params.get("code");

  if (code === "404") {
    const error: GetTestUserError = {
      code: "NOT_FOUND",
      message: "ユーザーが見つかりません",
      details: { type: "USER" },
    };
    return NextResponse.json(error, { status: 404 });
  }

  if (code === "401") {
    const error: GetTestUserError = {
      code: "UNAUTHORIZED",
      message: "認証が必要です",
    };
    return NextResponse.json(error, { status: 401 });
  }

  const user: GetTestUserResponse = {
    id: "123",
    name: "太郎",
  };
  return NextResponse.json(user);
};
