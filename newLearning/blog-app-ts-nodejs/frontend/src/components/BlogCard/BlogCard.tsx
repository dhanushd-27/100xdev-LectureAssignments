import './BlogCard.css'

const BlogCard = () => {
    return (
        <div className='blog__card'>
            <div className='blog__head'>
                <h4 className='blog__head-content'>Title</h4>
            </div>

            <div className='blog__mid'>
                <p className='blog__mid-content'> hey There, I am orca</p>
            </div>

            <div className='blog__footer'>
                <p className='blog__footer-content'>By - Creator Name</p>
            </div>
        </div>
    )
}

export default BlogCard
