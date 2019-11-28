const { getUserId } = require("../utils");

const Query = {
  user(parent, args, context) {
    const id = getUserId(context);
    return context.prisma.user({ id });
  }
};

module.exports = { Query };
