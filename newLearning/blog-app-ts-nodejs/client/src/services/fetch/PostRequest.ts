import axios from "axios";
import { API_URL } from "../config/api";

const signUp = async ( username: string, email: string, password: string ) => {
    return await axios.post(`${API_URL}/api/v1/user/signup`, { username, email, password });
}

const signIn = async ( email: string, password: string ) => {
    return await axios.post(`${API_URL}/api/v1/user/signin`, { email, password });
}

const createBlog = async ( title: string, content: string, token: string ) => {
    return await axios.post(`${API_URL}/api/v1/blog/create`, { title, content }, {
        headers: {
            'token': token
        }
    });
}

const updateBlog = async (token: string, id: string, title: string , content: string ) => {
    return await axios.put(`${API_URL}/api/v1/user/update/blog`, { _id: id, title, content }, {
        headers: {
            token
        }
    })
}

export const deleteBlog = async ( token: string, id: string ) => {
    return await axios.delete(`${API_URL}/api/v1/user/delete/blog?id=${id}` ,{ 
        headers: {
            token: token,
        }
    })
}

export { signUp, signIn, createBlog, updateBlog }; // , deleteBlog