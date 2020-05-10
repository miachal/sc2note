require('dotenv').config();
const mongoose = require('mongoose');
const Player = require('./models/Player');

const express = require('express');
const {
  ApolloServer,
  gql
} = require('apollo-server-express');
const typeDefs = require('./types');
const {
  get
} = require('lodash');

const {
  searchPlayers
} = require('./scraper/rankedftw');
const {
  getPlayerInformation
} = require('./scraper/scrape');

const {
  diffInMinutes
} = require('./helpers');

mongoose.connect(`${process.env.MONGO_DB}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
});
const connection = mongoose.connection;
connection.on('error', () => {
  console.log('failed');
});
connection.on('open', () => {
  console.log('Connected!');
});


const resolvers = {
  Query: {
    searchId: async (p, {
      name
    }) => get(await searchPlayers(name), '[0].id'),

    searchProfile: async (p, {
      id
    }) => {
      const player = await Player.findOne({
        rankedftwId: id
      });
      if (player && diffInMinutes(player.updatedAt) <= 15) {
        console.log('get from cache');
        return player;
      }
      const playerInfo = await getPlayerInformation(id);
      const result = await Player.findOneAndUpdate({
        rankedftwId: playerInfo.rankedftwId
      }, playerInfo, {
        upsert: true,
        new: true
      });
      return result;
    }
  }
};



const server = new ApolloServer({
  typeDefs,
  resolvers
});

const app = express();
server.applyMiddleware({
  app
});

app.listen({
  port: 4000
}, () => {
  console.log(`Server ready at http://localhost:4000${server.graphqlPath}`);
});