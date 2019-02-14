const resolvers = {
  Query: {
    info: () => "Pokemon API graphQL implementation",
    pokemons: (root, args, context, info) => context.prisma.pokemons()
    // pokemon: (parent, args) => dummyPokemons[args.id]
  },
  Mutation: {
    newPokemon: (root, args, context) => {
      return context.prisma.createPokemon({
        name: args.name,
        height: args.height
      });
    }
  }
};

export default resolvers;
