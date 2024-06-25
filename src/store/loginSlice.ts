import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {LoginResponse} from "@/common/bonusblock_api/dto/LoginResponseDto.ts";
import {LoginState} from "@/types/LoginState.ts";

const initialState: LoginState = {
    isAuthenticated: false,
    user: null,
    error: null,
};

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setLoginSuccess: (state, action: PayloadAction<LoginResponse>) => {
            state.isAuthenticated = true;
            state.user = action.payload;
            state.error = null;
        },
        setLoginFailure: (state, action: PayloadAction<string>) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = action.payload;
        },
        logout: (state) => {
            state.isAuthenticated = false;
            state.user = null;
            state.error = null;
        },
        // deleteMetadata: (state) => {
        //     if (state.user) {
        //         state.user.account.metadata = {
        //             ...state.user.account.metadata,
        //             ...action.payload,
        //         };
        //     }
        // }
    },
});

export const {
    setLoginSuccess,
    setLoginFailure ,
    logout,
} = loginSlice.actions;

export default loginSlice.reducer;
