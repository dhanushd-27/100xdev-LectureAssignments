const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: {type: String, unique: true},
    password: String
})

const UserModel = mongoose.model('user', UserSchema)  // Collection name - users, Schema - UserSchema

module.exports = UserModel