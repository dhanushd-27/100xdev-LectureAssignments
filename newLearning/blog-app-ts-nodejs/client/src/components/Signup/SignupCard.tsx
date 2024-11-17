import { useRecoilValue, useSetRecoilState } from 'recoil'
import FormButton from '../ui/Buttons/FormButton'
import Input from '../ui/Input/Input'
import "./SignupCard.css"
import { emailAtom, passwordAtom, usernameAtom } from '../../services/recoil/atoms'
import { signUp } from '../../services/fetch/PostRequest'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

const SignupCard = () => {
    const username = useRecoilValue(usernameAtom);
    const email = useRecoilValue(emailAtom);
    const password = useRecoilValue(passwordAtom);
    const setUsername = useSetRecoilState(usernameAtom);
    const setEmail = useSetRecoilState(emailAtom);
    const setPassword = useSetRecoilState(passwordAtom);

    const navigate = useNavigate();

    async function logData(){
        try {
            const response = await signUp( username, email, password );

            if(response.status == 200){
                toast.success("Account created Succesfully");

                navigate("/");
            }
            } catch (error) {
                toast.error("Sign up failed");

                console.log(error);
                
                navigate('/')
            }
    }

    return (
        <div className='signup__card'>
            <h3 className='signup__head'>Welcome to <span>BlogNest</span></h3>
            <p className="headline">Join us to express and inspire</p>
            <form className="signup__form">
                <Input inputName="username" label="Username" placeholder="Enter your username" value= { username } setValue={ setUsername }/>
                <Input inputName="email" label="Email" placeholder="Enter your Email Id"  value={ email } setValue={ setEmail }/>
                <Input type='password' inputName="password" label="Password" placeholder="Enter your password" value={ password } setValue={ setPassword }/>

                <FormButton name="Sign up" sendData={ logData }/>
            </form>
        </div>
    )
}

export default SignupCard
