"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.find_blogs = exports.list_blogs = exports.create_blog = void 0;
const Blog_1 = __importDefault(require("../models/Blog"));
const User_1 = __importDefault(require("../models/User"));
const create_blog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { title, content } = req.body;
    // People can go through your cookies and get your data change it
    const { id } = req.cookies;
    try {
        yield Blog_1.default.create({
            createdBy: id,
            title: title,
            content: content
        });
        res.status(200).json({
            "Message": "Blog Created Successfully"
        });
    }
    catch (error) {
        res.status(400).json({
            "Message": error
        });
    }
});
exports.create_blog = create_blog;
const list_blogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBlogs = yield Blog_1.default.find().populate('createdBy');
        res.send({
            "Message": "All Blogs fetched successfully",
            "Blogs": allBlogs
        });
    }
    catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }
});
exports.list_blogs = list_blogs;
const find_blogs = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const blogs = yield Blog_1.default.find({
        createdBy: id
    });
    const user = yield User_1.default.findOne({
        _id: id
    });
    console.log(blogs);
    res.status(200).json({
        "Blogs created by ": user === null || user === void 0 ? void 0 : user.username,
        "Blogs": blogs
    });
});
exports.find_blogs = find_blogs;
