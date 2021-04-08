import React from 'react'
import BlogList from '../../components/BlogList'

export const getStaticProps =async ()=>{

        try{

           const res= await fetch("https://jsonplaceholder.typicode.com/posts")
           const photoRes = await fetch(`https://jsonplaceholder.typicode.com/photos`)
           const blogs = await res.json()
            const photos = await photoRes.json()
           
           return{

                props :  {
                    blogs,
                    photos
                }
            }
    
        }

        catch(err){


        }

}
export default function Blogs({blogs,photos}) {
    return (
        <div>
            <h1 style={{textAlign:"center" , color :"blue" }} >Welcome to the blog section!</h1>
            <BlogList blogs={blogs} photos={photos} />
        </div>
    )
}
