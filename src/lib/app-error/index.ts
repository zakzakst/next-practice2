export type AppErrorCode =
  | "NOT_FOUND"
  | "UNAUTHORIZED"
  | "VALIDATION_ERROR"
  | "UNKNOWN";

export class AppError<TCode extends string = AppErrorCode> extends Error {
  code: TCode;
  status?: number;
  details?: unknown;

  constructor(
    message: string,
    code: TCode,
    status?: number,
    details?: unknown
  ) {
    super();
    super(message);
    // this.name = "AppError";
    this.code = code;
    this.status = status;
    this.details = details;
  }
}

// NOTE: こっちのargsの書き方も試してみる
// constructor(args: { code: TCode; message: string; details?: unknown }) {
//   super(args.message);
//   this.code = args.code;
//   this.details = args.details;
//   this.name = 'AppError';
// }
