const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

const db = require("./app/models");

db.sequelize.sync();
// drop the table if it already exists
// db.sequelize.sync({ force: true }).then(() => {
//   console.log("Drop and re-sync db.");
// });

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to application." });
});
require("./app/routes/states.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/vehicle.routes")(app);
require("./app/routes/vehicleregistration.routes")(app);
require("./app/routes/alluserList.routes")(app);
require("./app/routes/listByUserName.routes")(app);
require("./app/routes/listByStateName.routes")(app);
require("./app/routes/exportToCSV.routes")(app);
require("./app/routes/userAuthentication.router")(app);
require("./app/routes/userAuthorization.router")(app);

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
