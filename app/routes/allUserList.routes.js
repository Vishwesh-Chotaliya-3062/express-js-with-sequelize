module.exports = (app) => {
  const userList = require("../controllers/allUserList.controller.js");

  var router = require("express").Router();

  router.get("/userList", userList.findAll);

  app.use("/api", router);
};
