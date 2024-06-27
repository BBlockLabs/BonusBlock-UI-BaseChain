import Layout from "../components/Layout.tsx";
import { FC } from "react";
// import LeaderBoardProgress from "../components/LearderboardProgress.tsx";
// import LeaderBoardStats from "../components/LeaderBoardStats.tsx";
// import TabPane from "../components/TabPane.tsx";
// import useSession from "../hooks/useSession.ts";
// import { useLeaderBoard } from "../hooks/useLeaderBoard.ts";
import LeaderBoardStats from "@/components/LeaderBoardStats.tsx";
import LeaderBoardProgress from "@/components/LearderboardProgress.tsx";
import TabPane from "@/components/TabPane.tsx";
import { LeaderboardMockData } from "@/common/bonusblock_api/LeaderboardResponse.ts";

const LeaderboardView:FC = () => {
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
        <Layout footerBgColor="bg-cardBg">
            <div className="flex flex-col mt-20 mb-[64px]">
                <div className="w-full">
                    <div className="flex justify-center gap-6">
                        <LeaderBoardStats
                            rank={1}
                            xpNumber={10}
                            completedMissionCount={5}
                            yourTopDApp="Welcome Campaign"
                            newBadgeDialogOpen={true}
                        />
                        <LeaderBoardProgress />
                    </div>
                </div>
                <div className="flex flex-col mt-[80px]">
                    <TabPane score={1} leaderBoardData={LeaderboardMockData} />
                </div>
            </div>
        </Layout>
    )
}

export default LeaderboardView;
