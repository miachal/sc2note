const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  type Query {
    searchId(name: String!): Int,
    searchProfile(id: Int!): PlayerType
  }
`;