import {Outlet} from "@remix-run/react";
import style from '~/styles/blog.css';

export function links(){
   return[
      {
         rel : 'stylesheet',
         href : style
      }
   ]
}
const Blog = () => {
  return (
   <main className="blog container">
      <Outlet/>
   </main>
  )
}

export default Blog