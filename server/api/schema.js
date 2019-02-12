const typeDefs = `
type Query {
  info: String!,
  pokemons: [Pokemon]!,
  pokemon(id: ID!) : Pokemon!
}

type Mutation {
  newPokemon(name: String!, height: Int!): Pokemon!
}

type Pokemon {
  id: ID!,
  name: String!,
  height: Int!
}
`;

export default typeDefs;
