import express, { Express, Request } from "express";
import { userRoutes } from "./routes/user.routes";
import * as dotenv from "dotenv"
import { connectDB } from "./db/db";
import blogRoutes from "./routes/blog.routes";
import cors from 'cors';

const app: Express = express();
dotenv.config();

connectDB();

const corsOptions: cors.CorsOptions = {
    origin: ['https://blognest-orca.vercel.app', 'http://localhost:5173'],
    methods: ["POST", "GET", "PUT", "DELETE"],
    credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server connected");
})