const { Router } = require("express")

const adminRoutes = Router();

adminRoutes.post("/signin", (req, res) => {
    res.json({
        "Message": "Successfull"
    })
})

adminRoutes.post("/signup", (req, res) => {
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