import { useOutletContext } from "@remix-run/react"
import carrito from "~/styles/carrito.css"
import ArticulosCarrito from "../components/ArticulosCarrito"
import { useEffect, useState } from "react"
export function meta(){
   return{
      title : 'Carrito de compras'
   }
}
export function links() {
   return [
      {
         rel: 'stylesheet',
         href: carrito
      }
   ]
}
const Carrito = () => {
   const {carrito} = useOutletContext();
   const [total, setTotal] = useState(0);

   useEffect(()=>{
      const total = carrito.reduce( ( total, producto) => total + (producto.cantidad * producto.precio),0);
      setTotal(total)
   },[carrito])

   return (
      <main>
         <div className="container">
            <h2 className='heading'>Carrito de compras</h2>
            <div className="content">

               <div className="carrito">
                  {carrito?.length === 0 ? <p>Sin elementos</p> : (
                     carrito?.map(articulo =>(
                        <ArticulosCarrito
                           key = {articulo.id}
                           articulo = {articulo}
                        />
                     ))
                  )}
               </div>

               <aside className="resumen">
                  <h3>Resumen del pedido</h3>
                  <p>total a pagar: ${total}</p>
               </aside>

            </div>
         </div>
      </main>
   )
}

export default Carrito