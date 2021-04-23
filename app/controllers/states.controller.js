const db = require("../models");
const States = db.states;
const User = db.user;
const VehicleRegistration = db.vehicleregistration;
const Vehicle = db.vehicle;
const Op = db.Sequelize.Op;
const fs = require("fs");
const { vehicle } = require("../models");

let rawdata = fs.readFileSync("state-list.json");
let input = JSON.parse(rawdata);

// Import json file in states table

exports.create = (req, res) => {
  let a = [];

  for (let customer of input) {
    let b = {};

    (b.StateID = customer.ID), (b.StateName = customer.StateName);
    b.DateCreated = customer.DateCreated;
    b.DateModified = customer.DateModified;
    b.Status = customer.Status;

    a.push(b);
  }

  States.sync().then(function () {
    return States.bulkCreate(a, {
      validate: true,
    })
      .then((data) => {
        res.status(200).send({
          message: "state-list.json file imported successfully.",
        });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).send({
          message:
            err.message || "Some error occurred while importing json file.",
        });
      });
  });
};

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
    attributes: ["UserID", "UserName", "StateID"],
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
