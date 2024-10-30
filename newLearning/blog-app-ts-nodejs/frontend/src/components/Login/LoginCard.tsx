import FormButton from '../Buttons/FormButton'
import Input from '../Input/Input'
import './LoginCard.css'

const LoginCard = () => {
    return (
        <div className='login__card'>
            <h3 className='login__head'>Welcome to <span>BlogNest</span></h3>
            <p className="headline">Join us to express and inspire</p>

            <form className="login__form">
                <Input inputName="email" label="Email" placeholder="Enter your Email Id"/>
                <Input inputName="password" label="Password" placeholder="Enter your password" />

                <FormButton name='Log in ' />
            </form>
        </div>
    )
}

export default LoginCard
