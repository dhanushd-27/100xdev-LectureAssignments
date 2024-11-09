import HeaderPage from "../../components/ui/Header/HeaderPage"
import Tagline from "../../components/Tagline"

const HomePage = () => {
    const isLoginPage: boolean = true;

    return (
        <div>
            <HeaderPage isLoginPage={isLoginPage}/>
            <Tagline/>
        </div>
    )
}

export default HomePage
