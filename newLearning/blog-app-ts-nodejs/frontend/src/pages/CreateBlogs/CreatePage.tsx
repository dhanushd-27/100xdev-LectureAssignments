import CreateCard from "../../components/CreateCard/CreateCard";
import HeaderPage from "../../components/Header/HeaderPage"

const CreatePage = () => {
    const isLoginPage = false;

    return (
        <>
            <HeaderPage isLoginPage={ isLoginPage } />
            <CreateCard />
        </>
    )
}

export default CreatePage
