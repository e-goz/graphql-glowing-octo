import { GraphQLServer } from "graphql-yoga";
import query from "./api/resolvers/query";
import mutation from "./api/resolvers/mutation";
import user from "./api/resolvers/user";
import link from "./api/resolvers/link";

import { prisma } from "./generated/prisma-client";

const resolvers = { query, mutation, user, link };

const server = new GraphQLServer({
  typeDefs: "./api/schema.graphql",
  resolvers,
  context: request => {
    return {
      ...request,
      prisma
    };
  }
});

server.start(() =>
  console.log("Server up and running on http://localhost:4000 🚀")
);
