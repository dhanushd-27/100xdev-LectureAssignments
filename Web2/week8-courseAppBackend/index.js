const express = require("express")
const jwt = require("jsonwebtoken")
const mongoose = require("mongoose")
const { userRoutes, adminRoutes, courseRoutes } = require("./routes/index")
const app = express();

app.use("/user", userRoutes);
app.use("/admin", adminRoutes);
app.use("/course", courseRoutes);

app.listen(3000, () => {
    console.log("Server connected!");
})