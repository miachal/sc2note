require('dotenv').config();
const fetch = require('node-fetch');
const SlackBot = require('slackbots');

const parseOutput = ({
  findComplexInfo
}) => {
  const {
    teams
  } = findComplexInfo;
  const objs = teams.map(team => {
    const {
      mode,
      league,
      tier,
      mmr,
      rank,
      points,
      played,
      ratio
    } = team;
    return `${mode} - ${league}[${tier}] (${rank}) MMR: ${mmr} POINTS: ${points} PLAYED: ${played} [${ratio}% WINS]`;
  });
  console.log(objs);
  return objs;
};

const askGraphql = async params => {
  const input = params.length > 1 ? JSON.stringify(params) : `"${params}"`;
  const body = JSON.stringify({
    query: `{ findComplexInfo(names: ${input}) { teams { mode league tier mmr rank points played ratio } } }`
  });
  console.log(body);
  const response = await fetch('http://localhost:4000/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body
  });
  const {
    data
  } = await response.json();
  return parseOutput(data);
}

const bot = new SlackBot({
  token: process.env.BOT_TOKEN,
  name: 'sc2bot'
});

bot.on('start', () => {
  console.log('Started.');
});

bot.on('error', err => {
  console.log(err);
});

bot.on('message', async data => {
  if (data.type !== 'message') {
    return;
  }

  if (data.text.startsWith('!check')) {
    const parts = data.text.split(' ').slice(1);
    let results = [];
    try {
      results = await askGraphql(parts);
    } catch (e) {
      results = ['Zjebałeś. Idź spać.'];
    }
    results.forEach(r => {
      bot.postMessage(
        data.channel,
        r
      );
    });
  }
})