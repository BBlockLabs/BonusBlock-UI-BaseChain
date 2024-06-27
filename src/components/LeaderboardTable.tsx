import Avatar from '../assets/avatars/avatar_2.svg';
import {FC, useEffect, useState} from "react";
import PaginationRequest from "../common/bonusblock_api/PaginationRequest.ts";
import LeaderboardPeriod from "../common/bonusblock_api/dto/LeaderboardPeriod.ts";
import {useLeaderBoardWithPagination} from "../hooks/useLeaderBoardWithPagination.ts";
import LeaderboardResponse from "../common/bonusblock_api/LeaderboardResponse.ts";
import { ChevronLeftIcon, ChevronRightIcon, ClockIcon, InfoCircledIcon } from '@radix-ui/react-icons';

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
            <div className="flex justify-between mb-8">
                <h2 className="text-2xl font-medium">Leaderboard</h2>
                <div className="flex items-center space-x-2">
                    <InfoCircledIcon height="16" width="16" className="text-grayscale-white" />
                    <span className="font-medium text-xs">
                        How calculations work?
                    </span>
                </div>
            </div>
            <div className="flex justify-between px-3 py-1.5 mb-3 items-center font-bold">
                <div className="basis-1/12 font-medium text-start">Rank</div>
                <div className="basis-1/6 font-medium text-center">User</div>
                <div className="basis-1/3 font-medium text-center">Total tasks done</div>
                <div className="flex-1 font-medium text-center">Top dApp</div>
                <div className="basis-1/10 font-medium text-end">Community XP</div>
            </div>
            <div className="flex flex-col gap-4">
                {data?.searchResults.map((data, index) => (
                    <div
                        className="flex justify-between px-3 py-1.5 items-center whitespace-nowrap rounded-[20px] border border-softBlue/40"
                        key={index}
                    >
                        <div className="basis-1/12 text-start text-lg font-medium">{data.rank}</div>
                        <div className="basis-1/6 flex items-center justify-center space-x-2">
                            <Avatar className="h-7 w-7"/>
                            <span className="font-medium">{data.walletAddress}</span>
                        </div>
                        <div className="basis-1/3 text-center">{data.totalOnChain}</div>
                        <div className="flex-1 text-center">{data.topDapp}</div>
                        <div className="basis-1/10 text-end">{data.score}</div>
                    </div>
                ))}
            </div>
            <div className="flex flex-col gap-11 mt-11">
                <div className="flex items-center space-x-2.5">
                    <ClockIcon height="16" width="16" className="text-leaderboardIcon" />
                    <span className="font-medium text-[10px]/[14px]">
                        Someone joined 1 minute ago
                    </span>
                </div>
                <div className="flex items-center space-x-2.5">
                    <InfoCircledIcon height="16" width="16" className="text-leaderboardIcon" />
                    <span className="font-medium text-[10px]/[14px]">
                        Leaderboard updates may take up to 10 minutes.
                    </span>
                </div>
            </div>
            <div className="flex justify-between mt-8">
                <div>Showing {(page - 1) * perPage} - {page * perPage} of {data?.totalRows} results</div>
                <div className="flex gap-4">
                    <button onClick={() => prevClick()}>
                        <ChevronLeftIcon height={18} width={18} />
                    </button>
                    <div className="flex gap-3 font-medium">
                        <button>1</button>
                        <button>2</button>
                        <button>3</button>
                        <span>...</span>
                        <button>22</button>
                        <button>23</button>
                        <button>24</button>
                    </div>
                    <button onClick={() => nextClick()}>
                        <ChevronRightIcon height={18} width={18} />
                    </button>
                </div>
                <div className="flex items-center gap-3">
                    <span className="text-xs/[18px] font-medium">Results per page: </span>
                    <select
                        onChange={(e) => setPerPage(Number(e.target.value))}
                        className="text-white bg-transparent text-sm">
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
