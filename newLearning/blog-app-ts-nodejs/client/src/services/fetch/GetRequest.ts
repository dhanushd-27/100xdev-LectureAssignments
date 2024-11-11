import axios from "axios";

export const fetchBlogs = async () => {
    return await axios.get("/api/v1/blog/all");
}