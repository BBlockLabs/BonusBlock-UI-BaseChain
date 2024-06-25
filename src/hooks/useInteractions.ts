import { useAxios } from "../hooks/useAxios.ts";
import {useEffect, useState} from "react";
import InteractionsDto from "../common/bonusblock_api/dto/InteractionsDto.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { ApiResponseDto } from "@/common/bonusblock_api/dto/ApiResponseDto.ts";


export const useInteractions = () => {
    const {fetchData} = useAxios();
    const [interactions, setInteractions] = useState<InteractionsDto>();

    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');
    const timeZoneOffset: number = new Date().getTimezoneOffset() * -1;


    useEffect(() => {
        const fetchInteractions = async () => {
            try {
                const response:ApiResponseDto<InteractionsDto> = await fetchData({
                    url: '/faculty/interactions',
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "X-Auth-Token": token,
                    },
                    data: JSON.stringify({ timeZoneOffset }),
                });

                if (response.success) {
                    setInteractions(response.payload);
                } else {
                    console.error('Failed to fetch interactions:', response.errors);
                }
            } catch (error) {
                console.error('Error getting interactions:', error);
            }
        };

        fetchInteractions();
    }, []);

    return { interactions };

}