import { useOutletContext } from "@remix-run/react";

const ArticulosCarrito = ({articulo}) => {
   const {eliminarArticulo, actualizarCantidad} = useOutletContext();
   const {nombre, cantidad, precio , image,id} = articulo;
  return (
      <div className='item'>
         <figure className="item__img">
            <img src={image} alt={nombre} />
         </figure>
         <div className="item__content">
            <h2 className="nombre">{nombre}</h2>
            <p className="cantidad">Cantidad : </p>

            <select 
               className="select-cantidad"
               value = {cantidad}
               onChange={ e => actualizarCantidad({
                  cantidad : +e.target.value,
                  id : id
               })}
            >
               <option value="1">1</option>
               <option value="2">2</option>
               <option value="3">3</option>
            </select>
            <p className="precio"><span>${precio}</span></p>
            <p className="subtotal">Subtotal : <span> $ {precio * cantidad} </span></p>
         </div>
         <button onClick={() => eliminarArticulo(id)}> x </button>
      </div>
  )
}

export default ArticulosCarrito