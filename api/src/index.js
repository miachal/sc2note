require('dotenv').config();
const mongoose = require('mongoose');
const Player = require('./models/Player');
const Note = require('./models/Note');

const express = require('express');
const {
  ApolloServer
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
      // }) => get(await searchPlayers(name), '[0].id'),
    }) => await searchPlayers(name) || [],

    searchIds: async (p, {
      names
    }) => {
      const ids = [];
      for (let j = 0; j < names.length; ++j) {
        const r = await searchPlayers(names[j]);
        if (r) {
          ids.push(r);
        }
      }
      console.log(ids.flat());
      return ids.flat();
    },

    searchProfile: async (p, {
      id
    }) => {
      let player = await Player.findOne({
        rankedftwId: id
      });

      // TODO: CHANGE TIMER XD
      if (!player || diffInMinutes(player.updatedAt) >= 60) {
        const playerInfo = await getPlayerInformation(id);
        player = await Player.findOneAndUpdate({
          rankedftwId: playerInfo.rankedftwId
        }, playerInfo, {
          upsert: true,
          new: true
        });
      }

      player.notes = await player.findNotes();
      return player;
    },

    searchProfiles: async (p, {
      ids
    }) => {
      const players = [];
      for (let j = 0; j < ids.length; ++j) {
        let player = await Player.findOne({
          rankedftwId: ids[j]
        });

        if (!player || diffInMinutes(player.updatedAt) >= 15) {
          const playerInfo = await getPlayerInformation(ids[j]);

          if (!get(playerInfo, summary)) {
            continue;
          }

          player = await Player.findOneAndUpdate({
            rankedftwId: playerInfo.rankedftwId
          }, playerInfo, {
            upsert: true,
            new: true
          });
        }

        player.notes = await player.findNotes();

        players.push(player);
      }
      return players;
    },

    getNotes: async (p, {
      playerIds
    }) => {
      const ids = playerIds.map(id => mongoose.Types.ObjectId(id));
      const notes = await Note.find({
        players: {
          $elemMatch: {
            $in: ids
          }
        }
      }, {
        // "icon": 1,
        // "note": 1,
        // "created": 1
      });
      return notes;
    }
  },

  Mutation: {
    addNote: async (p, {
      note: {
        players,
        icon,
        note
      }
    }) => {
      const releatedPlayers = await Player.find({
        _id: {
          $in: players.map(player => mongoose.Types.ObjectId(player))
        }
      });

      if (!releatedPlayers) {
        return {};
      }

      const obj = new Note({
        players: releatedPlayers.map(p => p._id),
        icon,
        note
      });

      await obj.save();
      return obj;
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