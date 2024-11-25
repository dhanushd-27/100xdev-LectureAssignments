import axios from "axios";
import { BlogType } from "../../@types/types";
import { API_URL } from "../config/api";

export const fetchBlogs = async (token: string) => {
    const response = await axios.get(`${API_URL}/api/v1/blog/all`, {
        headers: {
            'token': token
        }
    });

    const data: { Message: string, Blogs: [BlogType]}  = response.data as { Message: string, Blogs: [BlogType]};
    return data.Blogs;
}

export const fetchSingleBlog = async (token: string, id: string) => {
    const response = await axios.get(`${API_URL}/api/v1/blog/${id}`, {
        headers: {
            'token': token
        }
    })

    // { createdBy: string, blog: BlogType }
    return response;
}

