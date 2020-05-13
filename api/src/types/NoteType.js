const {
  gql
} = require('apollo-server-express');

module.exports = gql `
    input NoteInput {
      players: [String],
      icon: String,
      note: String
    }

    type NoteType {
      _id: String,
      icon: String,
      note: String,
      created: String
  }
`;