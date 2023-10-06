const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const courseSchema = new Schema({
    author: String,
    author_id: String,
    title: String,
    picture: String,
    description: String,
    course_info: String,
    price: Number,
    uid: Number
});

module.exports = mongoose.model('course', courseSchema, 'courses');