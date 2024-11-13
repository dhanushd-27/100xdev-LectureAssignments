import logo from "../assets/logo.svg"
import three from "../assets/menu.png"

const Header = () => {
    return (
        <div className='w-screen bg-leetcode-grey px-4 py-4 '>
            <header className='flex w-100% px-2 justify-between'>
                <img src={ logo } alt="" className='w-6'/>
                <img src={ three } alt="" className='w-8'/>
            </header>
        </div>
    )
}

export default Header
