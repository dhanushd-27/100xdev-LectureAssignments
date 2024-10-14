const jwt = require("jsonwebtoken")

function AuthAdmin(req, res, next){
    const { token } = req.headers

    try {
        jwt.verify(token, process.env.JWT_ADMIN_SECRET);

        next();
    } catch (error) {
        res.status(403).json({
            "Message": "Unauthorized User!"
        })

        console.log("Something went wrong", error);
    }

    // const isAuth = jwt.verify(token, process.env.JWT_ADMIN_SECRET)

    // if(isAuth){
    //     console.log("He is a Admin");

    //     next();
    // }
    // else{
    //     res.status(403).json({
    //         "Message": "Unauthorized User!"
    //     })
    // }
}

module.exports = AuthAdmin