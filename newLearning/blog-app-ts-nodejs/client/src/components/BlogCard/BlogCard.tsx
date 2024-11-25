import './BlogCard.css'
import { cardProps } from '../../@types/types'
import cross from '../../assets/cross.svg'
import edit from '../../assets/edit.svg'
import { useState } from 'react'

const BlogCard = ({title, content, createdBy, deleteBlog, updateBlog }: cardProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <div className='blog__card' onMouseEnter={ () => { setHovered(true) } } onMouseLeave={ () => { setHovered(false) } }>
            <div className='blog__head'>
                <h4 className='blog__head-content'>{ title }</h4>
            </div>

            <div className='blog__mid'>
                <p className='blog__mid-content'> { content }</p>
            </div>

            <div className='blog__footer'>
                <p className='blog__footer-content'>{ createdBy }</p>
            </div>

            { hovered ? <button className='button__comp' onClick={ deleteBlog }><img src={ cross } alt="" className='cross' /></button> : null }
            { hovered ? <button className='update__comp' onClick={ updateBlog } ><img className='edit' src={ edit } alt="" /></button> : null }
        </div>
    )
}

export default BlogCard
