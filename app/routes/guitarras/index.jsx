import { useLoaderData } from "@remix-run/react";
import { getData } from "~/services/api.server";
import ListadoGuitarras from "~/components/ListadoGuitarras";

export async function loader(){
   const data = await getData();
   return data.data;
}
export function meta(){
   return{
      title : 'GuitaLA - Tienda Guitarra',
      description : 'GuitaLa Nuestra colección de guitarras'
   }
}
const Index = () => {
   const guitarras = useLoaderData();
  return (
      <ListadoGuitarras
         guitarras = {guitarras}
      />
  )
}
export default Index