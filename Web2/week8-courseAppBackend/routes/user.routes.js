const { Router } = require("express")

const userRoutes = Router();

userRoutes.post("/signup", (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

userRoutes.post("/signin", (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

userRoutes.get("/purchases", (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

module.exports = {
    userRoutes: userRoutes
}