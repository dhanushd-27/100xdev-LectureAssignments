import './BlogCard.css'
import { BlogType } from '../../@types/types'

const BlogCard = ({title, content, createdBy}: BlogType) => {
    return (
        <div className='blog__card'>
            <div className='blog__head'>
                <h4 className='blog__head-content'>{ title }</h4>
            </div>

            <div className='blog__mid'>
                <p className='blog__mid-content'> { content }</p>
            </div>

            <div className='blog__footer'>
                <p className='blog__footer-content'>{ createdBy }</p>
            </div>
        </div>
    )
}

export default BlogCard
