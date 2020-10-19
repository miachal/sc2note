const fetch = require('node-fetch');
const cheerio = require('cheerio');
const { checkBattlenet } = require('./battlenet');
const { scrape, splitLadder } = require('./helpers');

const BASE_URL = 'https://www.rankedftw.com';

async function searchPlayers(name, strict = false) {
  const url = `${BASE_URL}/search/?name=${name}`;
  const $ = await scrape(url);
  const playersLinks = $('a[href^="/player/"]');
  const players = playersLinks
    .map((i, element) => {
      const [id] = element.attribs['href'].match(/\d+/);
      const name = $(element).find('span[class="icon-align name"]').text();
      return {
        id,
        name,
      };
    })
    .get();
  if (strict) {
    return players.filter((p) => p.name.toLowerCase() === name.toLowerCase());
  }
  return players;
}

async function findBnetId(playerId) {
  const url = `${BASE_URL}/player/${playerId}/`;
  const $ = await scrape(url);

  try {
    const [, bnetId] = $('a[class="bnet-link"]')
      .first()
      .attr('href')
      .match(/profile\/(.*)/);

    return bnetId;
  } catch {}
  return;
}

async function searchTeams(playerId) {
  const url = `${BASE_URL}/player/${playerId}/`;
  const $ = await scrape(url);

  const teams = $('li');
  return teams
    .map((i, element) => {
      const el = $(element);
      const ladderUrl = el.find('a[class="ladder"]').first().attr('href');

      const teamA = el.find('a[class="team"]').first();
      const [teamId] = teamA.attr('href').match(/\d+/);
      const leagueUrl = teamA.find('img[class="league"]').first().attr('src');
      const league = leagueUrl.match(/leagues\/(\w+)-/)[1];
      const teamText = $(teamA)
        .find('span[class="icon-align mode"]')
        .first()
        .text()
        .toLowerCase();
      const [type, mode] = teamText.split(' ');

      const players = el
        .find('a[class="player"]')
        .map((i, el) => {
          const [id] = el.attribs['href'].match(/\d+/);
          const raceImg = $(el).find('img[class="race"]').first().attr('src');
          const race = raceImg.match(/races\/(\w+).svg/)[1];
          const name = el.attribs['title'].replace(' page', '');
          return {
            id,
            race,
            name,
          };
        })
        .get();

      return {
        teamId,
        ladderUrl,
        league,
        mode,
        type,
        players,
      };
    })
    .get();
}

async function checkLadder(teamObject) {
  const { teamId, mode, type } = teamObject;
  const ladderType = type ? `${type}-${mode}` : mode;
  const url = `${BASE_URL}/ladder/lotv/${ladderType}/mmr/?team=${teamId}`;
  const $ = await scrape(url);
  const row = $(`a[href="/team/${teamId}/"]`).first();
  const numbers = $(row)
    .find('div[class="cell number"]')
    .map((i, el) => $(el).text())
    .get();
  const [rank, mmr, points, wins, losses, played, ratio] = numbers;
  const tier = $(row).find('div[class="cell img"]').last().text();
  return {
    rank: +rank,
    tier: +tier,
    mmr: +mmr,
    points: +points,
    wins: +wins,
    losses: +losses,
    played: +played,
    ratio,
  };
}

module.exports = {
  searchPlayers,
  searchTeams,
  checkLadder,
  findBnetId,
};
