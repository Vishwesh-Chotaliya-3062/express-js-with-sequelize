const dbConfig = require("../config/db.config.js");
const Json2csvParser = require("json2csv").Parser;
const json2csvParser = new Json2csvParser({ header: true });
const fs = require("fs");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle,
  },
});

exports.generateCSV = async (req, res, next) => {
  try {
    const data = await sequelize.query(
      `SELECT 
      user.UserName,
      user.Status,
      user.Email,
      vehicle.VehicleID,
      vehicle.VehicleName,
      vehicleregistration.RegistrationDate,
      vehicleregistration.ExpiryDate
    FROM user
    JOIN vehicleregistration
      ON vehicleregistration.UserID = user.UserID
    JOIN vehicle
      ON vehicleregistration.VehicleID = vehicle.VehicleID
      where user.Status  = 1`,
      {
        type: sequelize.QueryTypes.SELECT,
      }
    );
    
    const csv = json2csvParser.parse(data);
    fs.writeFile(
      `../express-js-with-sequelize/Export To CSV/ExportToCSV.csv`,
      csv,
      (error) => {
        if (error) {
          return res.status(500).json(error.message);
        } else {
          return res
            .status(200)
            .json(`JSON file Exported as CSV Successfully`);
        }
      }
    );
  } catch (error) {
    return res.status(500).json(error.message);
  }
};
