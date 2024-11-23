import { Request, Response } from "express";
import { signInInputValidation, signUpInputValidation } from "../utils/userInputValidation";
import { blog, signInbody, signUpbody, user } from "../types/types";
import bcrypt from 'bcryptjs';
import * as jwt from 'jsonwebtoken'
import UserModel from "../models/User";
import { ObjectId } from "mongodb";
import BlogModel from "../models/Blog";

const user_signup = async (req: Request, res: Response) => {
    const { username, email, password }: signUpbody = req.body;

    const isValid = signUpInputValidation({username, email, password})

    // Write it in a function
    if(!isValid.success){
        const issue = isValid.error.issues;
        let errorIn: (string | number)[] = [];

        issue.forEach(element => {
            errorIn.push(element.path[0]);
        });

        res.status(400).json({
            "Message": "Invalid Data",
            "Error": issue
        })

        return;
    }

    // Password hashed
    const hashedPassword: string = await bcrypt.hash(password, 5);

    // create a separate try catch handler
    try {
        await UserModel.create({
            username,
            email,
            password: hashedPassword
        });

        console.log("User created successfully");

        res.status(200).json({
            "Message": "User Sign Up Successfull"
        })

    } catch (error) {
        res.status(400).json({
            "Message": "Something went wrong",
            "Error": error
        })

        return;
    }
}

const user_signin = async (req: Request, res: Response) => {
    const { email, password }: signInbody = req.body;

    const isValid = signInInputValidation( {email, password} );

    // Find better way to handle erros
    if(!isValid.success){
        const issue = isValid.error.issues;
        let errorIn: (string | number)[] = [];

        issue.forEach(element => {
            errorIn.push(element.path[0]);
        });

        res.status(400).json({
            "Message": "Invalid Data",
            "Error": issue
        })
        
        return;
    }

    const isFound: user | null  = await UserModel.findOne({
        email: email,
    })

    if(isFound){
        const hashPassword: string = isFound.password;
        const id: ObjectId = isFound._id
        const isPasswordTrue: boolean = await bcrypt.compare(password, hashPassword);

        if(isPasswordTrue){
            const token: string = jwt.sign({ 
                email,
                id
            } ,`${process.env.JWT_SECRET}`);

            res.status(200).json({
                "Message": "Sign In Successfull",
                "token": token
            })
        }
        else{
            res.status(403).json({
                "Message": "Incorrect Password"
            })

            return;
        }
    }
}

const update_blog = async (req: Request, res: Response) => {
    const createdBy = req.cookies.id;
    const { _id, title, content }: blog = req.body

    const isSuccess = await BlogModel.updateOne({
        _id: _id,
        createdBy: createdBy
    }, {
        title: title,
        content: content
    })

    if(isSuccess.modifiedCount){
        const information = await BlogModel.findOne({
            _id: _id
        }) 
    
        res.status(200).json({
            "Message": "Data Updated Successfully",
            "Updated Blog": information
        })
    }
    else{
        res.status(403).json({
            "Message": "Unauthorized User"
        })

        return;
    }
}

const delete_blog = async (req: Request, res: Response) => {
    const id  = req.query.id;
    const createdBy = req.cookies.id;

    const isSuccess = await BlogModel.deleteOne({
        _id: id,
        createdBy
    })

    if(isSuccess.deletedCount){
        res.status(200).json({
            "Message": "Blog Deleted Successfully"
        })
    }
    else{
        res.status(403).json({
            "Message": "Unauthorized User"
        })

        return;
    }
}

export { user_signup, user_signin, update_blog, delete_blog }