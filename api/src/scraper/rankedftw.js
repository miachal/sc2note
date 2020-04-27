const fetch = require('node-fetch');
const cheerio = require('cheerio');
const {
  checkBattlenet
} = require('./battlenet');
const {
  scrape,
  splitLadder
} = require('./helpers');

const BASE_URL = 'https://www.rankedftw.com';

async function searchPlayers(name, strict = false) {
  const url = `${BASE_URL}/search/?name=${name}`;
  const $ = await scrape(url);
  const playersLinks = $('a[href^="/player/"]');
  const players = playersLinks.map((i, element) => {
    const [id] = element.attribs['href'].match(/\d+/);
    const name = $(element).find('span[class="name"]').text();
    return {
      id,
      name
    };
  }).get();
  if (strict) {
    return players.filter(p => (p.name).toLowerCase() === name.toLowerCase());
  }
  return players;
}

async function findBnetId(playerId) {
  const url = `${BASE_URL}/player/${playerId}/`;
  const $ = await scrape(url);

  const [, bnetId] = $('a[class="bnet-link"]')
    .first()
    .attr('href')
    .match(/profile\/(.*)/);

  return bnetId;
}

async function searchTeams(playerId) {
  const url = `${BASE_URL}/player/${playerId}/`;
  const $ = await scrape(url);

  const teams = $('li');
  return teams.map((i, element) => {
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

    const [game, mode, type] = splitLadder(ladderUrl);

    return {
      teamId,
      league,
      game,
      mode,
      type,
      players
    };

  }).get();
};

async function checkLadder(teamObject) {
  const {
    teamId,
    game,
    mode,
    type
  } = teamObject;
  const ladderType = type ? `${type}-${mode}` : mode;
  const url = `${BASE_URL}/ladder/${game}/${ladderType}/mmr/?team=${teamId}`;
  const $ = await scrape(url);
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

module.exports = {
  searchPlayers,
  searchTeams,
  checkLadder,
  findBnetId
};