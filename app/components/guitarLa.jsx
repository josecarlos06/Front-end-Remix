import { Link } from "@remix-run/react";
const GuitarLa = ({guitarra}) => {
  const {imagen, nombre,precio, descripcion, url} = guitarra
  return (
    <div className="item__guitarra">
         <figure className="item__figure">
            <img src={imagen.data.attributes.formats.medium.url} alt={`Guitarra ${nombre}`} loading="lazy" />
         </figure>
         <h2 className="item__nombre"> {nombre}</h2>
         <p className="paragraph">{descripcion}</p>
         <div className="detalle">
            <p className="price">${precio}</p> 
            <Link className="enlace" to={`/guitarras/${url}`}>Detalles</Link>
         </div>

    </div>
  )
}

export default GuitarLa