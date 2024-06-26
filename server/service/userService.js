const { User } = require('../models/User');
const bcrypt = require("bcryptjs");
const { getUserToken } = require("../helpers/authHelper");

const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const checkUser = await User.findOne({ email });
    if (checkUser) {
      return res.status(409).json({
        message: "User already exists",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });
    return res.status(200).json({
      message: "User Created!",
      user,
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const checkUser = await User.findOne({ email });

    if (!checkUser) {
      return res.status(404).json({
        message: "Invalid credentials!",
      });
    }
    const isPassword = await bcrypt.compare(password, checkUser.password);
    if (isPassword) {
      const token = getUserToken(checkUser._id);
      return res.status(200).json({
        token,
        user: {
          email: checkUser.email,
          name: checkUser.name,
        },
      });
    }
    return res.status(404).json({
      message: "Invalid credentials!",
    });
  } catch (error) {
    return res.status(404).json({
      message: error.message,
    });
  }
};
module.exports = {
  createUser,
  login,
};