"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const Schema = mongoose_1.default.Schema;
const ObjectId = Schema.ObjectId;
const BlogSchema = new Schema({
    createdBy: { type: ObjectId, ref: 'users' },
    title: String,
    content: String,
});
const BlogModel = mongoose_1.default.model("blogs", BlogSchema);
exports.default = BlogModel;
