import LeaderboardRecordDto from "./LeaderboardRecordDto.ts";

export default class MyLeaderBoardSpotDto {
    position: LeaderboardRecordDto = new LeaderboardRecordDto();
    badgeClaimed: boolean = false;
    newBadgePopup: boolean = false;
}
