const mongoose = require("mongoose");
const config = require("../config/config");
const Course = require("../models/course");
const Lesson = require("../models/lesson");

const db = config.DB_HOST;
mongoose.connect(db, {useNewUrlParser: true, useUnifiedTopology: true})
  .then(() => {console.log("Connected to MongoDB")})
  .catch((err) => {console.log(err)});

exports.create = async (req, res, next) => {
  const course = await Course.findOne({ uid: req.body.course_id });
  const lessonUid = (await Lesson.count({})) + 1;
  const lesson = new Lesson({
    uid: lessonUid,
    author: req.user.user_name,
    course_id: req.body.course_id,
    title: req.body.title,
    picture: req.file?.filename,
    description: req.body.description,
    layout: req.body.layout,
  });

  course.lessons.push(lesson.uid);
  await course.save();
  await lesson.save();
  next();
};