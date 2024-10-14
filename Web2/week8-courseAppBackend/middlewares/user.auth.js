const jwt = require("jsonwebtoken")

function AuthUser(req, res, next){
    const { token } = req.headers

    try {
        jwt.verify(token, process.env.JWT_USER_SECRET);

        next();
    } catch (error) {
        res.status(403).json({
            "Message": "Unauthorized User!"
        })

        console.log("Something went wrong", error);
    }

    // const isAuth = jwt.verify(token, process.env.JWT_USER_SECRET)

    // console.log(isAuth);
    
    // if(isAuth){
    //     console.log("He is a Authorized User");

    //     next();
    // }
    // else{
    //     res.status(403).json({
    //         "Message": "Unauthorized User!"
    //     })
    // }
}

module.exports = AuthUser