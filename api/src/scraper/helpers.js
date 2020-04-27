const fetch = require('node-fetch');
const cheerio = require('cheerio');

// const url = `${baseUrl}/search/?name=${name}`;

async function scrape(url, format = 'html') {
  const response = await fetch(url);
  switch (format) {
    case 'html':
      const html = await response.text();
      return cheerio.load(html);

    case 'json':
      return await response.json();

    default:
      return response;
  }
}


function splitLadder(ladderUrl) {
  const match = ladderUrl.match('(lotv|hots|wot)\/(((\w)-)*(.*))\/ladder-rank').slice(1, 3);
  const game = match[0];
  const [mode, type] = match[1].split('-').reverse();
  return [
    game,
    mode,
    type
  ];
}

module.exports = {
  scrape,
  splitLadder
};