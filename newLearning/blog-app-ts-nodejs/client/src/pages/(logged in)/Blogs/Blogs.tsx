import "./Blogs.css"
import BlogCard from '../../../components/BlogCard/BlogCard';
import HeaderPage from "../../../components/ui/Header/HeaderPage";
import { fetchBlogs } from "../../../services/fetch/GetRequest";
import toast from "react-hot-toast";
import { BlogType } from "../../../@types/types";
import { useEffect, useState } from "react";


const Blogs = () => {
    
    const isLoginPage: boolean = false;

    const token: string = localStorage.getItem("token") as string;

    const [blogs, setBlogs] = useState<[BlogType]>([{}]);

    // let blogs: [BlogType] | [] = [];

    // (
    //     async () => {
    //         try {
    //             console.log(blogs.length);

    //             blogs =  await fetchBlogs(token) as [BlogType];
                
    //             console.log(blogs);
    //             console.log(blogs.length);
                
    //         } catch (error) {
    //             console.log(error);
    
    //             toast.error("Couldn't fetch data");
    //         }
    //     }
    // )();

    useEffect(() => {
        const fetchData =
            async () => {
                try {
                    console.log(blogs.length);

                    const response =  await fetchBlogs(token) as [BlogType];

                    setBlogs(response);

                } catch (error) {
                    console.log(error);
        
                    toast.error("Couldn't fetch data");
                }
            }

        fetchData();
    })

    return (
        <>

            <HeaderPage isLoginPage={isLoginPage}/>
            { blogs.length > 0 ? <div className="blogs__container">
                { blogs.map((blog: BlogType) => (
                    <BlogCard 
                        title={ blog.title } 
                        content={ blog.content } 
                        createdBy={ blog.createdBy?.username }
                    />
                ))}
            </div> : <h1 >No Blogs exists</h1>
            }
        </>
    )
}

export default Blogs
