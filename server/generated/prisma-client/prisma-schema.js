module.exports = {
        typeDefs: /* GraphQL */ `type AggregatePokemon {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createPokemon(data: PokemonCreateInput!): Pokemon!
  updatePokemon(data: PokemonUpdateInput!, where: PokemonWhereUniqueInput!): Pokemon
  updateManyPokemons(data: PokemonUpdateManyMutationInput!, where: PokemonWhereInput): BatchPayload!
  upsertPokemon(where: PokemonWhereUniqueInput!, create: PokemonCreateInput!, update: PokemonUpdateInput!): Pokemon!
  deletePokemon(where: PokemonWhereUniqueInput!): Pokemon
  deleteManyPokemons(where: PokemonWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Pokemon {
  id: ID!
  createdAt: DateTime!
  name: String!
  height: Int!
}

type PokemonConnection {
  pageInfo: PageInfo!
  edges: [PokemonEdge]!
  aggregate: AggregatePokemon!
}

input PokemonCreateInput {
  name: String!
  height: Int!
}

type PokemonEdge {
  node: Pokemon!
  cursor: String!
}

enum PokemonOrderByInput {
  id_ASC
  id_DESC
  createdAt_ASC
  createdAt_DESC
  name_ASC
  name_DESC
  height_ASC
  height_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PokemonPreviousValues {
  id: ID!
  createdAt: DateTime!
  name: String!
  height: Int!
}

type PokemonSubscriptionPayload {
  mutation: MutationType!
  node: Pokemon
  updatedFields: [String!]
  previousValues: PokemonPreviousValues
}

input PokemonSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PokemonWhereInput
  AND: [PokemonSubscriptionWhereInput!]
  OR: [PokemonSubscriptionWhereInput!]
  NOT: [PokemonSubscriptionWhereInput!]
}

input PokemonUpdateInput {
  name: String
  height: Int
}

input PokemonUpdateManyMutationInput {
  name: String
  height: Int
}

input PokemonWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  name: String
  name_not: String
  name_in: [String!]
  name_not_in: [String!]
  name_lt: String
  name_lte: String
  name_gt: String
  name_gte: String
  name_contains: String
  name_not_contains: String
  name_starts_with: String
  name_not_starts_with: String
  name_ends_with: String
  name_not_ends_with: String
  height: Int
  height_not: Int
  height_in: [Int!]
  height_not_in: [Int!]
  height_lt: Int
  height_lte: Int
  height_gt: Int
  height_gte: Int
  AND: [PokemonWhereInput!]
  OR: [PokemonWhereInput!]
  NOT: [PokemonWhereInput!]
}

input PokemonWhereUniqueInput {
  id: ID
}

type Query {
  pokemon(where: PokemonWhereUniqueInput!): Pokemon
  pokemons(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Pokemon]!
  pokemonsConnection(where: PokemonWhereInput, orderBy: PokemonOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PokemonConnection!
  node(id: ID!): Node
}

type Subscription {
  pokemon(where: PokemonSubscriptionWhereInput): PokemonSubscriptionPayload
}
`
      }
    