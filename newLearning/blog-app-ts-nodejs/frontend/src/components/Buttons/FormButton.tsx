import { useRecoilValue } from "recoil"
import { FormProps } from "../../@types/types"
import "./Buttons.css"
import { emailAtom, passwordAtom, usernameAtom } from "../../recoil/atoms/atoms"

const FormButton: React.FC<FormProps> = ({ name }) => {
    return (
        <>
            <button className='form__button' onClick={() => {
                const username: string = useRecoilValue(usernameAtom);
                const email: string = useRecoilValue(emailAtom);
                const password: string = useRecoilValue(passwordAtom);

                

            }}>{ name }</button>
        </>
    )
}

export default FormButton
