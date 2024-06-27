import {FC, useState} from 'react';
import Badges from "./Badges.tsx";
import LeaderboardTable from "./LeaderboardTable.tsx";
import LeaderboardResponse from "../common/bonusblock_api/LeaderboardResponse.ts";

export interface TabPaneProps {
    leaderBoardData?: LeaderboardResponse;
    score: number;
}

const TabPane: FC<TabPaneProps> = (props) => {

    const { leaderBoardData } = props;

    const [activeTab, setActiveTab] = useState<'leaderboard' | 'mints'>('leaderboard');

    return (
        <div className="flex flex-col items-center mx-24">
            <div className="w-full bg-dark-gray rounded-full">
                <div className="flex justify-center rounded-full bg-cardBg p-2">
                    <button
                        className={`flex-1 py-2 rounded-full text-white text-2xl font-medium ${activeTab === 'mints' && 'bg-blue'}`}
                        onClick={() => setActiveTab('mints')}
                    >
                        Mints
                    </button>
                    <button
                        className={`flex-1 py-2 rounded-full text-white text-2xl font-medium ${activeTab === 'leaderboard' && 'bg-blue'}`}
                        onClick={() => setActiveTab('leaderboard')}
                    >
                        Leaderboard
                    </button>
                </div>
            </div>
            <div className="my-8 w-full border-b border-statsBg" />
            <div className="w-full">
                {activeTab === 'mints' && (
                    <Badges score={props.score} />
                )}
                {activeTab === 'leaderboard' && (
                    <LeaderboardTable leaderboardData={leaderBoardData} />
                )}
            </div>
        </div>
    );
};

export default TabPane;
