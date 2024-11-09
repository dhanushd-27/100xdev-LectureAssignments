import "./Blogs.css"
import BlogCard from '../../../components/BlogCard/BlogCard';
import HeaderPage from "../../../components/ui/Header/HeaderPage";

const Blogs = () => {

    const blogs = [
        {
            title: "First Post",
            content: "This is the first post content. It gives an overview of the topic and invites readers to explore further.",
            createdBy: "Alice"
        },
        {
            title: "Second Post",
            content: "Here’s some interesting information on a related subject. Join the discussion and share your thoughts.",
            createdBy: "Bob"
        },
        {
            title: "Third Post",
            content: "Discover the insights and analysis on this matter. Your input could enhance the conversation significantly.",
            createdBy: "Charlie"
        },
        {
            title: "Fourth Post",
            content: "This post dives into the intricacies of the topic. Don’t hesitate to share your opinions and experiences.",
            createdBy: "Diana"
        },
        {
            title: "Fifth Post",
            content: "An overview of recent developments in the field. Let’s discuss how these changes impact us all.",
            createdBy: "Eve"
        },
        {
            title: "Fifth Post",
            content: "An overview of recent developments in the field. Let’s discuss how these changes impact us all.",
            createdBy: "Eve"
        },
        {
            title: "Fifth Post",
            content: "An overview of recent developments in the field. Let’s discuss how these changes impact us all.",
            createdBy: "Eve"
        },
        {
            title: "Fifth Post",
            content: "An overview of recent developments in the field. Let’s discuss how these changes impact us all.",
            createdBy: "Eve"
        },
        {
            title: "Fifth Post",
            content: "An overview of recent developments in the field. Let’s discuss how these changes impact us all.",
            createdBy: "Eve"
        },
        {
            title: "Fifth Post",
            content: "An overview of recent developments in the field. Let’s discuss how these changes impact us all.",
            createdBy: "Eve"
        },
        {
            title: "Fifth Post",
            content: "An overview of recent developments in the field. Let’s discuss how these changes impact us all.",
            createdBy: "Eve"
        },
        {
            title: "Fifth Post",
            content: "An overview of recent developments in the field. Let’s discuss how these changes impact us all.",
            createdBy: "Eve"
        },
    ];

    const isLoginPage: boolean = false;

    return (
        <>
            <HeaderPage isLoginPage={isLoginPage}/>
            <div className="blogs__container">
                { blogs.map((blog) => (
                    <BlogCard 
                        title={ blog.title } 
                        content={ blog.content } 
                        createdBy={ blog.createdBy }
                    />
                ))}
            </div>
        </>
    )
}

export default Blogs
