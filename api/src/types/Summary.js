const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  type SummaryType {
    displayName: String,
    portrait: String,
    totalSwarmLevel: Int,
    totalAchievementPoints: Int
  }
`;