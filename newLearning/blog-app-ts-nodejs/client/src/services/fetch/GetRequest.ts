import axios from "axios";
import { BlogType } from "../../@types/types";

export const fetchBlogs = async (token: string) => {
    const response = await axios.get("/api/v1/blog/all", {
        headers: {
            'token': token
        }
    });

    const data: { Message: string, Blogs: [BlogType]}  = response.data as { Message: string, Blogs: [BlogType]};
    return data.Blogs;
}