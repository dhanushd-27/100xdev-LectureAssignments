import mongoose from "mongoose";

const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId

const BlogSchema = new Schema({
    createdBy: {type: ObjectId, ref: 'users'},
    title: String,
    content: String,
})

const BlogModel = mongoose.model("blogs", BlogSchema);

export default BlogModel;