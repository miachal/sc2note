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
const {
  findComplexInformation
} = require('./scraper/scrape');

const typeDefs = gql `
  type Player {
    id: String,
    name: String,
    bnetId: String,
  }

  type Snapshot {
    rank: Int,
    leagueName: String,
    totalGames: Int,
    totalWins: Int
  }

  type Best {
    leagueName: String,
    timeAchieved: Int
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
    best1v1Finish: Best,
    bestTeamFinish: Best,
    terran_level: Int,
    zerg_leveL: Int,
    protoss_leveL: Int,
    lotv: String,
    wol: String,
    hots: String
  }

  type Team {
    teamId: String,
    league: String,
    game: String,
    mode: String,
    type: String,
    rank: String,
    tier: String,
    mmr: String,
    points: String,
    wins: String,
    losses: String,
    played: String,
    ratio: String
  }
    
  type ComplexInfo {
    players: [BnetProfile],
    teams: [Team]
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

    findComplexInfo: async (p, {
      names
    }) => await findComplexInformation(names),

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