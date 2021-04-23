module.exports = (app) => {
  const userAuth = require("../helpers/userAuthentication.helper");

  var router = require("express").Router();

  // Import json file in states table
  router.post("/login", userAuth.userAuthentication);

  app.use("/api", router);
};
