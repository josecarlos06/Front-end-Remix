const ArticulosCarrito = ({articulo}) => {
   const {nombre, cantidad, precio , image} = articulo;
  return (
      <div className='item'>
         <figure className="item__img">
            <img src={image} alt={nombre} />
         </figure>
         <div className="item__content">
            <h2 className="nombre">{nombre}</h2>
            <p className="cantidad">Cantidad : <span>{cantidad}</span></p>
            <p className="precio"><span>${precio}</span></p>
            <p className="subtotal">Subtotal : <span> $ {precio * cantidad} </span></p>
         </div>
      </div>
  )
}

export default ArticulosCarrito