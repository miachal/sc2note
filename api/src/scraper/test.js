const {
  searchPlayers,
  findBnetId,
  searchTeams,
  checkLadder,
} = require('./rankedftw');
const { checkBattlenet } = require('./battlenet');

const { findComplexInformation, getPlayerInformation } = require('./scrape');

(async () => {
  const p = 'grassmouse';
  const gid = 1606994;
  const p_rankedid = 3273097;
  const p_bn = '2/1/4314765';
  let r;
  // r = await searchPlayers(p);
  // r = await findBnetId(p_rankedid);
  // r = await searchTeams(p_rankedid);
  // console.log(r);

  // console.log(await checkLadder(r[0]));

  // const j = await searchTeams(gid);
  // console.log(j);

  r = await checkBattlenet(p_bn);
  console.log(r);
})();
