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

export { signUp, signIn, createBlog };