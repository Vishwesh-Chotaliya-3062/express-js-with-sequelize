const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");

const db = require("../models");
const User = db.user;

const passport = require("passport");
const passportJWT = require("passport-jwt");

let ExtractJwt = passportJWT.ExtractJwt;
let JwtStrategy = passportJWT.Strategy;
const bcrypt = require("bcryptjs");

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
app.use(passport.initialize());
app.use(bodyParser.json());
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
  const { UserName, Password } = req.body;
  if (UserName && Password) {
    let user = await getUser({ UserName: UserName });
    if (!user) {
      res.status(401).json({ message: "No such user found" });
    }

    bcrypt.compare(req.body.Password, user.Password, function (err, isMatch) {
      if (err) {
        throw err;
      } else if (!isMatch) {
        res.json({ msg: "Password doest not match" });
      } else {
        let payload = { id: user.UserID, name: user.UserName };
        let token = jwt.sign(payload, jwtOptions.secretOrKey);
        res.json({
          msg: "Hello there, This is your Authentication Token",
          token: token,
        });
      }
    });
  } else {
    res.status(401).json({ message: "Enter UserName and Password" });
  }
};
