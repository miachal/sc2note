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

module.exports = {
  scrape,
};
