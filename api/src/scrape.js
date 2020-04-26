const fetch = require('node-fetch');
const cheerio = require('cheerio');

const baseUrl = 'https://www.rankedftw.com'

async function checkBnet(bnetId) {
  const url = `https://starcraft2.com/en-gb/api/sc2/profile/${bnetId}`;
  const response = await fetch(url);
  const json = await response.json();

  const {
    summary,
    snapshot,
    career,
    swarmLevels,
    campaign
  } = json;

  const {
    realm,
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

async function searchPlayers(name) {
  const url = `${baseUrl}/search/?name=${name}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const players = $('a[href^="/player/"]');
  console.log(players.length);
  players.each((i, element) => {
    const [id] = element.attribs['href'].match(/\d+/);
    const name = $(element).find('span[class="name"]').text();
    console.log(`${id} : ${name}`);
    searchTeams(id);
  });
}

async function searchTeams(playerId) {
  const url = `${baseUrl}/player/${playerId}/`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);

  const [, bnetId] = $('a[class="bnet-link"]')
    .first()
    .attr('href')
    .match(/profile\/(.*)/);

  const bnetProfile = await checkBnet(bnetId);
  console.table(bnetProfile);

  const teams = $('li');
  console.log('Teams: ', teams.length);
  console.log();
  teams.each(async (i, element) => {
    const el = $(element);
    const ladderUrl = el.find('a[class="ladder"]').first().attr('href');

    const teamA = el.find('a[class="team"]').first();
    const [teamId] = teamA.attr('href').match(/\d+/);
    const leagueUrl = teamA.find('img[class="league"]').first().attr('src');
    const league = leagueUrl.match(/leagues\/(\w+)-/)[1];


    const players = el.find('a[class="player"]').map((i, el) => {
      const [id] = el.attribs['href'].match(/\d+/);
      const raceImg = $(el).find('img[class="race"]').first().attr('src');
      const race = raceImg.match(/races\/(\w+)-/)[1];
      const name = el.attribs['title'].replace(' page', '');
      return {
        id,
        race,
        name
      };
    }).get();

    console.log(`---======[ TEAM ${teamId} ]======---`);
    // console.log('Team ID: ', teamId);
    // console.log('League: ', league);
    // console.log('Players: ', players);
    console.table({
      teamId,
      league,
    });
    console.table(players);

    console.log('Ladder: ', splitLadder(ladderUrl));
    const ladderInfo = await checkLadder(teamId);
    console.table(ladderInfo);
    console.log('');
  });
};

async function checkLadder(teamId) {
  const url = `${baseUrl}/ladder/lotv/team-2v2/mmr/?team=${teamId}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const row = $('tr[class=" highlight-team"]').first();
  const numbers = $(row).find('td[class="number"]').map((i, el) => $(el).text()).get();
  const [rank, mmr, points, wins, losses, played, ratio, age] = numbers;
  const tier = $(row).find('td[class="img"]').last().text();
  return {
    rank,
    tier,
    mmr,
    points,
    wins,
    losses,
    played,
    ratio
  };
};

function splitLadder(ladderUrl) {
  return ladderUrl.match('[lotv|hots|wot]\/(((\w)-)*(.*))\/ladder-rank')[1].split('-').reverse();
}



searchPlayers('umdiee');