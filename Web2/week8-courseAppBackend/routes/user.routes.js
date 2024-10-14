const { Router } = require("express")
const { UserModel } = require("../db/index")
const { z } = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const AuthUser = require("../middlewares/user.auth")

const userRoutes = Router();

userRoutes.post("/signup", async (req, res) => {
    const { lastName, firstName, email, password } = req.body;

    const UserVaild = z.object({
        firstName: z.string().min(3).max(100),
        lastName: z.string().min(3).max(100),
        email: z.string().min(3).max(50).email(),
        password: z.string()
        .min(8)
        .refine((password) => /[A-Z]/.test(password), { message: "Must contain at least one uppercase letter" })
        .refine((password) => /[a-z]/.test(password), { message: "Must contain at least one lowercase letter" })
        .refine((password) => /[0-9]/.test(password), { message: "Must contain at least one number" })
        .refine((password) => /[!@#$%^&*(),.?":{}|<>]/.test(password), { message: "Must contain at least one special character" })
    })

    const isValid = UserVaild.safeParse({
        lastName,
        firstName,
        email,
        password
    })

    if(isValid.success){

        const hashedPassword = await bcrypt.hash(password, 5);
        
        await UserModel.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        })

        res.json({
            "Message": "Successfull"
        })
    }
    else{
        res.status(400).json({
            "Message": "Invalid Input!",
            "Response": isValid.error
        })
    }
})

userRoutes.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const isPresent = await UserModel.findOne({
        email: email
    })

    console.log();
    

    if(isPresent){
        const isPasswordCorrect = await bcrypt.compare(password, isPresent.password);

        if(isPasswordCorrect){

            const token = jwt.sign({
                id: isPresent._id.toString()
            }, process.env.JWT_USER_SECRET);

            res.status(200).json({
                "Message": "User Found",
                "Data": {
                    "Email": isPresent.email,
                    "Token": token
                }
            })
        }
        else{
            res.status(400).json({
                "Message": "Incorrect Password"
            })
        }
    }
    else{
        res.status(401).json({
            "Message": "User not found!"
        })
    }
})

userRoutes.get("/purchases", AuthUser, (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

module.exports = {
    userRoutes: userRoutes
}