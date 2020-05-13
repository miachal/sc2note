const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  type LeagueType {
    leagueName: String,
    timesAchieved: Int
  }

  type CareerType {
    terranWins: Int,
    zergWins: Int,
    protossWins: Int,
    totalCareerGames: Int,
    current1v1LeagueName: String,
    currentBestTeamLeagueName: String,
    best1v1Finish: LeagueType,
    bestTeamFinish: LeagueType
  }
`;