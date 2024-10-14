const { Router } = require("express")

const courseRoutes = Router();

courseRoutes.post("/purchase", (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

courseRoutes.get("/preview", (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

module.exports = {
    courseRoutes: courseRoutes
}