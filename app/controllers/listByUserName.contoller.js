const db = require("../models");
const User = db.user;
const VehicleRegistration = db.vehicleregistration;
const Vehicle = db.vehicle;
const { vehicle } = require("../models");

// Retrieve a selected info of single User with an username

exports.findAll = (req, res) => {
  const UserName = req.params.UserName;

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
    attributes: ["UserID", "UserName"],
    where: {
      UserName: UserName,
    },
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
