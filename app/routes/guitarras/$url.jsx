import {useLoaderData} from "@remix-run/react";
import { UniqueData } from "~/services/api.server";

export async function loader({params}){
   const {url} = params
   const data = await UniqueData(url)
   if(data.data.length === 0){
      throw new Response('',{
         status : 404,
         statusText : 'Guitara no encontrada'
      })
   }
   return data
}

export function meta({data}){
   if(!data){
      return {
         title : 'Guitarra no encontrada'
      }
   }
   return{
      title : `GuitaLA - ${data.data[0].attributes.nombre}`
   }
}

const Url = () => {
   const data = useLoaderData()
   const {nombre,descripcion, precio, imagen} = data.data[0].attributes;
  return (
   <div className="url__guitarra">
      <figure className="url__figure">
         <img src={imagen.data.attributes.url} alt="" />
      </figure>
      <div className="description">
         <h2>{nombre}</h2>
         <p className="paragraph">{descripcion}</p>
         <p className="price">${precio}</p>
         {/* <select name="" id="">
            <option value="">-- Selección Cantidad ---</option>
            <option value="1">1</option>
         </select> */}
         <button className="shop"> Agregar al Carrito</button>
      </div>
   </div>
  )
}

export default Url