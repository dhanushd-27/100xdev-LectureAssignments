const express = require("express");
const { UserModel, TodoModel } = require("./db");
const { auth, JWT_SECRET } = require("./auth");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const { z } = require("zod")

mongoose.connect("mongodb+srv://dhanushsai2005:eOM3l9Z37oQg6zit@cluster0.fygye.mongodb.net/todos-db")

const app = express();
app.use(express.json());

app.post("/signup", async function(req, res) {

    const requireBody = z.object({
        email: z.string().min(3).max(100).email(),
        name: z.string().min(3).max(100),
        password: z.string().min(3).max(100)
    })

    const isBodyVaild = requireBody.safeParse(req.body)

    if(!isBodyVaild.success){
        res.json({
            "message": "Invalid body"
        })
        return
    }

    const email = req.body.email;
    const password = req.body.password;
    const name = req.body.name;

    try {

        const hashedPassword = await bcrypt.hash(password, 5);
        console.log(hashedPassword);

        await UserModel.create({
            email: email,
            password: hashedPassword,
            name: name
        });

        res.json({
            message: "You are signed up"
        })
    } catch (error) {
        res.status(409).json({
            "Message": "User Already Exists"
        })
    }
});


app.post("/signin", async function(req, res) {
    const email = req.body.email;
    const password = req.body.password;

    const response = await UserModel.findOne({
        email: email
    });

    const rightPass = await bcrypt.compare(password, response.password)

    if (rightPass) {
        const token = jwt.sign({
            id: response._id.toString()
        }, JWT_SECRET);

        res.json({
            token
        })
    } else {
        res.status(403).json({
            message: "Incorrect creds"
        })
    }
});


app.post("/todo", auth, async function(req, res) {
    const userId = req.userId;
    const title = req.body.title;
    const done = req.body.done;

    await TodoModel.create({
        userId,
        title,
        done
    });

    res.json({
        message: "Todo created"
    })
});


app.get("/todos", auth, async function(req, res) {
    const userId = req.userId;

    const todos = await TodoModel.find({
        userId
    });

    res.json({
        todos
    })
});

app.listen(3000);