import { useRecoilValue, useSetRecoilState } from "recoil"
import Input from "../ui/Input/Input"
import "./UpdateCard.css"
import { contentAtom, idAtom, titleAtom } from "../../services/recoil/atoms"
import { updateBlog } from "../../services/fetch/PostRequest"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"
import { AxiosError } from "axios";

const UpdateCard = () => {
    const navigate = useNavigate();

    const title = useRecoilValue(titleAtom);
    const content = useRecoilValue(contentAtom);
    const setTitle = useSetRecoilState(titleAtom);
    const setContent = useSetRecoilState(contentAtom);
    const id = useRecoilValue(idAtom);

    const token = localStorage.getItem("token") as string;

    const updateB = async(token: string, id: string, title: string, content: string, e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try {
            if(!title || !content){
                toast.error("Both fields should be filled");
                return;
            }

            const response = await updateBlog(token, id, title, content);

            if(response.status == 200){
                toast.success("Blog Updated Successfully");
            }

            navigate('/blogs');
            
        } catch (error: AxiosError) {
            if(error.status == 403){
                toast.error("Unauthorized User");
                return;
            }

            toast.error("Something went wrong");
        }
    }

    return (
        <div className='create-blog__card'>
            <h3 className='create-blog__head'>Create your own <span>Blog</span></h3>
            <p className="headline">Contribute to our BlogNest</p>

            <form className="create-blog__form">
                <Input inputName="title" label="Title" placeholder="Enter title of your blog" value={ title } setValue={ setTitle }/>
                <Input inputName="content" label="Content" placeholder="Enter content for your blog" value={ content } setValue={ setContent }/>

                <button className="update__button" onClick={ (e) => updateB(token, id, title, content, e) }>Update Blog</button>
            </form>
        </div>
    )
}

export default UpdateCard
