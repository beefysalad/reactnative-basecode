const jwt = require("jsonwebtoken");
const { User } = require("../models/User");
const authMiddleware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;
    if (!authorization) {
      return res.status(401).json({
        error: "Not Authorized!",
      });
    }
    const token = authorization;
    const { id } = jwt.verify(token, "secrettoken");

    const userExist = await User.findById({ _id: id });
    if (!userExist) {
      return res.status(400).json({
        error: "User does not exists!",
      });
    }
    req.user = userExist.id;
    next();
  } catch (error) {
    return res.status(400).json({
      error: error.message,
    });
  }
};

module.exports = {
  authMiddleware,
};