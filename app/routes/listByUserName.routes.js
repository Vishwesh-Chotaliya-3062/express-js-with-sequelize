module.exports = (app) => {
  const listByUserName = require("../controllers/listByUserName.contoller");

  var router = require("express").Router();

  router.get("/listByUserName/:UserName", listByUserName.findAll);

  app.use("/api", router);
};
