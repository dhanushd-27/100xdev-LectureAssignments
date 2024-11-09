import HeaderPage from '../../components/ui/Header/HeaderPage'
import SignupCard from '../../components/Signup/SignupCard'
import "./Signup.css"

const Signup = () => {
    const isLoginPage = true;

    return (
        <div>
            <HeaderPage isLoginPage={isLoginPage}/>
            <SignupCard />
        </div>
    )
}

export default Signup
