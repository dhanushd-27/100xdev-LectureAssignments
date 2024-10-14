const { Router } = require("express")
const { AdminModel } = require("../db/index")
const { z } = require("zod")
const bcrypt = require("bcrypt")

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

adminRoutes.post("/signin", (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

adminRoutes.post('/create-course', (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

adminRoutes.delete('/delete-course', (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

adminRoutes.put('/add-content', (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

adminRoutes.get('/course/preview', (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

module.exports = {
    adminRoutes: adminRoutes
}