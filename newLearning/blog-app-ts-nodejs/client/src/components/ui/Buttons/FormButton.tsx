import "./Buttons.css"
import { FormProps } from '../../../@types/types';


const FormButton: React.FC<FormProps> = ({ name, sendData }) => {
    return (
        <>
            <button className='form__button' onClick={ (e) => { e.preventDefault(); sendData(); } }>{ name }</button>
        </>
    )
}

export default FormButton