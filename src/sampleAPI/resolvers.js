const API = require("./dataSource");

let obj = new API();

module.exports.resolvers = {
  Query: {
    getCatData: (parent, args, context) => {
      return obj.getData();
    },
  },
};
