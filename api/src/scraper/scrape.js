const {
  searchPlayers,
  searchTeams,
  checkLadder,
  findBnetId
} = require('./rankedftw');
const {
  checkBattlenet
} = require('./battlenet');


async function findComplexInformation(players) {
  const profiles = [];
  for (let j = 0; j < players.length; ++j) {
    const profile = await searchPlayers(players[j], true);
    if (profile.length !== 1) {
      return {
        error: 'Couldnt find player with name ' + players[j]
      };
    }
    profiles.push(profile[0].id);
  }

  const bnetProfiles = [];
  for (let j = 0; j < profiles.length; ++j) {
    const bnetId = await findBnetId(profiles[j]);
    const bnetProfile = await checkBattlenet(bnetId);
    bnetProfiles.push(bnetProfile);
  }

  const teams = await searchTeams(profiles[0]);

  const commons = teams.filter(({
    players
  }) => {
    const ids = players.map(p => p.id);
    return JSON.stringify(ids.sort()) === JSON.stringify(profiles.sort())
  });

  for (let j = 0; j < commons.length; ++j) {
    const ladder = await checkLadder(commons[j]);
    commons[j] = {
      ...commons[j],
      ...ladder
    };
    delete commons[j].players;
  }

  return {
    players: bnetProfiles,
    teams: commons
  };
}

module.exports = {
  findComplexInformation
};