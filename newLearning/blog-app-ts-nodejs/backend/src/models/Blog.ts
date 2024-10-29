import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const BlogSchema = new Schema({
    createdBy: ObjectId,
    title: String,
    content: String,
})

const BlogModel = mongoose.model("blogs", BlogSchema);

export default BlogModel;