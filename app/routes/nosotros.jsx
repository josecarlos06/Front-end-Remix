import image from '../../public/img/nosotros.jpg'
import style from '../styles/nosotros.css'

export function meta(){
   return{
      title : 'GuitarLA - Sobre Nosotros',
      description : 'Venta de guitarras, blog de música'
   }
}
export function links(){
   return[
      {
         rel :'stylesheet',
         href : style
      },
      {
         rel : 'preload',
         href : image,
         as : image
      }
   ]
}
const Nosotros = () => {
  return (
    <main className="nosotros container">
      <h2 className="heading">Nosotros</h2>

      <figure className="nosotros__content">
         <img src={image} alt="imagen nosotros"/>
         <figcaption>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus possimus sed aliquid laborum praesentium, in repellendus molestias quasi magnam ducimus dicta officia, impedit fugit eaque sunt! Cumque, iste fugiat!</p>
            <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem temporibus possimus sed aliquid laborum praesentium, in repellendus molestias quasi magnam ducimus dicta officia, impedit fugit eaque sunt! Cumque, iste fugiat!</p>
         </figcaption>
      </figure>
    </main>
  )
}

export default Nosotros