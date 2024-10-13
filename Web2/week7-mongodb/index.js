const express = require("express")
const { UserModel, TodoModel } = require("./db/db.js")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")

const app = express();

mongoose.connect("mongodb+srv://dhanushsai2005:eOM3l9Z37oQg6zit@cluster0.fygye.mongodb.net/todos-db")
app.use(express.json());

const JWT_SECRET = "baarish"

function auth(req, res, next) {
    const token = req.headers.token;

    const response = jwt.verify(token, JWT_SECRET);

    if (response) {
        req.userId = response.id;
        next();
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
}

app.post("/signup", async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const email = req.body.email;

    const user = await UserModel.create({
        name: username,
        password: password,
        email: email
    })

    if(user){
        res.json({
            "message": "User create successfully"
        })
    }
    else{
        res.json({
            "message": "Something went wrong!"
        })
    }
})

app.post("/signin", async (req, res) => {
    const password = req.body.password;
    const email = req.body.email;

    const user = await UserModel.findOne({
        email: email,
        password: password
    })

    console.log(user);

    if(user){
        const token = jwt.sign({
            id: user._id
        }, JWT_SECRET);

        res.json({
            token: token
        })
    }
    else{
        res.status(401).json({
            "message": "User not found"
        })
    }

})

app.post("/todo", auth, async (req, res) => {
    const userId = req.userId;
    const title = req.body.title;
    
    const data = await TodoModel.create({
        title: title,
        userId: userId
    })

    if(data){
        res.status(200).json({
            data
        })
    }
    else{
        res.status(403).json({
            "message": "Something went wrong"
        })
    }
})

app.get("/todos", auth, async (req, res) => {
    const userId = req.body.userId;

    const todos = await TodoModel.findOne({
        userId: userId
    });

    if(todos){
        res.status(200).json({
            todos
        })
    }
    else{
        res.status(403).json({
            "message": "user not found"
        })
    }
})

app.listen(3000, () => {
    console.log("Server connected successfully");
})