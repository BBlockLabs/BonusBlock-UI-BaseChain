import { useEffect } from "react";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "../store/store.ts";
import { useAxios } from "../hooks/useAxios.ts";
import {ApiResponseDto} from "@/common/bonusblock_api/dto/ApiResponseDto.ts";
import {LoginResponse} from "@/common/bonusblock_api/dto/LoginResponseDto.ts";
import {setLoginFailure, setLoginSuccess} from "../store/loginSlice.ts";

export const useGetStatus = () => {

    const { fetchData } = useAxios();
    const dispatch = useDispatch();
    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');

    useEffect(() => {
        const fetchStatus = async () => {
            try {
                const response:ApiResponseDto<LoginResponse> = await fetchData({
                    url: `/faculty/get-status`,
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "X-Auth-Token": token,
                    },
                });

                if (response.success) {
                    dispatch(setLoginSuccess(response.payload));
                } else {
                    dispatch(setLoginFailure("Failed to get status"));
                }
            } catch (error: any) {
                throw error;
            }
        }

        fetchStatus();
    }, []);

    return {};
}