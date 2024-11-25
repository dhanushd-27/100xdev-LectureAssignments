export interface BlogType{
    _id?: string,
    title?: string,
    content?: string,
    createdBy?: {
        username: string,
        email: string,
        password: string
    }
}

export interface LoginPageProps {
    isLoginPage: boolean;
}

export interface ButtonProps{
    name: string,
    path: string
}

export interface ValueProps{
    type?: string
    inputName: string,
    label: string,
    placeholder: string,
    value: string,
    setValue: (value: string) => void
}

export interface LoginData{
    email: string,
    password: string
}

export interface SignupData{
    username: string,
    email: string,
    password: string
}

export interface FormProps{
    name: string,
    sendData: () => void
}

export interface cardProps{
    title?: string,
    content?: string,
    createdBy?: string,
    deleteBlog?: () => void
    updateBlog?: () => void
}
