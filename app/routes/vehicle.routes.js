module.exports = (app) => {
  const vehicle = require("../controllers/vehicle.controller.js");

  var router = require("express").Router();

  // Create a new User
  router.post("/vehicle", vehicle.create);

  // Retrieve all Users
  router.get("/vehicle", vehicle.findAll);

  // Retrieve a single User with id
  router.get("/vehicle/:id", vehicle.findOne);

  // Update a User with id
  router.put("/vehicle/:id", vehicle.update);

  // Delete a User with id
  router.delete("/vehicle/:id", vehicle.delete);

  // Delete all Users
  router.delete("/vehicle", vehicle.deleteAll);

  app.use("/api", router);
};
