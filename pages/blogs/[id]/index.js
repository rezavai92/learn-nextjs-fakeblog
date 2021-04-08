import React from 'react'
import {useRouter} from 'next/router'
import style from '../../../styles/blogitem.module.css'

export const getServerSideProps = async (context)=>{

    const res1 = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const res2=  await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}/comments`)
    const blog = await res1.json()
    const comments = await res2.json()
return{
    props:{
        blog,
        comments
    }
}

}
export default function Blog({blog,comments}) {

    const router = useRouter()
    const {id} =router.query
   
    return (
        <div className={style.blogDetail}  key={blog.id} >
            <h1 style={{textAlign:"center"}}>{blog.title}</h1>
            <p>{blog.body}</p>
         
         <div className={style.comments} >
             <h5 style={{textAlign:"center" , padding :"0px"}} >Comments</h5>
         {comments.map((comment)=>{
                return(<div key={comment.id} > 
                     <h5>{comment.name}</h5>
                     <p>{comment.body}</p>

                </div>)
            })}
         </div>
        </div>
    )
}
