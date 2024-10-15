const { Router } = require("express");
const { CourseModel, PurchaseModel } = require("../db");

const courseRoutes = Router();

courseRoutes.post("/purchase", async (req, res) => {
    const { courseId, userId } = req.body

    const isPurchased = await PurchaseModel.create({
        courseId,
        userId
    })

    if(isPurchased){
        res.json({
            "Message": "Purchase Successfull"
        })
    }
    else{
        res.status(400).json({
            "Message": "Purchase Failed"
        })
    }
})

courseRoutes.get("/preview", async (req, res) => {
    const courses = await CourseModel.find({});

    res.json({
        courses
    })
})

module.exports = {
    courseRoutes: courseRoutes
}