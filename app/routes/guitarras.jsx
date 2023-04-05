import {Outlet, useOutletContext} from "@remix-run/react";
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
         <Outlet
            context={
               useOutletContext()
            }
         />
      </main>
  )
}
export default Tienda