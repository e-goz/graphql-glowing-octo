const dummyPokemons = [
  {
    id: 0,
    name: "Psyduck",
    height: 154
  },
  {
    id: 1,
    name: "Ivysaur",
    height: 32
  }
];

let idCount = dummyPokemons.length;

const resolvers = {
  Query: {
    info: () => "Pokemon API graphQL implementation",
    pokemons: () => dummyPokemons,
    pokemon: (parent, args) => dummyPokemons[args.id]
  },
  Mutation: {
    newPokemon: (parent, args) => {
      const pokemon = {
        id: idCount++,
        name: args.name,
        height: args.height
      };
      dummyPokemons.push(pokemon);
      return pokemon;
    }
  }
};

export default resolvers;
