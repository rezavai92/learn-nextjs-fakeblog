import React from 'react'
import BlogItem from './BlogItem'
import style from '../styles/bloglist.module.css'
export default function BlogList({blogs}) {
    return (
        <div className={style.blogFlex} >
            {blogs.map((blog)=>{
                return(<BlogItem blog={blog} />)
            })}
        </div>
    )
}
