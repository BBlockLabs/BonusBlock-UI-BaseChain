import LeaderboardResponse from "@/common/bonusblock_api/LeaderboardResponse.ts";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/store.ts";
import { useAxios } from "../hooks/useAxios.ts";
import { ApiResponseDto } from "../common/bonusblock_api/dto/ApiResponseDto.ts";


export const useLeaderBoard = () => {
    const { fetchData } = useAxios();

    const [leaderBoard, setLeaderBoard] = useState<LeaderboardResponse>();

    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');

    useEffect(() => {
        const fetchLeaderBoard = async () => {
            try {
                const response:ApiResponseDto<LeaderboardResponse> = await fetchData({
                    url: '/faculty/leaderboard',
                    method: 'POST',
                    headers: {
                        "Content-Type": "application/json",
                        "X-Auth-Token": token,
                    },
                    // TODO: fix this
                    data: {
                        page: 1,
                        perPage: 10,
                        period : "ALL_TIME"
                    },
                });

                if (response.success) {
                    setLeaderBoard(response.payload);
                } else {
                    console.error('Failed to fetch leaderboard:', response.errors);
                }
            } catch (error) {
                console.error('Error getting leaderboard:', error);
            }
        };

        fetchLeaderBoard();
    }, []);

    return { leaderBoard };
}