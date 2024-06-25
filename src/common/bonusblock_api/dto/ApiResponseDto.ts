export interface ApiResponseDto<T> {
    errors: any[];
    payload: T;
    success: boolean;
    now: string;
}