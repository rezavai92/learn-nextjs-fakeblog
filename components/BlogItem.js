import React from 'react'
import style from '../styles/blogitem.module.css'
import Link from 'next/link'
import Image from 'next/image'
export default function BlogItem({blog,photo}) {
    return (
        <div  key={blog.id}>
          <Link href={`/blogs/${blog.id}`} >
          <a  >
            <div   className={style.blog} >
            <h2>
                  {blog.title}
              </h2>
              <img src={photo.url} width="200px" height="200px" >

              </img>
              <p>
                  {blog.body}
              </p>
            </div>
          </a>
          </Link>
           
        </div>
    )
}
