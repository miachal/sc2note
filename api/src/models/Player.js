const mongoose = require('mongoose');

const schema = new mongoose.Schema({
  rankedftwId: Number,
  battlenetId: String,
  name: String,
  portrait: String,
  totalSwarmLevel: Number,
  totalAchievementPoints: Number,
  snapshot: {
    seasonSnapshot: {
      _1v1: {
        rank: Number,
        leagueName: String,
        totalGames: Number,
        totalWins: Number
      },
      _2v2: {
        rank: Number,
        leagueName: String,
        totalGames: Number,
        totalWins: Number
      },
      _3v3: {
        rank: Number,
        leagueName: String,
        totalGames: Number,
        totalWins: Number
      },
      _4v4: {
        rank: Number,
        leagueName: String,
        totalGames: Number,
        totalWins: Number
      },
      Archon: {
        rank: Number,
        leagueName: String,
        totalGames: Number,
        totalWins: Number
      },
    },
    totalRankedSeasonGamesPlayed: Number
  },
  career: {
    terranWins: Number,
    zergWins: Number,
    protossWins: Number,
    totalCareerGames: Number,
    totalGamesThisSeason: Number,
    current1v1LeagueName: String,
    currentBestTeamLeagueName: String,
    best1v1Finish: {
      leagueName: String,
      timesArchived: Number
    },
    bestTeamFinish: {
      leagueName: String,
      timesArchived: Number
    }
  },
  swarmLevels: {
    level: Number,
    terran: {
      level: Number,
      maxLevelPoints: Number,
      currentLevelPoints: Number
    },
    zerg: {
      level: Number,
      maxLevelPoints: Number,
      currentLevelPoints: Number
    },
    protoss: {
      level: Number,
      maxLevelPoints: Number,
      currentLevelPoints: Number
    }
  },
  campaign: {
    lotv: String,
    wol: String,
    hots: String
  },
  teams: [Number],
}, {
  timestamps: true
});

module.exports = mongoose.model('Player', schema);