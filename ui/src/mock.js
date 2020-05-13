// rankedftw.com/search/?name=Grassmouse
//

export const real_mock_1 = {
  "data": {
    "searchProfile": {
      "rankedftwId": 2706895,
      "battlenetId": "2/1/7599297",
      "summary": {
        "displayName": "umdiee",
        "portrait": "https://static.starcraft2.com/starport/d0e7c831-18ab-4cd6-adc7-9d4a28f49ec7/portraits/13-2.jpg",
        "totalSwarmLevel": 122,
        "totalAchievementPoints": 2505
      },
      "snapshot": {
        "seasonSnapshot": {
          "_1v1": {
            "rank": -1,
            "leagueName": null,
            "totalWins": 0,
            "totalGames": 0
          },
          "_2v2": {
            "rank": 34,
            "leagueName": "DIAMOND",
            "totalWins": 23,
            "totalGames": 33
          },
          "_3v3": {
            "rank": -1,
            "leagueName": null,
            "totalWins": 0,
            "totalGames": 0
          },
          "_4v4": {
            "rank": -1,
            "leagueName": null,
            "totalWins": 0,
            "totalGames": 0
          },
          "Archon": {
            "rank": -1,
            "leagueName": null,
            "totalWins": 0,
            "totalGames": 0
          }
        },
        "totalRankedSeasonGamesPlayed": 33
      },
      "career": {
        "terranWins": 0,
        "zergWins": 7,
        "protossWins": 20,
        "totalCareerGames": 244,
        "current1v1LeagueName": null,
        "currentBestTeamLeagueName": "DIAMOND",
        "best1v1Finish": {
          "leagueName": "GOLD",
          "timesAchieved": 1
        },
        "bestTeamFinish": {
          "leagueName": "GOLD",
          "timesAchieved": 15
        }
      },
      "swarmLevels": {
        "level": 122,
        "terran": {
          "level": 35,
          "maxLevelPoints": 227500,
          "currentLevelPoints": 221354
        },
        "zerg": {
          "level": 50,
          "maxLevelPoints": 9525000,
          "currentLevelPoints": -1
        },
        "protoss": {
          "level": 37,
          "maxLevelPoints": 232500,
          "currentLevelPoints": 156859
        }
      },
      "campaign": {
        "lotv": null,
        "wol": "CASUAL",
        "hots": "NORMAL"
      },
      "teams": [
        6236652
      ]
    }
  }
};

export const real_mock_2 = {
  "data": {
    "searchProfile": {
      "rankedftwId": 1606994,
      "battlenetId": "2/1/4314765",
      "summary": {
        "displayName": "Grassmouse",
        "portrait": "https://static.starcraft2.com/starport/d0e7c831-18ab-4cd6-adc7-9d4a28f49ec7/portraits/0-0.jpg",
        "totalSwarmLevel": 124,
        "totalAchievementPoints": 7500
      },
      "snapshot": {
        "seasonSnapshot": {
          "_1v1": {
            "rank": -1,
            "leagueName": null,
            "totalWins": 0,
            "totalGames": 0
          },
          "_2v2": {
            "rank": 34,
            "leagueName": "DIAMOND",
            "totalWins": 65,
            "totalGames": 102
          },
          "_3v3": {
            "rank": 84,
            "leagueName": "PLATINUM",
            "totalWins": 6,
            "totalGames": 8
          },
          "_4v4": {
            "rank": -1,
            "leagueName": null,
            "totalWins": 0,
            "totalGames": 0
          },
          "Archon": {
            "rank": -1,
            "leagueName": null,
            "totalWins": 0,
            "totalGames": 0
          }
        },
        "totalRankedSeasonGamesPlayed": 110
      },
      "career": {
        "terranWins": 94,
        "zergWins": 0,
        "protossWins": 3,
        "totalCareerGames": 767,
        "current1v1LeagueName": null,
        "currentBestTeamLeagueName": "DIAMOND",
        "best1v1Finish": {
          "leagueName": "PLATINUM",
          "timesAchieved": 15
        },
        "bestTeamFinish": {
          "leagueName": null,
          "timesAchieved": null
        }
      },
      "swarmLevels": {
        "level": 124,
        "terran": {
          "level": 50,
          "maxLevelPoints": 9525000,
          "currentLevelPoints": -1
        },
        "zerg": {
          "level": 35,
          "maxLevelPoints": 227500,
          "currentLevelPoints": 203422
        },
        "protoss": {
          "level": 39,
          "maxLevelPoints": 237500,
          "currentLevelPoints": 123437
        }
      },
      "campaign": {
        "lotv": "BRUTAL",
        "wol": "BRUTAL",
        "hots": "BRUTAL"
      },
      "teams": [
        6236652,
        6411810,
        6443937,
        6262949,
        6472608
      ]
    }
  }
};


export const example_data = {
  name: 'Grassmouse',
  clanName: 'ESLPRO',
  clanTag: 'PROESL',
  portrait: 'https://static.starcraft2.com/starport/d0e7c831-18ab-4cd6-adc7-9d4a28f49ec7/portraits/0-0.jpg',
  "swarmLevels": {
    "terran": {
      "level": 50,
      "maxLevelPoints": 9525000,
      "currentLevelPoints": -1
    },
    "zerg": {
      "level": 50,
      "maxLevelPoints": 9525000,
      "currentLevelPoints": -1
    },
    "protoss": {
      "level": 46,
      "maxLevelPoints": 255000,
      "currentLevelPoints": 61484
    }
  },
  campaign: {
    'wol': 'BRUTAL',
    'hots': 'BRUTAL',
    'loth': 'BRUTAL'
  },
  season: {
    '1v1': {
      rank: -1,
      league: null,
      games: 0,
      wins: 0
    },
    '2v2': {
      rank: 18,
      league: 'diamond',
      games: 56,
      wins: 38
    },
    /* ... */
  },
  teams: [] // teams obj mongo
};

export const example_data2 = {
  name: 'KaaPII',
  clanName: 'ESLPRO',
  clanTag: 'PROESL',
  portrait: 'https://static.starcraft2.com/starport/d0e7c831-18ab-4cd6-adc7-9d4a28f49ec7/portraits/11-28.jpg',
  swarm: {
    terran: 50,
    zerg: 50,
    protoss: 46
  },
  campaign: {
    'wol': 'CASUAL',
    'hots': 'HARD',
  },
  season: {
    '1v1': {
      rank: -1,
      league: null,
      games: 0,
      wins: 0
    },
    '2v2': {
      rank: 18,
      league: 'diamond',
      games: 56,
      wins: 38
    },
    /* ... */
  },
  teams: [] // teams obj mongo
};

export const seasonSnapshotMock = {
  "1v1": {
    "rank": -1,
    "leagueName": null,
    "totalGames": 0,
    "totalWins": 0
  },
  "2v2": {
    "rank": 19,
    "leagueName": "DIAMOND",
    "totalGames": 56,
    "totalWins": 38
  },
  "3v3": {
    "rank": -1,
    "leagueName": null,
    "totalGames": 0,
    "totalWins": 0
  },
  "4v4": {
    "rank": -1,
    "leagueName": null,
    "totalGames": 0,
    "totalWins": 0
  },
  "Archon": {
    "rank": -1,
    "leagueName": null,
    "totalGames": 0,
    "totalWins": 0
  }
};


export const rankedftw_player = {
  rankedftw_id: 1606994,
  battlenet_id: '/2/1/4314765',
  teams: [{
      // https://www.rankedftw.com/ladder/lotv/team-2v2/mmr/?team=6236652
      mode: '2v2',
      rankedftw_id: 6236652,
      region: 'eu',
      league: 'diamond',
      tier: 3,
      MMR: 3238,
      points: 161,
      wins: 23,
      losses: 10,
      played: 33,
      ratio: '69.7%', // ?
      players: [] // id obj
    },
    {
      mode: '2v2',
      rankedftw_id: 6411810,
      region: 'eu',
      league: 'platinum',
      tier: 3,
      MMR: 2958,
      points: 204,
      wins: 11,
      losses: 7,
      played: 18,
      ratio: '61.1%',
      players: []
    },
    {
      mode: '2v2',
      rankedftw_id: 6262949,
      region: 'eu',
      league: 'silver',
      tier: 2,
      MMR: 2808,
      points: 145,
      wins: 4,
      losses: 1,
      played: 5,
      ratio: '80%',
      players: []
    }
  ]
};

export const bn_player = {};

/*
const bn_player = {
  // https://starcraft2.com/en-gb/api/sc2/profile/2/1/8055475?locale=en_GB
  summary: {
    id: 8055475,
    realm: 1,
    displayName: 'KaaPII',
    clanName: 'ESLPRO',
    clanTag: 'PROESL',
    portrait: '<url>',
    swarmLevel: 146,
    achievementPoints: 3395
  }
  snapshot: {
    seasonSnapshot: {
      1v1: {
        rank: 38,
        league: 'diamond'
      }
  }
};
*/