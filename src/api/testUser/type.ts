export type GetTestUserResponse = {
  id: string;
  name: string;
};

export type GetTestUserErrorCode = "NOT_FOUND" | "UNAUTHORIZED";

export type GetTestUserErrorDetail = {
  type: "USER";
};

export type GetTestUserError = {
  code: GetTestUserErrorCode;
  message: string;
  details?: GetTestUserErrorDetail;
};
