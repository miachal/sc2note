const {
  scrape
} = require('./helpers');
const {
  omit
} = require('lodash');

const BASE_API_URL = 'https://starcraft2.com/en-gb/api/sc2/profile/';

async function checkBattlenet(bnetId) {
  let json;
  try {
    json = await scrape(BASE_API_URL + bnetId, 'json');
  } catch {
    return;
  }

  const {
    summary,
    snapshot,
    career,
    swarmLevels,
    campaign
  } = json;

  const {
    difficultyCompleted: {
      "legacy-of-the-void": lotv,
      "wings-of-liberty": wol,
      "heart-of-the-swarm": hots
    }
  } = campaign;

  const {
    seasonSnapshot,
    totalRankedSeasonGamesPlayed
  } = snapshot;

  const prefixedSeasonSnapshot = {};
  Object.keys(seasonSnapshot).forEach(k => {
    if (k.length === 3) {
      prefixedSeasonSnapshot[`_${k}`] = seasonSnapshot[k];
    } else {
      prefixedSeasonSnapshot[k] = seasonSnapshot[k];
    }
  })

  return {
    summary: omit(summary, [
      'id',
      'realm',
      'decalTerran',
      'decalProtoss',
      'decalZerg'
    ]),
    snapshot: {
      totalRankedSeasonGamesPlayed,
      seasonSnapshot: prefixedSeasonSnapshot
    },
    career,
    swarmLevels,
    campaign: {
      lotv,
      wol,
      hots
    }
  };
};

module.exports = {
  checkBattlenet
};