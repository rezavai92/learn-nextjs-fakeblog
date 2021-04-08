import React from 'react'
import {useRouter} from 'next/router'
import style from '../../../styles/blogitem.module.css'

export const getServerSideProps = async (context)=>{

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const blog = await res.json()
return{
    props:{
        blog
    }
}

}
export default function Blog({blog}) {

    // const router = useRouter()
    // const {id} =router.query
    return (
        <div className={style.blogDetail} key={blog.id} >
            <h1 style={{textAlign:"center"}}>{blog.title}</h1>
            <p>{blog.body}</p>
        </div>
    )
}
