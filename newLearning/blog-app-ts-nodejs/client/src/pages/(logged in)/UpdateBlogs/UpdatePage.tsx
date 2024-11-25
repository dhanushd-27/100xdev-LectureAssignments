import HeaderPage from "../../../components/ui/Header/HeaderPage";
import UpdateCard from "../../../components/UpdateCard/UpdateCard";

const UpdatePage = () => {
    const isLoginPage = false;

    return (
        <>
            <HeaderPage isLoginPage={ isLoginPage } />
            <UpdateCard />
        </>
    )
}

export default UpdatePage
