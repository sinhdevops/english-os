import type { ErrorCode } from "@english-os/types";

export class AppError extends Error {
  constructor(
    public readonly code: ErrorCode,
    message: string,
    public readonly statusCode: number = 400
  ) {
    super(message);
    this.name = "AppError";
  }

  static notFound(resource: string) {
    return new AppError("NOT_FOUND", `${resource} not found`, 404);
  }

  static unauthorized(message = "Not authenticated") {
    return new AppError("UNAUTHORIZED", message, 401);
  }

  static forbidden(message = "Access denied") {
    return new AppError("FORBIDDEN", message, 403);
  }

  static validation(message: string) {
    return new AppError("VALIDATION_ERROR", message, 422);
  }
}
