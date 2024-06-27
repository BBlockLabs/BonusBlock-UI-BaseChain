import LeaderboardRecordDto from "./dto/LeaderboardRecordDto";
import MyLeaderBoardSpotDto from "./dto/MyLeaderBoardSpotDto";

export default class LeaderboardResponse {
    totalRows: number = 0;
    searchResults: Array<LeaderboardRecordDto> = [];
    myLeaderboardSpot: MyLeaderBoardSpotDto | null = null;
}

export const LeaderboardMockData: LeaderboardResponse = {
    totalRows: 100,
    searchResults: [
        {
            rank: 1,
            score: 1000,
            completedMissionsCount: 10,
            nicknameType: 'Staker',
            walletAddress: '0x1234567890',
            topDapp: 'Welcome Campaign',
            totalOnChain: 100,
        },
        {
            rank: 2,
            score: 900,
            completedMissionsCount: 9,
            nicknameType: 'Liquidity Provider',
            walletAddress: '0x1234567890',
            topDapp: 'Welcome Campaign',
            totalOnChain: 100,
        },
        {
            rank: 3,
            score: 800,
            completedMissionsCount: 8,
            nicknameType: 'Hodler',
            walletAddress: '0x1234567890',
            topDapp: 'Welcome Campaign',
            totalOnChain: 100,
        },
        {
            rank: 4,
            score: 700,
            completedMissionsCount: 7,
            nicknameType: 'Yield Farmer',
            walletAddress: '0x1234567890',
            topDapp: 'Welcome Campaign',
            totalOnChain: 100,
        },
        {
            rank: 5,
            score: 600,
            completedMissionsCount: 6,
            nicknameType: 'Smol Trader',
            walletAddress: '0x1234567890',
            topDapp: 'Welcome Campaign',
            totalOnChain: 100,
        },
        {
            rank: 6,
            score: 500,
            completedMissionsCount: 5,
            nicknameType: 'Real Trader',
            walletAddress: '0x1234567890',
            topDapp: 'Welcome Campaign',
            totalOnChain: 100,
        },
        {
            rank: 7,
            score: 400,
            completedMissionsCount: 4,
            nicknameType: 'Based Trader',
            walletAddress: '0x1234567890',
            topDapp: 'Welcome Campaign',
            totalOnChain: 100,
        },
    ],
    myLeaderboardSpot: {
        position: {
            rank: 1,
            score: 1000,
            completedMissionsCount: 10,
            nicknameType: 'Staker',
            walletAddress: '0x1234567890',
            topDapp: 'Welcome Campaign',
            totalOnChain: 100,
        },
        newBadgePopup: false,
        badgeClaimed: false,
    }
};
