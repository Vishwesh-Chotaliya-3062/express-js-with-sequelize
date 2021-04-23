const db = require("./states.model");
const States = db.states;

module.exports = (sequelize, Sequelize) => {
  const User = sequelize.define(
    "user",
    {
      UserID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },

      UserName: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      Email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
        validate: {
          isEmail: true,
        },
      },
      Password: {
        type: Sequelize.STRING,
      },
      StateID: {
        type: Sequelize.INTEGER,
        references: {
          model: "states",
          key: "StateID",
        },
      },
      Status: {
        type: Sequelize.BOOLEAN,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return User;
};
