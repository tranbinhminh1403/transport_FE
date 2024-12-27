export type BaseResponse<T> = {
    code?: number;
    data: T;
    message?: string;
    errors?: Record<string, object>;
    total_record: number;
    current_page: number;
  };