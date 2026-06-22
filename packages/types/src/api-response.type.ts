export type ApiError = {
  code: string;
  message: string;
  details?: Record<string, unknown>;
};

export type ApiMeta = {
  total?: number;
  page?: number;
  perPage?: number;
  totalPages?: number;
};

export type ApiResponse<T> = {
  data: T | null;
  error: ApiError | null;
  meta?: ApiMeta;
};

export type PaginatedResponse<T> = ApiResponse<T[]> & {
  meta: ApiMeta;
};

// Standard error codes
export const ERROR_CODES = {
  UNAUTHORIZED: "UNAUTHORIZED",
  FORBIDDEN: "FORBIDDEN",
  NOT_FOUND: "NOT_FOUND",
  VALIDATION_ERROR: "VALIDATION_ERROR",
  INTERNAL_ERROR: "INTERNAL_ERROR",
  RATE_LIMITED: "RATE_LIMITED",
  FILE_TOO_LARGE: "FILE_TOO_LARGE",
  INVALID_FILE_TYPE: "INVALID_FILE_TYPE",
} as const;

export type ErrorCode = (typeof ERROR_CODES)[keyof typeof ERROR_CODES];
