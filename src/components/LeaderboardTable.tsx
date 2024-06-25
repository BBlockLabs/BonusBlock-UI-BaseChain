import Avatar from '../assets/avatars/avatar_2.svg';
import {FC, useEffect, useState} from "react";
import PaginationRequest from "../common/bonusblock_api/PaginationRequest.ts";
import LeaderboardPeriod from "../common/bonusblock_api/dto/LeaderboardPeriod.ts";
import {useLeaderBoardWithPagination} from "../hooks/useLeaderBoardWithPagination.ts";
import LeaderboardResponse from "../common/bonusblock_api/LeaderboardResponse.ts";

export interface LeaderboardTableProps {
    leaderboardData?: LeaderboardResponse;
}

const LeaderboardTable:FC<LeaderboardTableProps> = (props) => {

    const { leaderboardData } = props;

    const { fetchLeaderBoardWithPagination } = useLeaderBoardWithPagination();

    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(10);
    const [data, setData] = useState(leaderboardData);

    useEffect(() => {
        setData(leaderboardData);
    }, [leaderboardData]);

    const nextClick = async () => {
        try {
            if (!data) {
                return;
            }

            if (data?.totalRows && page * perPage > data.totalRows) {
                return;
            }

            const req:PaginationRequest = {
                page: page + 1,
                perPage: perPage,
                period: LeaderboardPeriod.ALL_TIME,
            }

            setPage(page + 1)

            const newData = await fetchLeaderBoardWithPagination(req);
            setData(newData);
        } catch (e) {
            console.log(e);
        }
    }

    const prevClick = async () => {
        try {
            if (!data) {
                return;
            }

            if (page === 1) {
                return;
            }

            const req:PaginationRequest = {
                page: page - 1,
                perPage: perPage,
                period: LeaderboardPeriod.ALL_TIME,
            }

            setPage(page - 1)

            const newData = await fetchLeaderBoardWithPagination(req);
            setData(newData);
        } catch (e) {
            console.log(e);
        }
    }

    return (
        <div className="flex flex-col text-sm text-white min-h-[400px]">
            <div className="flex justify-between px-6 py-3 items-center font-bold">
                <div className="flex-1 text-center">Rank</div>
                <div className="flex-1 text-center">User</div>
                <div className="flex-1 text-center">Total on-chain</div>
                <div className="flex-1 text-center">Community XP</div>
            </div>
            {data?.searchResults.map((data, index) => (
                <div
                    className="flex justify-between px-6 py-4 items-center whitespace-nowrap my-4 h-10 bg-leaderboard-row-bg rounded-lg"
                    key={index}>
                    <div className="flex-1 text-center">{data.rank}</div>
                    <div className="flex-1 flex items-center justify-center space-x-2">
                        <Avatar className="h-7 w-7"/>
                        <span className="font-bold">{data.walletAddress}</span>
                    </div>
                    <div className="flex-1 text-center">{data.totalOnChain}</div>
                    <div className="flex-1 text-center">{data.score}</div>
                </div>
            ))}

            <div className="flex-grow"></div>

            <div className="flex">
                <div>Showing {(page - 1) * perPage} - {page * perPage} of {data?.totalRows} results</div>
                <div className="flex-grow"></div>
                <button onClick={() => prevClick()}>Previous</button>
                <div className="flex-grow"></div>
                <button onClick={() => nextClick()}>Next</button>
                <div className="flex-grow"></div>
                <div>
                    <select
                        onChange={(e) => setPerPage(Number(e.target.value))}
                        className="text-white bg-quest-bg-color">
                        <option value="10">10</option>
                        <option value="25">25</option>
                        <option value="50">50</option>
                        <option value="100">100</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default LeaderboardTable;
