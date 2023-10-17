const { User } = require("../models");
const config = require("../config/config");
const jwt = require("jsonwebtoken");

function jwtSignUser(user) {
  const ONE_WEEK = 60 * 60 * 24 * 7;
  return jwt.sign(user, config.authentication.jwtSecret, {
    expiresIn: ONE_WEEK,
  });
}

module.exports = {
  async register(req, res) {
    try {
      const user = await User.create(req.body);
      res.send(user.toJSON());
    } catch (error) {
      res.status(400).send({
        error: "The content information was incorrect",
      });
    }
  },

  async login(req, res) {
    try {
      const { email, password } = req.body;
      const user = await User.findOne({
        where: {
          email: email,
        },
      });
      if (!user) {
        return res.status(403).send({
          error: "User/Password not correct",
        });
      }

      const isPasswordValid = await user.comparePassword(password);
      if (!isPasswordValid) {
        return res.status(403).send({
          error: "User/Password not correct",
        });
      }

      // Use user.toJSON() to convert the user object to JSON
      res.send({
        user: user.toJSON(),
        token: jwtSignUser(user.toJSON()), // sending JSON Web Token along with user data
      });
    } catch (error) {
      res.status(500).send({
        error: "Error! from get user",
      });
    }
  },
};
