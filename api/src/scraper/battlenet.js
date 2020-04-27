const {
  scrape
} = require('./helpers');

const BASE_API_URL = 'https://starcraft2.com/en-gb/api/sc2/profile/';

async function checkBattlenet(bnetId) {
  let json;
  try {
    json = await scrape(BASE_API_URL + bnetId, 'json');
  } catch {
    return {
      error: 'Couldnt scrape informations from battle.net'
    };
  }

  const {
    summary,
    snapshot,
    career,
    swarmLevels,
    campaign
  } = json;

  const {
    id,
    realm,
    displayName,
    portrait,
    totalSwarmLevel,
    totalAchievementPoints
  } = summary;

  const {
    seasonSnapshot: {
      "1v1": snapshot_1v1,
      "2v2": snapshot_2v2,
      "3v3": snapshot_3v3,
      "4v4": snapshot_4v4,
      Archon: snapshot_archon
    },
    totalRankedSeasonGamesPlayed
  } = snapshot;

  const {
    terranWins,
    zergWins,
    protossWins,
    totalCareerGames,
    totalGamesThisSeason,
    current1v1LeagueName,
    currentBestTeamLeagueName,
    best1v1Finish,
    bestTeamFinish
  } = career;

  const {
    terran: {
      level: terran_level
    },
    zerg: {
      level: zerg_level
    },
    protoss: {
      level: protoss_level
    }
  } = swarmLevels;

  const {
    difficultyCompleted: {
      "legacy-of-the-void": lotv,
      "wings-of-liberty": wol,
      "heart-of-the-swarm": hots
    }
  } = campaign;

  return {
    id,
    realm,
    portrait,
    totalSwarmLevel,
    totalAchievementPoints,
    snapshot_1v1,
    snapshot_2v2,
    snapshot_3v3,
    snapshot_4v4,
    snapshot_archon,
    totalRankedSeasonGamesPlayed,
    terranWins,
    zergWins,
    protossWins,
    totalCareerGames,
    totalGamesThisSeason,
    current1v1LeagueName,
    currentBestTeamLeagueName,
    best1v1Finish,
    bestTeamFinish,
    terran_level,
    zerg_level,
    protoss_level,
    lotv,
    wol,
    hots
  };
};

module.exports = {
  checkBattlenet
};