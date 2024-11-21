import { blog, returnType } from "../types/types";
import { Response, Request } from 'express';
import BlogModel from "../models/Blog";
import UserModel from "../models/User";

const create_blog = async (req: Request, res: Response) => {
    const { title, content}: blog = req.body;

    // People can go through your cookies and get your data change it
    const { id } = req.cookies;

    try {
        await BlogModel.create({
            createdBy: id,
            title: title,
            content: content
        })

        res.status(200).json({
            "Message": "Blog Created Successfully"
        })
    } catch (error) {
        res.status(400).json({
            "Message": error
        })
    }
}

const list_blogs = async(req: Request, res: Response) => {
    
    try {
        const allBlogs = await BlogModel.find().populate('createdBy');

    res.send({
        "Message": "All Blogs fetched successfully",
        "Blogs": allBlogs
    })
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch posts' });
    }

}

const find_blogs = async (req: Request, res: Response) => {
    const {id} = req.params;

    const blogs = await BlogModel.find({
        createdBy: id
    })

    const user = await UserModel.findOne({
        _id: id
    })

    console.log(blogs);
    
    res.status(200).json({
        createdBy: user?.username,
        blog: blogs
    })
}

export { create_blog, list_blogs, find_blogs }