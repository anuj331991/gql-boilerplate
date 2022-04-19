const { ApolloServer } = require("apollo-server");

// This is done to install playground locally
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

const server = new ApolloServer({
  modules: [require("./sampleAPI")],
  context: ({ req }) => ({
    headers: req.headers,
  }),
  plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
});

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
