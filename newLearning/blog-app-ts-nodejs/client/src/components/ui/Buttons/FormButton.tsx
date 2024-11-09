import "./Buttons.css"
import { FormProps } from '../../../@types/types';


const FormButton: React.FC<FormProps> = ({ name }) => {
    return (
        <>
            <button className='form__button' >{ name }</button>
        </>
    )
}

export default FormButton
