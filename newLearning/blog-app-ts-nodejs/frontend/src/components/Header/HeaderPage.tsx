import './HeaderPage.css'

const HeaderPage = () => {
    return (
        <>
            <div className='header'>
                <h4 className='header__title'>BlogNest</h4>
                <div id='header__buttons'>
                    <button className='header__login'>Login</button>
                    <button className='header__signup'>Join now</button>
                </div>
            </div>
        </>
    )
}

export default HeaderPage
