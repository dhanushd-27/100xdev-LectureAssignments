import "./SignupCard.css"

const SignupCard = () => {
    return (
        <div className='signup__card'>
            <h3 className='signup__head'>Welcome to <span>BlogNest</span></h3>
            <p className="headline">Join us to express and inspire</p>
            <form className="signup__form">
                <label htmlFor="username" className='signup__label'>Username</label>
                <input type="text" name="username" placeholder='Enter your username' className='signup__input'/>
                <label htmlFor="email" className='signup__label'>Email</label>
                <input type="text" name="email"  placeholder='Enter your email' className='signup__input'/>
                <label htmlFor="password" className='signup__label'>Password</label>
                <input type="password" name="password"  placeholder='Enter your password' className='signup__input'/>

                <button className='signup__button'>Sign Up</button>
            </form>
        </div>
    )
}

export default SignupCard
