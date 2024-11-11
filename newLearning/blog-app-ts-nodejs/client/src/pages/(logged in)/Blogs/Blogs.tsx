import "./Blogs.css"
import BlogCard from '../../../components/BlogCard/BlogCard';
import HeaderPage from "../../../components/ui/Header/HeaderPage";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { blogAtom } from "../../../services/recoil/atoms";
import { BlogType } from "../../../@types/types";
import { useEffect } from "react";

const Blogs = () => {

    const blogs: BlogType[] = useRecoilValue(blogAtom) as BlogType[];
    const setBlogs = useSetRecoilState(blogAtom);

    const isLoginPage: boolean = false;

    useEffect(() => {
        
    })

    return (
        <>
            <HeaderPage isLoginPage={isLoginPage}/>
            { blogs.length ? <div className="blogs__container">
                { blogs.map((blog) => (
                    <BlogCard 
                        title={ blog.title } 
                        content={ blog.content } 
                        createdBy={ blog.createdBy }
                    />
                ))}
            </div> : <h1>No Blogs exists</h1>
            }
        </>
    )
}

export default Blogs
