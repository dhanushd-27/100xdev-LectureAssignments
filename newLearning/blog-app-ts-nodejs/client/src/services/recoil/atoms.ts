import { atom } from "recoil";

const usernameAtom = atom({
    key: "username",
    default: ""
})

const emailAtom = atom({
    key: "email",
    default: ""
})

const passwordAtom = atom({
    key: "password",
    default: ""
})

const titleAtom = atom({
    key: "title",
    default: ""
})

const contentAtom = atom({
    key: "content",
    default: ""
})

const blogAtom = atom({
    key: "blog",
    default: [],
})

export { usernameAtom, emailAtom, passwordAtom, titleAtom, contentAtom, blogAtom };