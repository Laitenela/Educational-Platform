const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const lessonSchema = new Schema({
  uid: Number,
  author: String,
  course_id: Number,
  title: String,
  picture: String,
  description: String,
  layout: String,
});

module.exports = mongoose.model('lesson', lessonSchema, 'lessons');

// const lesson = new Lesson({
//   uid: lessonUid,
//   author: req.user.user_name,
//   course_id: req.body.course_id,
//   title: req.body.title,
//   picture: req.file?.filename,
//   description: req.body.description,
//   layout: req.body.layout,
// });