import {useAxios} from "./useAxios.ts";
import {useState} from "react";
import {useSelector} from "react-redux";
import {RootState} from "../store/store.ts";
import PaginationRequest from "../common/bonusblock_api/PaginationRequest.ts";

export const useLeaderBoardWithPagination = () => {
    const { fetchData, loading } = useAxios();
    const [success, setSuccess] = useState<boolean>(false);

    const token = useSelector((state: RootState) => state.login.user?.session.token || 'invalid');

    const fetchLeaderBoardWithPagination = async (paginationReq: PaginationRequest) => {
        try {
            const response = await fetchData({
                url: `/faculty/leaderboard`,
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "X-Auth-Token": token,
                },
                data: paginationReq,
            });

            if (response.success) {
                setSuccess(true);
                return response.payload;
            } else {
                setSuccess(false);
                console.error('Failed to fetch leaderboard:', response.errors);
            }
        } catch (error) {
            setSuccess(false);
            console.error('Error getting leaderboard:', error);
        }
    };

    return { fetchLeaderBoardWithPagination, loading, success };
}