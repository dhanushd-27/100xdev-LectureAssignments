const express = require("express")
const dotenv = require("dotenv")
// const { connectDb } = require("./db/index")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const { userRoutes, adminRoutes, courseRoutes } = require("./routes/index")

const app = express();

dotenv.config();

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/course-app`)
        console.log("Database Connected");
    } catch (error) {
        console.log("Something went wrong", error);
    }
})();

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/course", courseRoutes);


app.listen(3000, () => {
    console.log("Server connected!");
})