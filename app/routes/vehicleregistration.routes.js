module.exports = (app) => {
  const vehicleregistration = require("../controllers/vehicleregistration.controller.js");

  var router = require("express").Router();

  // Create a new VehicleRegistration
  router.post("/vehicleregistration", vehicleregistration.create);

  // Retrieve all VehicleRegistrations
  router.get("/vehicleregistration", vehicleregistration.findAll);

  // Retrieve a single VehicleRegistration with id
  router.get("/vehicleregistration/:id", vehicleregistration.findOne);

  // Update a VehicleRegistration with id
  router.put("/vehicleregistration/:id", vehicleregistration.update);

  // Delete a VehicleRegistration with id
  router.delete("/vehicleregistration/:id", vehicleregistration.delete);

  // Delete all VehicleRegistrations
  router.delete("/vehicleregistration", vehicleregistration.deleteAll);

  app.use("/api", router);
};
