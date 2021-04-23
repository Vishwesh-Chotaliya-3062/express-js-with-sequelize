const db = require("../models");
const User = db.user;

module.exports = (sequelize, Sequelize) => {
  var States = sequelize.define(
    "states",
    {
      StateID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      StateName: {
        type: Sequelize.STRING,
      },
      DateCreated: {
        type: Sequelize.STRING,
      },
      DateModified: {
        type: Sequelize.STRING,
      },
      Status: {
        type: Sequelize.STRING,
      },
    },

    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return States;
};
