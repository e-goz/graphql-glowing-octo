import { GraphQLServer } from "graphql-yoga";
import resolvers from "./api/resolvers.js";
import typeDefs from "./api/schema.js";

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() =>
  console.log("Server up and running on http://localhost:4000 🚀")
);
