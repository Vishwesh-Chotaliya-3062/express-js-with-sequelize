const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const db = require("../models");
const User = db.user;

const passport = require("passport");
const passportJWT = require("passport-jwt");

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;

let jwtOptions = {};
jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
jwtOptions.secretOrKey = "mysecretkey";

// lets create our strategy for web token
let strategy = new JwtStrategy(jwtOptions, function (jwt_payload, next) {
  console.log("payload received", jwt_payload);
  let user = getUser({ UserID: jwt_payload.id });

  if (user) {
    next(null, user);
  } else {
    next(null, false);
  }
});

// use the strategy
passport.use(strategy);

const app = express();
// initialize passport with express
app.use(passport.initialize());

// parse application/json
app.use(bodyParser.json());
//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

const Sequelize = require("sequelize");

// initialze an instance of Sequelize
const sequelize = new Sequelize({
  database: "temp",
  username: "root",
  password: "",
  dialect: "mysql",
});

// check the databse connection
sequelize
  .authenticate()
  .then(() => console.log("Connection has been established successfully."))
  .catch((err) => console.error("Unable to connect to the database:", err));

const getUser = async (obj) => {
  return await User.findOne({
    where: obj,
  });
};

exports.userAuthentication = async function (req, res, next) {
  const { name, password } = req.body;
  if (name && password) {
    let user = await getUser({ UserName: name });
    if (!user) {
      res.status(401).json({ message: "No such user found" });
    }
    if (user.Password === password) {
      // from now on we'll identify the user by the id and the id is the
      // only personalized value that goes into our token
      let payload = { id: user.UserID, name: user.UserName };
      let token = jwt.sign(payload, jwtOptions.secretOrKey);
      res.json({ msg: "ok", token: token });
    } else {
      res.status(401).json({ msg: "Password is incorrect" });
    }
  }
};

