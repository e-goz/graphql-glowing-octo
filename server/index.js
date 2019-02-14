import { GraphQLServer } from "graphql-yoga";
import resolvers from "./api/resolvers.js";
import typeDefs from "./api/schema.js";
import { prisma } from "./generated/prisma-client";

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context: { prisma }
});

server.start(() =>
  console.log("Server up and running on http://localhost:4000 🚀")
);
