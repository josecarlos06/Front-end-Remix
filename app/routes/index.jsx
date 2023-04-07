import { useLoaderData } from "@remix-run/react"
import { getData} from "~/services/api.server"
import ListadoGuitarras from "~/components/listadoGuitarras"
import ListadoPosts from "~/components/listadoPosts"
import Banner from "~/components/banner"
import tienda from "~/styles/guitarra.css"
import blog from "~/styles/blog.css"
import curso from "~/styles/curso.css"

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
      getData("guitarras"),
      getData("posts"),
      getData("cursos"),
   ])
   // retorna y accedo : 
   return {guitarras: guitarras.data, curso: curso.data ,posts: posts.data}
}
const Index = () => {
   const {guitarras, curso ,posts} = useLoaderData();
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
