const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  type RaceLevelType {
    level: Int,
    maxLevelPoints: Int,
    currentLevelPoints: Int
  }

  type SwarmType {
    level: Int,
    terran: RaceLevelType,
    zerg: RaceLevelType,
    protoss: RaceLevelType
  }
`;