module.exports = (app) => {
  const states = require("../controllers/states.controller.js");

  var router = require("express").Router();

  // Import json file in states table
  router.get("/states", states.create);

  app.use("/api", router);
};
