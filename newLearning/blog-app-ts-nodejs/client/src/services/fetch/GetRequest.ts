import axios from "axios";

export const fetchBlogs = async (token: string) => {
    return await axios.get("/api/v1/blog/all", {
        headers: {
            'token': token
        }
    });
}