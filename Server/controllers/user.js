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
  const userUid = await User.count({});
  let user = new User({
    email: req.body.email,
    user_id: userUid + 1,
    name: req.body.name,
    password: hasPassword,
    user_type_id: 0,
    settings: { avatar: null }
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

exports.updateSettings = async (req, res, next) => {
  req.user.settings = req.body;
  if(req.file?.fieldname) req.user.settings.avatar = req.file.filename;

  const user = await User.findOne({_id: req.user.id});
  for(let key of Object.keys(user.settings)){
    if(key in req.user.settings) continue;
    req.user.settings[key] = user.settings[key];
  }

  const result = await User.findOneAndUpdate({_id: req.user.id}, req.user);

  next();
}

exports.userInfo = async (req, res) => {
  User.findOne({_id: req.user.id}).then(async (user) => {
    if(user){
      const userInfo = {
        name: user.name,
        user_id: user.user_id,
        settings: user.settings
      }
      res.json(userInfo);
    } else {
      res.end('Error!');
    }
  })
}