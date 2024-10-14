const { Router } = require("express")
const { AdminModel, CourseModel } = require("../db/index")
const { z } = require("zod")
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const AuthAdmin = require("../middlewares/admin.auth")

const adminRoutes = Router();


adminRoutes.post("/signup", async (req, res) => {
    const { lastName, firstName, email, password, adminId } = req.body;

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
        
        await AdminModel.create({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            adminId
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

adminRoutes.post("/signin", async (req, res) => {
    const { email, password } = req.body;

    const isPresent = await AdminModel.findOne({
        email: email
    })

    console.log();
    

    if(isPresent){
        const isPasswordCorrect = await bcrypt.compare(password, isPresent.password);

        if(isPasswordCorrect){

            const token = jwt.sign({
                id: isPresent._id.toString()
            }, process.env.JWT_ADMIN_SECRET);
    

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

adminRoutes.post('/create', AuthAdmin, async (req, res) => {
    const { title, description, domain, imageUrl, price, ownedBy } = req.body;

    const inputValid = z.object({
        title: z.string().min(3).max(100),
        description: z.string().min(3).max(100),
        domain: z.string().min(3).max(100),
        imageUrl: z.string().min(3).max(100),
        price: z.string().min(3).max(100),
        ownedBy: z.string().min(3).max(100)
    })

    const verify = inputValid.safeParse({
        title, description, domain, imageUrl, price, ownedBy
    })

    if(verify.success){
        await CourseModel.create({
            title,
            description,
            domain,
            imageUrl,
            price,
            ownedBy
        });

        res.json({
            "Message": "Course Created!"
        })
    }
    else{
        console.log(verify.error);

        res.status(403).json({
            "Message": "Invalid Input"
        })
    }
})

adminRoutes.delete('/delete-course', AuthAdmin, (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

adminRoutes.put('/add-content', AuthAdmin, (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

adminRoutes.get('/course/preview', AuthAdmin, (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

module.exports = {
    adminRoutes: adminRoutes
}