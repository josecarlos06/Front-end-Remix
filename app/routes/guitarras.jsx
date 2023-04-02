import {Outlet} from "@remix-run/react";
import style from "../styles/guitarra.css";

export function links(){
   return[
      {
         rel : 'stylesheet',
         href : style
      }
   ]
}

const Tienda = () => {
  return (
      <main className="container">
         <Outlet/>
      </main>
  )
}
export default Tienda