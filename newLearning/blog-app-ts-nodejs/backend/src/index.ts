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
    origin: '*', // allow requests from any origin
    methods: ['GET','POST','PUT','DELETE'], // allow specific HTTP methods
    allowedHeaders: ['Content-Type', 'Authorization'], // allow specific headers
};

app.use(cors(corsOptions));
app.use(express.json());

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/blog', blogRoutes);

app.listen(process.env.PORT, () => {
    console.log("Server connected");
})