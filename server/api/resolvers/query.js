const info = () => "Pokemon API graphQL implementaton";
const pokemons = (root, args, context, info) => context.prisma.pokemons();

module.exports = {
  info,
  pokemons
};
