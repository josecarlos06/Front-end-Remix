import { Link } from "@remix-run/react";
import { formatDate } from "../utils/helpers";
const Posts = ({blog}) => {
   const {titulo,contenido, imagen,url, publishedAt} = blog;
  return (
    <div className="blog__item">
      <figure className="blog__figure">
         <img src={imagen.data.attributes.formats.medium.url} alt="" />
      </figure>
      <h2 className="title">{titulo}</h2>
      <p className="fecha">{formatDate(publishedAt)}</p>
      <p className="paragraph">{contenido}</p>
      <Link className="blog__enlace" to={`/posts/${url}`} >Ver más</Link>
    </div>
  )
}

export default Posts