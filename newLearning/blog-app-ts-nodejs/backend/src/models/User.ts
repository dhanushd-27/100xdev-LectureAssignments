import mongoose from "mongoose";

const Schema = mongoose.Schema;

const UserSchema = new Schema({
    username: String,
    email: { type: String, unique: true },
    password: String
})

const UserModel = mongoose.model("users", UserSchema);

export default UserModel;