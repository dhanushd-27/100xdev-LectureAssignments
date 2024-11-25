import axios from "axios";

const signUp = async ( username: string, email: string, password: string ) => {
    return await axios.post('/api/v1/user/signup', { username, email, password });
}

const signIn = async ( email: string, password: string ) => {
    return await axios.post('/api/v1/user/signin', { email, password });
}

const createBlog = async ( title: string, content: string, token: string ) => {
    return await axios.post('/api/v1/blog/create', { title, content }, {
        headers: {
            'token': token
        }
    });
}

const updateBlog = async (token: string, id: string, title: string , content: string ) => {
    return await axios.put('/api/v1/user/update/blog', { _id: id, title, content }, {
        headers: {
            token
        }
    })
}

export const deleteBlog = async ( token: string, id: string ) => {
    return await axios.delete(`/api/v1/user/delete/blog?id=${id}` ,{ 
        headers: {
            token: token,
        }
    })
}

export { signUp, signIn, createBlog, updateBlog }; // , deleteBlog