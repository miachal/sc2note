const {
  searchPlayers,
  searchTeams,
  checkLadder,
  findBnetId
} = require('./rankedftw');
const {
  checkBattlenet
} = require('./battlenet');

async function getPlayerInformation(rankedftwId) {
  if (typeof rankedftwId !== 'number') {
    return;
  }

  const battlenetId = await findBnetId(rankedftwId);
  if (!battlenetId) {
    return;
  }

  const teams = (await searchTeams(rankedftwId)).map(({
    teamId
  }) => +teamId);

  const battlenetProfile = await checkBattlenet(battlenetId);

  return {
    rankedftwId,
    battlenetId,
    ...battlenetProfile,
    teams
  };
}


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

  const teamsToShow = players.length > 1 ? [...commons] : [...teams];

  for (let j = 0; j < teamsToShow.length; ++j) {
    const ladder = await checkLadder(teamsToShow[j]);
    teamsToShow[j] = {
      ...teamsToShow[j],
      ...ladder
    };
  }

  return {
    players: bnetProfiles,
    teams: teamsToShow
  };
}

module.exports = {
  findComplexInformation,
  getPlayerInformation
};