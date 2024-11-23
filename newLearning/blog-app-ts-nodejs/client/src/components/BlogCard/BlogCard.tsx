import './BlogCard.css'
import { cardProps } from '../../@types/types'
import cross from '../../assets/cross.svg'

const BlogCard = ({title, content, createdBy}: cardProps) => {
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

            <button className='button__comp'><img src={ cross } alt="" className='cross' /></button>
        </div>
    )
}

export default BlogCard
