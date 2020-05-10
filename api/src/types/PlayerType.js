const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  type PlayerType {
    rankedftwId: Int,
    battlenetId: String,
    portrait: String,
    totalSwarmLevel: Int,
    totalAchievementPoints: Int,
    snapshot: SnapshotType,
    career: CareerType,
    swarmLevels: SwarmType,
    campaign: CampaignType,
    teams: [Int]
  }
`;