import carrito from "~/styles/carrito.css"
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
   return (
      <main>
         <div className="container">
            <h2 className='heading'>Carrito de compras</h2>
            <div className="content">

               <div className="carrito">
                  <h2>Articulos</h2>
               </div>

               <aside className="resumen">
                  <h3>Resumen del pedido</h3>
                  <p>total a pagar: $</p>
               </aside>

            </div>
         </div>
      </main>
   )
}

export default Carrito