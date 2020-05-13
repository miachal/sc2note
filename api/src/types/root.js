const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  type IdNamePair {
    id: Int,
    name: String
  }

  type Query {
    searchId(name: String!): [IdNamePair],
    searchIds(names: [String]!): [IdNamePair],
    searchProfile(id: Int!): PlayerType,
    searchProfiles(ids: [Int]!): [PlayerType]
    getNotes(playerIds: [String]): [NoteType]
  }

  type Mutation {
    addNote(note: NoteInput): NoteType
  }

`;