const db = require("../models");
const User = db.user;
const VehicleRegistration = db.vehicleregistration;
const Vehicle = db.vehicle;
const { vehicle } = require("../models");
const jwt_decode = require("jwt-decode");
const { use } = require("passport");

exports.userAuthorization = async function (req, res, next) {
  var token = req.header("authorization");
  var decoded = jwt_decode(token);
  console.log(decoded);
  var username = decoded.name;

  await VehicleRegistration.belongsTo(vehicle, {
    targetKey: "VehicleID",
    foreignKey: "VehicleID",
  });

  await Vehicle.hasMany(VehicleRegistration, {
    foreignKey: "VehicleID",
  });

  await User.belongsTo(VehicleRegistration, {
    targetKey: "UserID",
    foreignKey: "UserID",
  });

  await VehicleRegistration.hasMany(User, {
    foreignKey: "UserID",
  });

  await User.findAll({
    attributes: ["UserID", "UserName"],
    where: {
      UserName: username,
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
        message:
          err.message || "Welcome Some error occurred while retrieving Users.",
      });
    });
};
