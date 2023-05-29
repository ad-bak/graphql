const User = require("../../models/User");

module.exports = {
  Mutation: {
    register(
      _,
      { registerInput: { username, email, password, confirmPassword } },
      context,
      info
    ) {},
  },
};
