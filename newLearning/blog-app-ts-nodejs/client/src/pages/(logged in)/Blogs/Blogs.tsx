import "./Blogs.css"
import BlogCard from '../../../components/BlogCard/BlogCard';
import HeaderPage from "../../../components/ui/Header/HeaderPage";
import { fetchBlogs } from "../../../services/fetch/GetRequest";
import toast from "react-hot-toast";
import { BlogType } from "../../../@types/types";
import { useEffect, useState } from "react";
import { deleteBlog } from '../../../services/fetch/PostRequest';
import { useNavigate } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import { idAtom } from "../../../services/recoil/atoms";
import  axios, { isAxiosError } from "axios";

const Blogs = () => {
    const setId = useSetRecoilState(idAtom);
    const isLoginPage: boolean = false;
    const navigate = useNavigate()

    const token: string = localStorage.getItem("token") as string;

    const [blogs, setBlogs] = useState<[BlogType]>([{}]);

    const fetchData = async () => {
        try {
            const response =  await fetchBlogs(token) as [BlogType];

            setBlogs(response);
        } catch (error) {
            console.log(error);

            toast.error("Couldn't fetch data");
        }
    }

    useEffect(() => {
        fetchData();
    }, [])

    const editData = (id: string) => {
        setId(id as string);
        
        navigate('/blog/update')
    }

    const deleteB = async (token: string, id: string) => {
        try {
            const response = await deleteBlog(token, id as string);

            if(response.status == 200){
                toast.success("Blog Deleted Successfully");
            }

            const newBlogs = blogs.filter((blog) => blog._id != id) as [BlogType];
            setBlogs(newBlogs);
        } catch (error) {
            if(axios.isAxiosError(error)){
                if(error.status == 403){
                    toast.error("Unauthorized User");
                    return;
                }
            }

            toast.error("Something went wrong")
        }
    }

    return (
        <>
            <HeaderPage isLoginPage={isLoginPage}/>
            { blogs.length > 0 ? <div className="blogs__container">
                { blogs.map((blog: BlogType) => (
                    <BlogCard 
                        key={ blog._id }
                        title={ blog.title }
                        content={ blog.content } 
                        createdBy={ blog.createdBy?.username }
                        deleteBlog= { () => { deleteB(token, blog._id as string); }}
                        updateBlog= { () => { editData(blog._id as string) } }
                    />
                ))}
            </div> : <h1 >No Blogs exists</h1>
            }
        </>
    )
}

export default Blogs
