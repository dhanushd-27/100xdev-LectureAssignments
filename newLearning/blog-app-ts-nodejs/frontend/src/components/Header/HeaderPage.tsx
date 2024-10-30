import { useNavigate } from 'react-router-dom'
import './HeaderPage.css'
import { LoginPageProps } from '../../@types/types';
import LightButton from '../Buttons/LightButton';
import DarkButton from '../Buttons/DarkButton';

const HeaderPage: React.FC<LoginPageProps> = ({ isLoginPage }) => {
    const navigate = useNavigate();

    const path = isLoginPage ? "/" : "/blogs"

    return (
        <div className='header'>
            <h4 className='header__title' onClick={() => navigate(path)}>
                BlogNest
            </h4>

            {isLoginPage ? (
                <div id='header__buttons'>
                    <LightButton name="Log in" path="/login" />
                    <DarkButton name="Join Now" path="/signup"/>
                </div>
            ) : (
                <div className='profile__div'>
                    <LightButton name="Log out" path='/' />
                    <DarkButton name="Create" path="/blog/create" />
                    <img src="/europe.jpeg" alt="profile image" className='profile'/>
                </div>
            )}
        </div>
    );
};

export default HeaderPage
