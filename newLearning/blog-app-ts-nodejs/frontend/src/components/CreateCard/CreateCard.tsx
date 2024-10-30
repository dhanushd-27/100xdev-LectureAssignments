import FormButton from "../Buttons/FormButton"
import Input from "../Input/Input"
import "./CreateCard.css"

const CreateCard = () => {
    return (
        <div className='create-blog__card'>
            <h3 className='create-blog__head'>Create your own <span>Blog</span></h3>
            <p className="headline">Contribute to our BlogNest</p>

            <form className="create-blog__form">
                <Input inputName="title" label="Title" placeholder="Enter title of your blog"/>
                <Input inputName="content" label="Content" placeholder="Enter content for your blog" />

                <FormButton name='Submit' />
            </form>
        </div>
    )
}

export default CreateCard
