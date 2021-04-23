const db = require("../models");
const VehicleRegistration = db.vehicleregistration;
const Op = db.Sequelize.Op;

// Create and Save a new VehicleRegistration
exports.create = async (req, res) => {
  const vehicleregistration = {
    UserID: req.body.UserID,
    VehicleID: req.body.VehicleID,
    RegistrationDate: req.body.RegistrationDate,
    ExpiryDate: req.body.ExpiryDate,
  };

  VehicleRegistration.create(vehicleregistration)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while creating the VehicleRegistration.",
      });
    });
};

// Retrieve all VehicleRegistrations from the database.
exports.findAll = (req, res) => {
  const RegistrationDate = req.query.RegistrationDate;
  var condition = RegistrationDate
    ? {
        RegistrationDate: {
          [Op.like]: `%${RegistrationDate}%`,
        },
      }
    : null;

  VehicleRegistration.findAll({
    where: condition,
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while retrieving VehicleRegistrations.",
      });
    });
};

// Find a single VehicleRegistration with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  VehicleRegistration.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving VehicleRegistration with id=" + id,
      });
    });
};

// Update a VehicleRegistration by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  VehicleRegistration.update(req.body, {
    where: {
      VehicleRegistrationID: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "VehicleRegistration was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update VehicleRegistration with id=${id}. Maybe VehicleRegistration was not found or req.body is empty! or Maybe no change in data`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating VehicleRegistration with id=" + id,
      });
    });
};

// Delete a VehicleRegistration with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  VehicleRegistration.destroy({
    where: {
      VehicleRegistrationID: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message:
            "VehicleRegistration with id=" + id + " was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete VehicleRegistration with id=${id}. Maybe VehicleRegistration was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete VehicleRegistration with id=" + id,
      });
    });
};

// Delete all VehicleRegistrations from the database.
exports.deleteAll = (req, res) => {
  VehicleRegistration.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} VehicleRegistration were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message ||
          "Some error occurred while removing all VehicleRegistrations.",
      });
    });
};
