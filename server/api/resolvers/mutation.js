const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { APP_SECRET, getUserId } = require("../../utils");

const signup = async (parent, args, context, info) => {
  const password = await bcrypt.hash(args.passwrd, 10);
  const user = await context.prisma.createUser({ ...args, password });
  const token = jwt.sign({ userId: user.id }, APP_SECRET);
  return { token, user };
};

const login = async (parent, args, context, info) => {
  const user = await context.prisma.user({ email: args.email });
  if (!user) {
    throw new Error("No such user");
  }

  const valid = await bcrypt.comapre(args.password, user.password);
  if (!valid) {
    throw new Error("The password is invalid");
  }

  const token = jwt.sign({ userId: user.id }, APP_SECRET);

  return { token, user };
};

const newPokemon = (parents, args, context, info) => {
  const id = getUserId(context);
  return context.prisma.createLink({
    url: args.url,
    description: args.description,
    trainer: { connect: { id } }
  });
};

module.exports = { signup, login, newPokemon };
