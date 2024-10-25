import {  Router } from 'express'
import { delete_blog, update_blog, user_signin, user_signup } from '../controllers/user.controller';
import { userAuth } from '../middlewares/auth';

const userRoutes = Router();

userRoutes.post('/signup', user_signup);
userRoutes.post('/signin', user_signin);
userRoutes.put('/update/blog', userAuth , update_blog);
userRoutes.delete('/delete/blog', userAuth, delete_blog);

export { userRoutes }