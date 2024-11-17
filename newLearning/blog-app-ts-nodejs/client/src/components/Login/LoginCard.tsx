import { useRecoilValue, useSetRecoilState } from 'recoil'
import FormButton from '../ui/Buttons/FormButton'
import Input from '../ui/Input/Input'
import './LoginCard.css'
import { emailAtom, passwordAtom } from '../../services/recoil/atoms'
import { signIn } from '../../services/fetch/PostRequest'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const LoginCard = () => {
    const navigate = useNavigate()

    const email = useRecoilValue(emailAtom);
    const password = useRecoilValue(passwordAtom);
    const setEmail = useSetRecoilState(emailAtom);
    const setPassword = useSetRecoilState(passwordAtom);
    
    async function logData(){
        try {
            const response = await signIn( email, password);

            if(response.status == 200){ 
                toast.success("Login Successfull");
                
                const data: { message: string, token: string } = response.data as { message: string, token: string } ;
                localStorage.setItem("token", data.token);
                
                navigate('/blogs');
            } 
        } catch (error) {
            toast.error("Login Failed");

            console.log(error);
            
            navigate("/");
        }
    }

    return (
        <div className='login__card'>
            <h3 className='login__head'>Welcome to <span>BlogNest</span></h3>
            <p className="headline">Join us to express and inspire</p>

            <form className="login__form">
                <Input inputName="email" label="Email" placeholder="Enter your Email Id" value={ email } setValue={ setEmail }/>
                <Input type='password' inputName="password" label="Password" placeholder="Enter your password" value={ password } setValue={ setPassword }/>

                <FormButton name='Log in' sendData={ logData }/>
            </form>
        </div>
    )
}

export default LoginCard
