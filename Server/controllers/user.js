const mongoose = require("mongoose");
const config = require("../config/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/user.js");

const db = config.DB_HOST;
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });

exports.register = async (req, res) => {
  if (await User.findOne({ email: req.body.email }))
    return res.status(401).send("Email is already use!");

  const salt = await bcrypt.genSalt(10);
  const hasPassword = await bcrypt.hash(req.body.password, salt);

  let user = new User({
    email: req.body.email,
    name: req.body.name,
    password: hasPassword,
    user_type_id: 0,
  });

  user
    .save()
    .then((registeredUser) => {
      let payload = {
        id: registeredUser._id,
        user_type_id: req.body.user_type_id || 0,
        user_name: req.body.name
      };
      const token = jwt.sign(payload, config.TOKEN_SECRET);
      res.cookie("auth-token", token).redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

exports.login = async (req, res) => {
  User.findOne({ email: req.body.email })
    .then(async (user) => {
      if (user) {
        const validPass = await bcrypt.compare(
          req.body.password,
          user.password
        );
        if (!validPass)
          return res.status(401).send("Mobile/Email or Password is wrong");

        let payload = { id: user._id, user_type_id: user.user_type_id, user_name: user.name };
        const token = jwt.sign(payload, config.TOKEN_SECRET);

        res.status(200).cookie("auth-token", token).redirect("/");
      } else {
        res.status(401).send("Invalid Email");
      }
    })
    .catch((err) => console.log(err));
};

exports.logout = async (req, res) => {
  res.clearCookie("auth-token");
  res.redirect("/");
};

exports.userEvent = (req, res) => {
  let events = [
    {
      _id: "1",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Auto Expo",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];
  res.json(events);
};

exports.adminEvent = (req, res) => {
  let specialEvents = [
    {
      _id: "1",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "2",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "3",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "4",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "5",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
    {
      _id: "6",
      name: "Auto Expo Special",
      description: "lorem ipsum",
      date: "2012-04-23T18:25:43.511Z",
    },
  ];
  res.json(specialEvents);
};
