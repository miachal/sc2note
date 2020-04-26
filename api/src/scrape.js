const fetch = require('node-fetch');
const cheerio = require('cheerio');

const baseUrl = 'https://www.rankedftw.com'

async function searchPlayers(name) {
  const url = `${baseUrl}/search/?name=${name}`;
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const players = $('a[href^="/player/"]');
  console.log(players.length);
  players.each((i, element) => {
    const id = element.attribs['href'].match(/\d+/)[0];
    const name = $(element).find('span[class="name"]').text();
    console.log(`${id} : ${name}`);
    console.log('Looking for teams...');
    searchTeams(id);
  });
}

async function searchTeams(playerId) {
  const url = `${baseUrl}/player/${playerId}/`;
  console.log('URL: ', url);
  const response = await fetch(url);
  const html = await response.text();
  const $ = cheerio.load(html);
  const teams = $('li');
  console.log('Teams: ', teams.length);
  console.log();
  teams.each((i, element) => {
    const el = $(element);
    const ladderUrl = el.find('a[class="ladder"]').first().attr('href');

    const teamA = el.find('a[class="team"]').first();
    const teamId = teamA.attr('href').match(/\d+/)[0];
    const leagueUrl = teamA.find('img[class="league"]').first().attr('src');
    const league = leagueUrl.match(/leagues\/(\w+)-/)[1];


    const players = el.find('a[class="player"]').map((i, el) => {
      const id = el.attribs['href'].match(/\d+/)[0];
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
    console.log('LadderURL: ', ladderUrl);
    console.log('Team ID: ', teamId);
    console.log('League: ', league);
    console.log('Players: ', players);
    console.log('');
  });
}



searchPlayers('grass');