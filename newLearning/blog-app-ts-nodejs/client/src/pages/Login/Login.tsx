import "./Login.css"
import HeaderPage from '../../components/ui/Header/HeaderPage';
import LoginCard from '../../components/Login/LoginCard';

const Login = () => {
    const isLoginPage: boolean = true;

    return (
        <div>
            <HeaderPage isLoginPage={isLoginPage}/>
            <LoginCard />
        </div>
    )
}

export default Login
