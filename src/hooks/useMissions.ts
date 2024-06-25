import { useAxios } from "../hooks/useAxios.ts";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { useEffect, useState } from "react";
import { Mission } from "../types/Mission.ts";
import { ApiResponseDto } from "@/common/bonusblock_api/dto/ApiResponseDto.ts";

export const useMissions = () => {
    const { fetchData } = useAxios();
    const [missions, setMissions] = useState<Mission[]>([]);

    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');

    useEffect(() => {
        const fetchMissions = async () => {
            try {
                const response:ApiResponseDto<Mission[]> = await fetchData({
                    url: '/faculty/missions',
                    method: 'GET',
                    headers: {
                        "Content-Type": "application/json",
                        "X-Auth-Token": token,
                    },
                });

                if (response.success) {
                    setMissions(response.payload);
                } else {
                    console.error('Failed to fetch missions:', response.errors);
                }
            } catch (error) {
                console.error('Error getting missions:', error);
            }
        };

        fetchMissions();
    }, []);

    return { missions };
}