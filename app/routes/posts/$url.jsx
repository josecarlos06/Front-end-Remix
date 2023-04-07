import { useLoaderData } from '@remix-run/react';
import { formatDate } from '~/utils/helpers';
import { UniqueData } from '../../services/api.server';

export async function loader({ params }) {
   const { url } = params;
   const data = await UniqueData("posts",url);
   if (data.data.length === 0) {
      throw new Response('', {
         status: 404,
         statusText: 'Blog no encontrado'
      }
      );
   }
   return data;
}

export function meta({data}) {
   if (!data) {
      return {
         title: 'Blog no encontrado'
      }
   }
   return {
      title: `Blog - ${data.data[0].attributes.titulo}`
   }
}
const url = () => {
   const data = useLoaderData();
   const { titulo, contenido, imagen, url, publishedAt } = data.data[0].attributes
   return (
      <div className="posts__item">
         <figure className="blog__figure">
            <img src={imagen.data.attributes.formats.medium.url} alt="" />
         </figure>
         <h2 className="title">{titulo}</h2>
         <p className="fecha">{formatDate(publishedAt)}</p>
         <p className="paragraph">{contenido}</p>
      </div>
   )
}

export default url