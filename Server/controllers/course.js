const mongoose = require("mongoose");
const config = require("../config/config");
const User = require("../models/user.js");
const Course = require("../models/course");

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

exports.create = async (req, res) => {
  User.findOne({_id: req.user.id}).then(async (user) => {
    if(!user) return;
    const course = new Course({
      author: req.user.user_name,
      author_id: req.user.id,
      title: req.body.title,
      picture: req.body.picture,
      description: req.body.description,
      course_info: req.body.course_info,
      price: req.body.price
    });

    course.save().then(() => {
      res.end('ok!');
    })
  })
};