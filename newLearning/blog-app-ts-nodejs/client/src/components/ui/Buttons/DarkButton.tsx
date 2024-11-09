import { useNavigate } from 'react-router-dom'
import "./Buttons.css"
import { ButtonProps } from '../../../@types/types';

const DarkButton: React.FC<ButtonProps> = ({ name, path }) => {
    const navigate = useNavigate();

    return (
        <button className='header__darkButton' onClick={() => navigate(path)}>
            { name }
        </button>
    )
}

export default DarkButton
