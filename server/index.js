import { GraphQLServer } from "graphql-yoga";
import resolvers from "./api/resolvers.js";
import { prisma } from "./generated/prisma-client";

const server = new GraphQLServer({
  typeDefs: "./api/schema.graphql",
  resolvers,
  context: { prisma }
});

server.start(() =>
  console.log("Server up and running on http://localhost:4000 🚀")
);
