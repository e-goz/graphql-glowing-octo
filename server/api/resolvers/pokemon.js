const trainer = (parent, args, context) =>
  context.prisma.pokemon({ id: parent.id }).trainer();

module.expots = { trainer };
