import "./Blogs.css"
import BlogCard from '../../../components/BlogCard/BlogCard';
import HeaderPage from "../../../components/ui/Header/HeaderPage";


const Blogs = () => {
    
    const isLoginPage: boolean = false;

    const blogs = [
        {
            title: "Introduction to JavaScript",
            content: "JavaScript is a versatile programming language used for web development.",
            createdBy: "Alice"
            },
            {
            title: "Understanding Arrays",
            content: "Arrays are used to store multiple values in a single variable.",
            createdBy: "Bob"
            },
            {
            title: "CSS Basics",
            content: "CSS is used to style HTML documents and make them visually appealing.",
            createdBy: "Charlie"
            },
            {
            title: "Getting Started with HTML",
            content: "HTML is the foundation of web pages and structures the content on the web.",
            createdBy: "Dana"
            },
            {
            title: "JavaScript Functions",
            content: "Functions allow you to encapsulate code for reusability and modularity.",
            createdBy: "Eve"
            },
            {
            title: "Responsive Design",
            content: "Responsive design ensures web pages look good on all devices.",
            createdBy: "Frank"
            },
            {
            title: "Async Programming",
            content: "Async programming in JavaScript is crucial for handling I/O operations.",
            createdBy: "Grace"
            },
            {
            title: "Node.js Overview",
            content: "Node.js allows JavaScript to run server-side, extending its capabilities.",
            createdBy: "Heidi"
            },
            {
            title: "Introduction to React",
            content: "React is a JavaScript library for building user interfaces.",
            createdBy: "Ivy"
            },
            {
            title: "REST APIs Basics",
            content: "REST APIs allow applications to communicate over HTTP using a standard approach.",
            createdBy: "Jack"
            }
        ];

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
            </div> : <h1 >No Blogs exists</h1>
            }
        </>
    )
}

export default Blogs
