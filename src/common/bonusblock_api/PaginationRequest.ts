import LeaderboardPeriod from "./dto/LeaderboardPeriod";

export default class PaginationRequest {
  page: number;
  perPage: number;
  period: LeaderboardPeriod = LeaderboardPeriod.ALL_TIME;

  constructor(page: number, perPage: number, period: LeaderboardPeriod = LeaderboardPeriod.ALL_TIME) {
    this.page = page;
    this.perPage = perPage;
    this.period = period;
  }
}
