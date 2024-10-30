import { ButtonProps } from "../../@types/types";
import "./Buttons.css"
import { useNavigate } from 'react-router-dom';

const LightButton: React.FC<ButtonProps> = ({name, path}) => {
    const navigate = useNavigate();

    return (
        <button className='header__lightButton' onClick={() => navigate(path)}>
            { name }
        </button>
    )
}

export default LightButton
