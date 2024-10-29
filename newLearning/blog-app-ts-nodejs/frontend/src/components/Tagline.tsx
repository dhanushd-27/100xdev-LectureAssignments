import "./Tagline.css"

const Tagline = () => {
    return (
        <>
            <div className='tagline__card'>
                <h1 className='tagline__motto'>Your Ideas, Our Nest <span>Let's Soar!</span></h1>
                <p className='tagline__headline'>Join us and let's turn insipiration into reality</p>
                <div className="tagline__buttons">
                    <button className="tagline__buttons explore-blogs">Explore Blogs</button>
                    <button className="tagline__buttons learn-more">Learn More</button>
                </div>
            </div>
        </>
    )
}

export default Tagline
