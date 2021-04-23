module.exports = (app) => {
  const listByStateName = require("../controllers/listByStateName.controller.js");

  var router = require("express").Router();

  router.get("/listByStateName/:StateName", listByStateName.findAll);

  app.use("/api", router);
};
