import { useLoaderData } from "@remix-run/react"
import { getData, getPost,getCurso } from "~/services/api.server"
import ListadoGuitarras from "../components/ListadoGuitarras"
import ListadoPosts from "../components/listadoPosts"
import Banner from "../components/Banner"
import tienda from "../styles/guitarra.css"
import blog from "../styles/blog.css"
import curso from "../styles/curso.css"

export function meta(){
   return{

   }
}
export function links(){
   return[
      {
         rel : 'stylesheet',
         href : tienda
      },
      {
         rel : 'stylesheet',
         href : blog
      },
      {
         rel : 'stylesheet',
         href : curso
      }
   ]
}
export async function loader() {
   const [guitarras,curso,posts] = await Promise.all([
      getData(),
      getCurso(),
      getPost(),
   ])
   return {guitarras: guitarras.data, curso: curso.data ,posts: posts.data}
}
const Index = () => {
   const {guitarras, curso ,posts} = useLoaderData();
   console.log(curso.attributes);
  return (
    <>
         <main className="container">
            <ListadoGuitarras
               guitarras={guitarras}
            />
         </main>
         <Banner
            curso={curso.attributes}
         />
         <section className="container">
            <ListadoPosts
               posts = {posts}
            />
         </section>
    </>
  )
}

export default Index
