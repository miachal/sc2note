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

  return {
    summary: omit(summary, [
      'decalTerran',
      'decalProtoss',
      'decalZerg'
    ]),
    snapshot,
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