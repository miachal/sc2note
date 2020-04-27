const express = require('express');
const {
  ApolloServer,
  gql
} = require('apollo-server-express');
const {
  searchPlayers,
  findBnetId,
  checkLadder,
  searchTeams
} = require('./scraper/rankedftw');

const typeDefs = gql `
  type Player {
    id: String,
    name: String,
    bnetId: String,
  }

  type Snapshot {
    rank: Int,
    league: String,
    totalWins: Int
    totalGames: Int
  }

  type BnetProfile {
    id: String,
    realm: Int,
    portrait: String,
    totalSwarmLevel: Int,
    totalAchievementPoints: Int,
    snapshot_1v1: Snapshot,
    snapshot_2v2: Snapshot,
    snapshot_3v3: Snapshot,
    snapshot_4v4: Snapshot,
    snapshot_archon: Snapshot,
    totalRankedSeasonGamesPlayed: Int,
    terranWins: Int,
    zergWins: Int,
    protossWins: Int,
    totalCareerGames: Int,
    totalGamesThisSeason: Int,
    current1v1LeagueName: String,
    currentBestTeamLeagueName: String,
    best1v1Finish: ?,
    bestTeamFinish: ?,
    terran_level: Int,
    zerg_leveL: Int,
    protoss_leveL: Int,
    lotv: String,
    wol: String,
    hots: String
  }

  type Teams {
    
  }
    
  type ComplexInfo {
    players: [BnetProfile],
    teams: [Teams]
  }

  type Query {
    searchPlayers(name: String!, strict: Boolean): [Player],
    findBnetId(id: String): String,
    findComplexInfo(names: [String!]): ComplexInfo
  }
`;

const resolvers = {
  Query: {
    searchPlayers: async (p, {
      name,
      strict
    }) => await searchPlayers(name, strict),

    findBnetId: async (p, {
      id
    }) => await findBnetId(id),

  }
};

const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
server.applyMiddleware({
  app
});

app.listen({
  port: 4000
}, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});