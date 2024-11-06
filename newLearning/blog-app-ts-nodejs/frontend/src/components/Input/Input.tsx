import { ValueProps } from "../../@types/types"
import "./Input.css"

const Input: React.FC<ValueProps> = ({ inputName, label, placeholder }) => {
    return (
        <>
            <label htmlFor={ inputName } className='value__label'>{ label }</label>
            <input type="text" name={ inputName } placeholder={ placeholder } className='value__input'/>
        </>
    )
}

export default Input
