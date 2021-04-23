module.exports = (sequelize, Sequelize) => {
  var Vehicle = sequelize.define(
    "vehicle",
    {
      VehicleID: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      VehicleName: {
        type: Sequelize.STRING,
      },
      VehicleType: {
        type: Sequelize.STRING,
      },
    },

    {
      freezeTableName: true,
      timestamps: false,
    }
  );

  return Vehicle;
};
