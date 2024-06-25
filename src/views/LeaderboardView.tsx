import Layout from "../components/Layout.tsx";
import { FC } from "react";
// import LeaderBoardProgress from "../components/LearderboardProgress.tsx";
// import LeaderBoardStats from "../components/LeaderBoardStats.tsx";
// import TabPane from "../components/TabPane.tsx";
// import useSession from "../hooks/useSession.ts";
// import { useLeaderBoard } from "../hooks/useLeaderBoard.ts";
import Table from "../components/Table.tsx";
import { mockLeaderboard, mockRecentJoins } from "../utils/mockData.ts";
import MobileLeaderboard from "../components/MobileLeaderboard.tsx";
import RecentJoinsTable from "../components/RecentJoinsTable.tsx";
import useMediaQuery from "../hooks/useMediaQuery.tsx";

const LeaderboardView:FC = () => {
    const isMobile = useMediaQuery('(max-width: 640px)');
    // const session = useSession();
    // const { leaderBoard } = useLeaderBoard();
    // const rank = leaderBoard?.myLeaderboardSpot?.position.rank || 0;
    // const score = leaderBoard?.myLeaderboardSpot?.position.score || 0;
    // const completedMissionCount = leaderBoard?.myLeaderboardSpot?.position.completedMissionsCount || 0;
    // const yourTopDApp = 'Welcome Campaign';
    // const newBadgeDialogOpen = leaderBoard?.myLeaderboardSpot?.newBadgePopup || false;
    // const newBadgeDialogOpen = true;

    /* if (!session) {
        return <div>Loading...</div>;
    } */

    return (
        <Layout noFooter>
            <div className="flex flex-col mt-[72px] lg:mt-[80px] mb-[64px] lg:mb-[120px]">
                <div className="flex flex-col justify-evenly items-center mb-[64px]">
                    <h1 className="mb-4 lg:mb-8 text-[48px]/[48px] lg:text-[120px]/[96px] text-white font-black uppercase text-center tracking-[-0.05em] max-w-[900px]">
                        Leaderboard
                    </h1>
                    <p className="text-lg text-center text-white-negative tracking-[-0.01em] max-w-[670px]">
                        Copy description lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </p>
                </div>
                <div className="w-full flex flex-col lg:flex-row gap-4">
                    <div className="flex flex-col flex-1">
                        <h3 className="mb-6 text-white text-2xl/7 font-bold">Leaderboard</h3>
                        {isMobile ? (
                            <MobileLeaderboard data={mockLeaderboard} />
                        ) : (
                            <Table data={mockLeaderboard} />
                        )}
                    </div>
                    <div className="flex flex-col">
                        <h3 className="mb-6 text-white text-2xl/7 font-bold">Recent Joins</h3>
                        <RecentJoinsTable data={mockRecentJoins} />
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default LeaderboardView;
