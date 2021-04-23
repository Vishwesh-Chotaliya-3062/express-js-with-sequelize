const db = require("../models");
const States = db.states;
const User = db.user;
const VehicleRegistration = db.vehicleregistration;
const Vehicle = db.vehicle;
const { vehicle } = require("../models");

// Retrieve a selected info of single State with an statename

exports.findAll = (req, res) => {
  var StateName = req.params.StateName;

  States.belongsTo(User, {
    targetKey: "StateID",
    foreignKey: "StateID",
  });

  User.hasMany(States, {
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

  States.findAll({
    attributes: ["StateID", "StateName"],
    where: {
      StateName: StateName,
    },
    include: [
      {
        model: User,
        attributes: ["UserName"],
        include: [
          {
            model: VehicleRegistration,
            attributes: [
              "VehicleRegistrationID",
              "VehicleID",
              "UserID",
              "RegistrationDate",
              "ExpiryDate",
            ],
            include: [
              {
                model: Vehicle,
                attributes: ["VehicleID", "VehicleName", "VehicleType"],
              },
            ],
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
