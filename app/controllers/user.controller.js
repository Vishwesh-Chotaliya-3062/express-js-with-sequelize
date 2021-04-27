const db = require("../models");
const User = db.user;
const Op = db.Sequelize.Op;
const bcrypt = require("bcryptjs");
const saltRounds = 10;

// Create and Save a new User
exports.create = (req, res) => {
  // Validate request
  if (!req.body.UserName) {
    res.status(400).send({
      message: "UserName can not be empty!",
    });
    return;
  }

  if (!req.body.Email) {
    res.status(400).send({
      message: "Email can not be empty!",
    });
    return;
  }

  // Create a User
  const user = {
    UserName: req.body.UserName,
    Email: req.body.Email,
    Password: req.body.Password,
    StateID: req.body.StateID,
    Status: req.body.Status,
  };

  User.findOne({
    where: {
      Email: req.body.Email,
    },
  })
    .then((data) => {
      if (!data) {
        bcrypt.genSalt(saltRounds, function (err, salt) {
          if (err) {
            throw err;
          } else {
            bcrypt.hash(req.body.Password, salt, function (err, hash) {
              if (err) {
                throw err;
              } else {
                user.Password = hash;
                User.create(user)
                  .then((data) => {
                    res.json({
                      UserID: data.UserID,
                      UserName: data.UserName,
                      Email: data.Email,
                      StateID: data.StateID,
                      Status: data.Status,
                    });
                  })
                  .catch((err) => {
                    res.json({
                      error:
                        "USER WITH EMAIL = " + user.Email + " ALREADY EXISTS",
                    });
                  });
              }
            });
          }
        });
      } else {
        res.json({
          error:
            "USER WITH USERNAME = " + user.UserName + " ALREADY EXISTS",
        });
      }
    })
    .catch((err) => {
      res.send("ERROR: " + err);
    });
};

// Retrieve all Users from the database.
exports.findAll = (req, res) => {
  const UserName = req.query.UserName;
  var condition = UserName
    ? {
        UserName: {
          [Op.like]: `%${UserName}%`,
        },
      }
    : null;

  User.findAll({
    where: condition,
    attributes: ["UserID", "UserName", "Email", "StateID", "Status"],
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

// Find a single User with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  User.findByPk(id)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error retrieving User with id=" + id,
      });
    });
};

// Update a User by the id in the request
exports.update = (req, res) => {
  const id = req.params.id;

  User.update(req.body, {
    where: {
      UserID: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User was updated successfully.",
        });
      } else {
        res.send({
          message: `Cannot update User with id=${id}. Maybe User was not found or req.body is empty! or Maybe no change in data`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Error updating User with id=" + id,
      });
    });
};

// Delete a User with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  User.destroy({
    where: {
      UserID: id,
    },
  })
    .then((num) => {
      if (num == 1) {
        res.send({
          message: "User with id=" + id + " was deleted successfully!",
        });
      } else {
        res.send({
          message: `Cannot delete User with id=${id}. Maybe User was not found!`,
        });
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: "Could not delete User with id=" + id,
      });
    });
};

// Delete all Users from the database.
exports.deleteAll = (req, res) => {
  User.destroy({
    where: {},
    truncate: false,
  })
    .then((nums) => {
      res.send({
        message: `${nums} User were deleted successfully!`,
      });
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while removing all users.",
      });
    });
};

// find all published Users
exports.findAllPublished = (req, res) => {
  User.findAll({
    where: {
      Status: true,
    },
  })
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error occurred while retrieving users.",
      });
    });
};
