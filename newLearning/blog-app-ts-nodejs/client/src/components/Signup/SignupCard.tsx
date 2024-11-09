import FormButton from '../ui/Buttons/FormButton'
import Input from '../ui/Input/Input'
import "./SignupCard.css"


const SignupCard = () => {
    return (
        <div className='signup__card'>
            <h3 className='signup__head'>Welcome to <span>BlogNest</span></h3>
            <p className="headline">Join us to express and inspire</p>
            <form className="signup__form">
                <Input inputName="username" label="Username" placeholder="Enter your username" />
                <Input inputName="email" label="Email" placeholder="Enter your Email Id"/>
                <Input inputName="password" label="Password" placeholder="Enter your password" />

                <FormButton name="Sign up"/>
            </form>
        </div>
    )
}

export default SignupCard
