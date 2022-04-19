const { gql } = require("apollo-server");

module.exports.typeDefs = gql`
  type CatFactsData {
    _id: String
    user: String
    text: String
    source: String
    updatedAt: String
    type: String
    createdAt: String
    deleted: Boolean
    used: Boolean
    status: Status
  }
  type Status {
    verified: Boolean
    sentCount: Int
  }

  extend type Query {
    getData: [CatFactsData]
  }
`;
