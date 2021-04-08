import React from 'react'
import BlogList from '../../components/BlogList'

export const getStaticProps =async ()=>{

        try{

           const res= await fetch("https://jsonplaceholder.typicode.com/posts")
           const blogs = await res.json()
        
           console.log(res)
           return{

                props :  {
                    blogs
                }
            }
    
        }

        catch(err){


        }

}
export default function Blogs({blogs}) {
    return (
        <div>
            <h1 style={{textAlign:"center" , color :"blue" }} >Welcome to the blog section!</h1>
            <BlogList blogs={blogs} />
        </div>
    )
}
