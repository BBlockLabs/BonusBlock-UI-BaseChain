import {LoginResponse} from "@/common/bonusblock_api/dto/LoginResponseDto.ts";

export interface LoginState {
    isAuthenticated: boolean;
    user: LoginResponse | null;
    error: string | null;
}
