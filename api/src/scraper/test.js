const {
  searchPlayers,
  findBnetId,
  searchTeams,
  checkLadder
} = require('./rankedftw');
const {
  checkBattlenet
} = require('./battlenet');

const {
  findComplexInformation,
  getPlayerInformation
} = require('./scrape');

(async () => {
  const id = 2706895;
  const gpi = await getPlayerInformation(id);
  console.log(gpi);

  const ss = gpi.snapshot.seasonSnapshot;
  console.log(ss);
})();