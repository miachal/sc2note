const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  type SnapshotLeagueType {
    rank: Int,
    leagueName: String,
    totalGames: Int,
    totalWins: Int
  }

  type SeasonType {
    _1v1: SnapshotLeagueType,
    _2v2: SnapshotLeagueType,
    _3v3: SnapshotLeagueType,
    _4v4: SnapshotLeagueType,
    Archon: SnapshotLeagueType
  }

  type SnapshotType {
    seasonSnapshot: SeasonType,
    totalRankedSeasonGamesPlayed: Int
  }
`;