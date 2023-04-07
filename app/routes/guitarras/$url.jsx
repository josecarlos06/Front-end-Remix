import {useLoaderData, useOutletContext} from "@remix-run/react";
import { useState } from "react";
import { UniqueData } from "~/services/api.server";

export async function loader({params}){
   const {url} = params
   const data = await UniqueData("guitarras",url)
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
   const {agregarCarrito} = useOutletContext();
   const [cantidad, setCantidad] = useState(0);
   const data = useLoaderData();
   const {nombre,descripcion, precio, imagen} = data.data[0].attributes;

   const handleSubmit = (e)=>{
      e.preventDefault();
      if(!cantidad){
         alert("Elemento Vacio");
         return;
      }
      const guitarraSelect = {
         id : data.data[0].id,
         image : imagen.data.attributes.url,
         nombre,
         precio,
         cantidad
      }
      agregarCarrito(guitarraSelect)
   }
  return (
   <div className="url__guitarra">
      <figure className="url__figure">
         <img src={imagen.data.attributes.url} alt="" />
      </figure>
      <div className="description">
         <h2>{nombre}</h2>
         <p className="paragraph">{descripcion}</p>
         <p className="price">${precio}</p>
         <form onSubmit={handleSubmit}>
            <label htmlFor="cantidad">Cantidad</label>
            <select 
               onChange={e => setCantidad(+e.target.value)}
               name="cantidad" 
               id="cantidad" 
               className="cantidad"
            >
               <option value="">-- Seleccione ---</option>
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
            </select>
            <button className="shop" type="submit"> Agregar al Carrito</button>
         </form>
      </div>
   </div>
  )
}

export default Url