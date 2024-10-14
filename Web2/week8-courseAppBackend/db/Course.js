const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const CourseSchema = new Schema({
    name: String,
    domain: String,
    ownedBy: String,
})