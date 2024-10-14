const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const AdminSchema = new Schema({
    firstName: String,
    email: {type: String, unique: true},
    password: String,
    adminId: {type: String, unique: true}
})

const AdminModel = mongoose.Model(AdminSchema, "admin");

module.exports = AdminModel