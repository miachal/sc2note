const mongoose = require('mongoose');
const Note = require('./Note');

const schema = new mongoose.Schema({
  rankedftwId: Number,
  battlenetId: String,
  summary: {
    displayName: String,
    portrait: String,
    totalSwarmLevel: Number,
    totalAchievementPoints: Number
  },
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
      timesAchieved: Number
    },
    bestTeamFinish: {
      leagueName: String,
      timesAchieved: Number
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
  teams: [Number]
}, {
  timestamps: true
});

schema.methods.findNotes = async function () {
  const notes = await Note.find({
    players: {
      $elemMatch: {
        $eq: this._id
      }
    }
  }, {
    "icon": 1,
    "note": 1,
    "created": 1
  });
  return notes;
}

module.exports = mongoose.model('Player', schema);