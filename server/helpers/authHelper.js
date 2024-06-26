const jwt = require("jsonwebtoken");
const getUserToken = (id) => {
  const authUserToken = jwt.sign({ id }, "secrettoken", {
    expiresIn: "7d",
  });
  return authUserToken;
};

module.exports = {
  getUserToken,
};