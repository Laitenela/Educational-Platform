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
    const courseUid = await Course.count({}) + 1;
    const course = new Course({
      author: req.user.user_name,
      author_id: req.user.id,
      title: req.body.title,
      picture: req.file?.filename,
      description: req.body.description,
      course_info: req.body.course_info,
      price: req.body.price,
      uid: courseUid,
    });

    course.save().then(() => {
      res.json({status: 'Ok!', uid: course.uid});
    })
  })
};

exports.courseInfo = async (req, res) => {
  const course = await Course.findOne({uid: req.query.id});
  res.json(course);
}

exports.getSorted = async (req, res) => {
  const courses = await Course.find({}).sort([['title', -1]]).limit(10);
  res.json(courses);
}