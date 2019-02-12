import { GraphQLServer } from "graphql-yoga";

const typeDefs = `
type Query {
  info: String!
}
`;

const resolvers = {
  Query: {
    info: () => "Pokemon API graphQL implementation"
  }
};

const server = new GraphQLServer({
  typeDefs,
  resolvers
});

server.start(() =>
  console.log("Server up and running on http://localhost:4000 🚀")
);
