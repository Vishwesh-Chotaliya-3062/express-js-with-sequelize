const userAuthorize = require("../helpers/userAuthorization.helper");
const passport = require("passport");

module.exports = (app) => {
  var router = require("express").Router();

  router.get("/protected", passport.authenticate("jwt", { session: false }), userAuthorize.userAuthorization);

  app.use("/api", router);
};
