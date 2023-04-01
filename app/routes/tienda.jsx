// import { useLoaderData } from "@remix-run/react";
import { useLoaderData } from "@remix-run/react";
import { getData } from "~/services/api.server";
import Guitarra from "../components/Guitarra";
import style from '../styles/guitarra.css';

export async function loader(){
   const data = await getData();
   return data.data;
}
export function meta(){
   return{
      title : 'GuitaLA - Tienda Guitarra',
      description : 'GuitaLa Nuestra coleccion de guitarras'
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

const Tienda = () => {
   const data = useLoaderData();
  return (
      <main className="container guitarra">
         <h2 className="heading">Colección de Guitarras</h2>
         {data?.length && (
            <div className="guitarra__grid">
               {data.map( guitarra => (
                  <Guitarra
                     key = {guitarra?.id}
                     guitarra = {guitarra?.attributes}
                  />
               ))}
            </div>
         )}
      </main>
  )
}

export default Tienda