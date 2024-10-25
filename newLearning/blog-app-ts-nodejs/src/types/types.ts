import { ObjectId } from "mongodb"

interface signUpbody{
    username: string,
    email: string,
    password: string
}

interface signInbody{
    email: string,
    password: string
}

interface user{
    _id: ObjectId,
    username: string,
    password: string,
    email: string
}

interface blog{
    _id ?: ObjectId,
    title : string,
    content : string
}

export { signInbody, signUpbody, user, blog }