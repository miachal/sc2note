require('dotenv').config();
const fetch = require('node-fetch');
const SlackBot = require('slackbots');

/*
{"findComplexInfo":{
  "teams":[
    {"mode":"2v2","league":"diamond","tier":"3","mmr":"3238","rank":"18169","points":"161","played":"33","ratio":"69.7%"},
    {"mode":"2v2","league":"platinum","tier":"3","mmr":"2958","rank":"32545","points":"204","played":"18","ratio":"61.1%"},
    {"mode":"2v2","league":"gold","tier":"1","mmr":"2735","rank":"46256","points":"100","played":"13","ratio":"46.2%"},
    {"mode":"2v2","league":"silver","tier":"2","mmr":"2808","rank":"41813","points":"145","played":"5","ratio":"80.0%"}]}}
*/
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
    const results = askGraphql(parts);
    results.forEach(r => {
      bot.postMessage(
        data.channel,
        r
      );
    });
  }
})