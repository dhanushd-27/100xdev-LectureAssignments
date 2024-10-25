import { Router } from "express";
import { userAuth } from "../middlewares/auth";
import { create_blog, find_blogs, list_blogs } from "../controllers/blog.controller";

const blogRoutes = Router();

blogRoutes.post('/create', userAuth, create_blog);
blogRoutes.get('/all', userAuth, list_blogs);
blogRoutes.get('/:id', userAuth, find_blogs);


export default blogRoutes