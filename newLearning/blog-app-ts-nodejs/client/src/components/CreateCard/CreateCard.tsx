import { useRecoilValue, useSetRecoilState } from "recoil"
import FormButton from "../ui/Buttons/FormButton"
import Input from "../ui/Input/Input"
import "./CreateCard.css"
import { contentAtom, titleAtom } from "../../services/recoil/atoms"
import { createBlog } from "../../services/fetch/PostRequest"
import { useNavigate } from "react-router-dom"
import toast from "react-hot-toast"

const CreateCard = () => {
    const navigate = useNavigate();

    const title = useRecoilValue(titleAtom);
    const content = useRecoilValue(contentAtom);
    const setTitle = useSetRecoilState(titleAtom);
    const setContent = useSetRecoilState(contentAtom);

    async function logData(){

        try {
            const token: string = localStorage.getItem("token") as string;

            console.log(token);
            

            const response = await createBlog( title, content, token );

            if(response.status == 200){
                toast.success("Blog Created Successfully");

                navigate('/blogs');
            }
        } catch (error) {
            toast.error("Something went wrong");

            console.log(error);
            
        }
    }

    return (
        <div className='create-blog__card'>
            <h3 className='create-blog__head'>Create your own <span>Blog</span></h3>
            <p className="headline">Contribute to our BlogNest</p>

            <form className="create-blog__form">
                <Input inputName="title" label="Title" placeholder="Enter title of your blog" value={ title } setValue={ setTitle }/>
                <Input inputName="content" label="Content" placeholder="Enter content for your blog" value={ content } setValue={ setContent }/>

                <FormButton name='Submit' sendData={ logData }/>
            </form>
        </div>
    )
}

export default CreateCard
