import React from 'react'
import BlogItem from './BlogItem'
import style from '../styles/bloglist.module.css'
export default function BlogList({blogs,photos}) {
    return (
        <div className={style.blogFlex} >
            {blogs.map((blog,index)=>{
                return(<BlogItem blog={blog} photo ={photos[index]} />)
            })}
        </div>
    )
}
