const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: String,
    password: String,
    user_id: Number,
    name:String,
    user_type_id:Number,
    settings: Object
});

module.exports = mongoose.model('user', userSchema, 'users');