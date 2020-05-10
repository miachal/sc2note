const {
  gql
} = require('apollo-server-express');

module.exports = gql `
  type CampaignType {
    lotv: String,
    wol: String,
    hots: String
  }
`;