const pokemons = (parent, args, context) =>
  context.prisma.user({ id: parent.id }).pokemons();

module.exports = { pokemons };
