const mongoose = require("mongoose")

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const CourseSchema = new Schema({
    name: String,
    description: String,
    domain: String,
    price: String,
    ownedBy: ObjectId,
    imageUrl: String
})

const CourseModel = mongoose.model(CourseSchema, "course")

module.export = {
    CourseModel
}