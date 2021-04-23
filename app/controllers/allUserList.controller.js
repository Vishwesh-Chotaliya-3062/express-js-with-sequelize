const db = require("../models");
const States = db.states;
const User = db.user;
const VehicleRegistration = db.vehicleregistration;
const Vehicle = db.vehicle;
const { vehicle } = require("../models");

// Retrieve selected info of all Users from the database.

exports.findAll = (req, res) => {
  User.belongsTo(States, {
    targetKey: "StateID",
    foreignKey: "StateID",
  });

  States.hasMany(User, {
    foreignKey: "StateID",
  });

  VehicleRegistration.belongsTo(vehicle, {
    targetKey: "VehicleID",
    foreignKey: "VehicleID",
  });

  Vehicle.hasMany(VehicleRegistration, {
    foreignKey: "VehicleID",
  });

  User.belongsTo(VehicleRegistration, {
    targetKey: "UserID",
    foreignKey: "UserID",
  });

  VehicleRegistration.hasMany(User, {
    foreignKey: "UserID",
  });

  User.findAll({
    attributes: ["UserID", "UserName", "Email", "StateID"],
    order: ["UserID"],
    include: [
      {
        model: States,
        attributes: ["StateID", "StateName"],
      },
      {
        model: VehicleRegistration,
        attributes: ["VehicleRegistrationID", "VehicleID", "UserID"],

        include: [
          {
            model: Vehicle,
            attributes: ["VehicleID", "VehicleName", "VehicleType"],
          },
        ],
      },
    ],
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Users.",
      });
    });
};
