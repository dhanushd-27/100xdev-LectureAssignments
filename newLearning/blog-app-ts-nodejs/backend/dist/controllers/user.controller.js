"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.delete_blog = exports.update_blog = exports.user_signin = exports.user_signup = void 0;
const userInputValidation_1 = require("../utils/userInputValidation");
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jwt = __importStar(require("jsonwebtoken"));
const User_1 = __importDefault(require("../models/User"));
const Blog_1 = __importDefault(require("../models/Blog"));
const user_signup = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, email, password } = req.body;
    const isValid = (0, userInputValidation_1.signUpInputValidation)({ username, email, password });
    // Write it in a function
    if (!isValid.success) {
        const issue = isValid.error.issues;
        let errorIn = [];
        issue.forEach(element => {
            errorIn.push(element.path[0]);
        });
        res.status(400).json({
            "Message": "Invalid Data",
            "Error": issue
        });
        return;
    }
    // Password hashed
    const hashedPassword = yield bcryptjs_1.default.hash(password, 5);
    // create a separate try catch handler
    try {
        yield User_1.default.create({
            username,
            email,
            password: hashedPassword
        });
        console.log("User created successfully");
        res.status(200).json({
            "Message": "User Sign Up Successfull"
        });
    }
    catch (error) {
        res.status(400).json({
            "Message": "Something went wrong",
            "Error": error
        });
        return;
    }
});
exports.user_signup = user_signup;
const user_signin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    const isValid = (0, userInputValidation_1.signInInputValidation)({ email, password });
    // Find better way to handle erros
    if (!isValid.success) {
        const issue = isValid.error.issues;
        let errorIn = [];
        issue.forEach(element => {
            errorIn.push(element.path[0]);
        });
        res.status(400).json({
            "Message": "Invalid Data",
            "Error": issue
        });
        return;
    }
    const isFound = yield User_1.default.findOne({
        email: email,
    });
    if (isFound) {
        const hashPassword = isFound.password;
        const id = isFound._id;
        const isPasswordTrue = yield bcryptjs_1.default.compare(password, hashPassword);
        if (isPasswordTrue) {
            const token = jwt.sign({
                email,
                id
            }, `${process.env.JWT_SECRET}`);
            res.status(200).json({
                "Message": "Sign In Successfull",
                "token": token
            });
        }
        else {
            res.status(403).json({
                "Message": "Incorrect Password"
            });
            return;
        }
    }
});
exports.user_signin = user_signin;
const update_blog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const createdBy = req.cookies.id;
    const { _id, title, content } = req.body;
    const isSuccess = yield Blog_1.default.updateOne({
        _id: _id,
        createdBy: createdBy
    }, {
        title: title,
        content: content
    });
    if (isSuccess.modifiedCount) {
        const information = yield Blog_1.default.findOne({
            _id: _id
        });
        res.status(200).json({
            "Message": "Data Updated Successfully",
            "Updated Blog": information
        });
    }
    else {
        res.status(403).json({
            "Message": "Unauthorized User"
        });
        return;
    }
});
exports.update_blog = update_blog;
const delete_blog = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.query.id;
    const createdBy = req.cookies.id;
    const isSuccess = yield Blog_1.default.deleteOne({
        _id: id,
        createdBy
    });
    if (isSuccess.deletedCount) {
        res.status(200).json({
            "Message": "Blog Deleted Successfully"
        });
    }
    else {
        res.status(403).json({
            "Message": "Unauthorized User"
        });
        return;
    }
});
exports.delete_blog = delete_blog;
