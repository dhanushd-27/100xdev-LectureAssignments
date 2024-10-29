import { useNavigate } from 'react-router-dom'
import './HeaderPage.css'

const HeaderPage = () => {
    const navigate = useNavigate();

    return (
        <>
            <div className='header'>
                <h4 className='header__title' onClick={() => {
                    navigate("/")
                }}>BlogNest</h4>
                <div id='header__buttons'>
                    <button className='header__login' onClick={() => {
                        navigate("/login")
                    }}>Login</button>
                    <button className='header__signup'
                        onClick={() => {
                            navigate("/signup")
                        }}
                    >Join now</button>
                </div>
            </div>
        </>
    )
}

export default HeaderPage
