import { useLoaderData } from "@remix-run/react";
import { getPost } from "../services/api.server"
import style from '../styles/blog.css'
import Posts from "../components/posts";
export async function loader(){
   const data = await getPost();
   return data.data;  
}
export function meta() {
   return {
      title: `Blog`
   }
}
export function links(){
   return[
      {
         rel : 'stylesheet',
         href : style
      }
   ]
}
const Blog = () => {
   const data = useLoaderData();
  return (
   <main className="blog container">
      <h2 className="heading">Blog</h2>
      {data?.length && (
         <div className="blog__grid">
            {data.map(blog=>(
               <Posts
                  key={blog.id}
                  blog = {blog.attributes}
               />
            ))}
         </div>
      )}
   </main>
  )
}

export default Blog