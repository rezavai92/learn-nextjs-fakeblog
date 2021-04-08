import React from 'react'
import style from '../styles/blogitem.module.css'
import Link from 'next/link'
export default function BlogItem({blog}) {
    return (
        <div  key={blog.id}>
          <Link href={`/blogs/${blog.id}`} >
          <a  >
            <div   className={style.blog} >
            <h2>
                  {blog.title}
              </h2>
              <p>
                  {blog.body}
              </p>
            </div>
          </a>
          </Link>
           
        </div>
    )
}
