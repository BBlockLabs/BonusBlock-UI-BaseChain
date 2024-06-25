import LeaderboardRecordDto from "./dto/LeaderboardRecordDto";
import MyLeaderBoardSpotDto from "./dto/MyLeaderBoardSpotDto";

export default class LeaderboardResponse {
    totalRows: number = 0;
    searchResults: Array<LeaderboardRecordDto> = [];
    myLeaderboardSpot: MyLeaderBoardSpotDto | null = null;
}
