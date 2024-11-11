import { ValueProps } from "../../../@types/types"
import "./Input.css"

const Input: React.FC<ValueProps> = ({ type, inputName, label, placeholder, value, setValue }) => {
    
    const setType = type ? type : "text";

    return (
        <>
            <label htmlFor={ inputName } className='value__label'>{ label }</label>
            <input type={ setType } name={ inputName } placeholder={ placeholder } className='value__input' value={ value } onChange={ (e) => { setValue(e.target.value) }}/>
        </>
    )
}

export default Input
