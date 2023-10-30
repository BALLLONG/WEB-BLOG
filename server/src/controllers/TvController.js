const { Tv } = require("../models");
module.exports = {
  // get all user
  async index(req, res) {
    try {
      const tvs = await Tv.findAll();
      res.send(tvs);
    } catch (err) {
      res.status(500).send({
        error: "The users information was incorrect",
      });
    }
  },
  // create user
  async create(req, res) {
    try {
      const tv = await Tv.create(req.body);
      res.send(tv.toJSON());
    } catch (err) {
      res.status(500).send({
        error: "Create user incorrect",
      });
    }
  },
  // edit user, suspend, active
  async put(req, res) {
    try {
      await Tv.update(req.body, {
        where: {
          id: req.params.tvId,
        },
      });
      res.send(req.body);
    } catch (err) {
      res.status(500).send({
        error: "Update user incorrect",
      });
    }
  },
  // delete user
  async remove(req, res) {
    try {
      const tv = await Tv.findOne({
        where: {
          id: req.params.tvId,
        },
      });

      if (!tv) {
        return res.status(403).send({
          error: "The tv information was incorrect",
        });
      }

      await tv.destroy();
      res.send(tv);
    } catch (err) {
      res.status(500).send({
        error: "The tv information was incorrect",
      });
    }
  },

  // get tv by id
  async show(req, res) {
    try {
      const tv = await Tv.findByPk(req.params.tvId);
      res.send(tv);
    } catch (err) {}
  },
};
