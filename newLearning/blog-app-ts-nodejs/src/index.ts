import express, { Express } from "express";
import { userRoutes } from "./routes/user.routes";
import * as dotenv from "dotenv"
import { connectDB } from "./db/db";
import blogRoutes from "./routes/blog.routes";

const app: Express = express();
dotenv.config();

connectDB();

app.use(express.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);

app.listen(3000, () => {
    console.log("Server connected");
})