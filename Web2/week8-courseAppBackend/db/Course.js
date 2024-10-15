const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const CourseSchema = new Schema({
    title: String,
    description: String,
    domain: String,
    price: String,
    ownedBy: ObjectId,
    imageUrl: String
})

const CourseModel = mongoose.model('course', CourseSchema)

module.exports = CourseModel