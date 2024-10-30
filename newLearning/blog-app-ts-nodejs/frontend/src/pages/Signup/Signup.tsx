import HeaderPage from '../../components/Header/HeaderPage'
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
