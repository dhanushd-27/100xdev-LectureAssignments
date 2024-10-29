import './LoginCard.css'

const LoginCard = () => {
    return (
        <div className='login__card'>
            <h3 className='login__head'>Welcome to <span>BlogNest</span></h3>
            <p className="headline">Join us to express and inspire</p>
            <form className="login__form">
                
                <label htmlFor="email" className='login__label'>Email</label>
                <input type="text" name="email"  placeholder='Enter your email' className='login__input'/>
                <label htmlFor="password" className='login__label'>Password</label>
                <input type="password" name="password"  placeholder='Enter your password' className='login__input'/>

                <button className='login__button'>Sign Up</button>
            </form>
        </div>
    )
}

export default LoginCard
