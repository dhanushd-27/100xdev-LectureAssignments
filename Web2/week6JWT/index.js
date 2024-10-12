const express = require("express");
const jwt = require("jsonwebtoken")

const JWT_SECRET = "100xdev"

const app = express();

app.use(express.json());

let users = [];

// you can use it instead of jwt
function generateToken(usrname, password){
    const lowercaseAlphabet = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseAlphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const alphabet = lowercaseAlphabet + uppercaseAlphabet;
    let result = '';

    for (let i = 0; i < 10; i++) {
        const randomIndex = Math.floor(Math.random() * alphabet.length);
        result += alphabet.charAt(randomIndex);
    }

    return result;

}

app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    users.push({
        username: username,
        password: password
    });

    res.status(200).json({
        "Message": "User Created successfully"
    })
})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    let doesExist = false;
    let index = 0;

    users.forEach(user => {
        if(username === user.username && password === user.password){
            doesExist = true;
            return;
        }
        index++;
    });

    const token = jwt.sign(users[index].username, JWT_SECRET);
    users[index].token = token;

    console.log(users[index]);
    

    if(doesExist){
        res.status(200).json({
            "message": "login successfull",
            "token": token
        })
    }
    else{
        res.status(401).json({
            "message": "login failed!"
        })
    }
})

app.get('/me', (req, res) => {
    const token = req.headers.token;
    const foundUser = jwt.verify(token, JWT_SECRET);

    console.log(foundUser);
    
    const data = {
        username: foundUser
    }

    if(foundUser){
        res.status(200).json({
            data
        })
    }
    else{
        res.status(401).json({
            "message": "Invalid token"
        })
    }
})

app.listen(3000, () => {
    console.log("Server connected");
})