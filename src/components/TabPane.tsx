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

    const [activeTab, setActiveTab] = useState('leaderboard');

    return (
        <div className="flex flex-col items-center mx-24">
            <div className="w-full bg-dark-gray rounded-full">
                <div className="flex justify-center rounded-full bg-dark-gray p-2">
                    <button
                        className={`flex-1 py-2 rounded-full ${activeTab === 'badges' ? 'bg-orange-500 text-white' : 'text-white'}`}
                        onClick={() => setActiveTab('badges')}
                    >
                        Your Badges
                    </button>
                    <button
                        className={`flex-1 py-2 rounded-full ${activeTab === 'leaderboard' ? 'bg-orange-500 text-white' : 'text-white'}`}
                        onClick={() => setActiveTab('leaderboard')}
                    >
                        Leaderboard
                    </button>
                </div>
            </div>
            <div className="p-4 rounded-b-lg w-full">
                {activeTab === 'badges' && (
                    <div className="flex justify-around">
                        <Badges score={props.score}
                        />
                    </div>
                )}
                {activeTab === 'leaderboard' && (
                    <div>
                        <LeaderboardTable leaderboardData={leaderBoardData}
                        />
                    </div>
                )}
            </div>
        </div>
    );
};

export default TabPane;
