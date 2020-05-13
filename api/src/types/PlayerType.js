const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  type PlayerType {
    _id: String,
    rankedftwId: Int,
    battlenetId: String,
    summary: SummaryType
    snapshot: SnapshotType,
    career: CareerType,
    swarmLevels: SwarmType,
    campaign: CampaignType,
    teams: [Int],
    notes: [NoteType]
  }
`;