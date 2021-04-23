const db = require("../models");
const Vehicle = db.vehicle;
const Op = db.Sequelize.Op;

// Create and Save a new Vehicle
exports.create = async (req, res) => {
  // Create a Vehicle
  const vehicle = {
    VehicleName: req.body.VehicleName,
    VehicleType: req.body.VehicleType,
  };

  // Save Vehicle in the database
  Vehicle.create(vehicle)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Vehicle.",
      });
    });
};

// Retrieve all Vehicles or Retrieve Vehicles by VehicleName from the database.
exports.findAll = (req, res) => {
  const VehicleName = req.query.VehicleName;
  var condition = VehicleName
    ? {
        VehicleName: {
          [Op.like]: `%${VehicleName}%`,
        },
      }
    : null;

  Vehicle.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving Vehicle.",
      });
    });
};

// Find a single Vehicle with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Vehicle.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving Vehicle with id=" + id,
      });
    });
};

// Update a Vehicle by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  Vehicle.update(req.body, {
    where: {
      VehicleID: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Vehicle was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update Vehicle with id=${id}. Maybe Vehicle was not found or req.body is empty! or Maybe no change in data`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating Vehicle with id=" + id,
      });
    });
};

// Delete a Vehicle with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Vehicle.destroy({
    where: {
      VehicleID: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "Vehicle with id=" + id + " was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete Vehicle with id=${id}. Maybe Vehicle was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete Vehicle with id=" + id,
      });
    });
};

// Delete all Vehicles from the database.
exports.deleteAll = (req, res) => {
  Vehicle.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} Vehicle were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all Vehicles.",
      });
    });
};
