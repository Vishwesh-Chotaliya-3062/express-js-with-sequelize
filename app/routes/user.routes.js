module.exports = (app) => {
  const user = require("../controllers/user.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/user", user.create);

  // Retrieve all Users
  router.get("/user", user.findAll);

  // Retrieve all Users with Status True
  router.get("/user/active", user.findAllPublished);

  // Retrieve a single User with id
  router.get("/user/:id", user.findOne);

  // Update a User with id
  router.put("/user/:id", user.update);

  // Delete a User with id
  router.delete("/user/:id", user.delete);

  // Delete all Users
  router.delete("/user", user.deleteAll);

  app.use("/api", router);
};
