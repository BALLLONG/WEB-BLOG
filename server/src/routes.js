const UserController = require("./controllers/UserController");
const UserAuthenController = require("./controllers/UserAuthenController");
const isAuthenController = require('./authen/isAuthenController')
const TvController = require("./controllers/TvController");

module.exports = (app) => {
  /* RESFUL Api for users management */
  // get all user
  app.get("/users", isAuthenController, UserController.index),
    // create user
    app.post("/user", UserController.create),
    // edit user, suspend, active
    app.put("/user/:userId", UserController.put);
  // delete user
  app.delete("/user/:userId", UserController.remove);
  // get user by id
  app.get("/user/:userId", UserController.show);

  app.post("/login", UserAuthenController.login);

  app.get("/tvs", isAuthenController, TvController.index),
    // create user
    app.post("/tv", TvController.create),
    // edit user, suspend, active
    app.put("/tv/:tvId", TvController.put);
  // delete user
  app.delete("/tv/:tvId", TvController.remove);
  // get user by id
  app.get("/tv/:tvId", TvController.show);

};
