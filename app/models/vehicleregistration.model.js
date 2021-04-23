module.exports = (sequelize, Sequelize) => {
  var VehicleRegistration = sequelize.define(
    "vehicleregistration",
    {
      VehicleRegistrationID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      UserID: {
        type: Sequelize.INTEGER,
        references: {
          model: "user",
          key: "UserID",
        },
      },
      VehicleID: {
        type: Sequelize.INTEGER,
        references: {
          model: "vehicle",
          key: "VehicleID",
        },
      },
      RegistrationDate: {
        type: Sequelize.STRING,
      },
      ExpiryDate: {
        type: Sequelize.STRING,
      },
    },
    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return VehicleRegistration;
};
