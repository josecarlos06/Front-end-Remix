import { useState } from 'react';
import { Meta, Links, Outlet, Scripts, LiveReload, useCatch }
   from '@remix-run/react';
import Header from '~/components/Header';
import styles from '~/styles/app.css';
import Footer from './components/Footer';
// cargar head
export function meta() {
   return (
      {
         charset: 'utf-8',
         title: 'Remix',
         viewport: 'width=device-width, initial-scale=1'
      }
   )
}
// cargar link css
export function links() {
   return [
      {
         rel: 'stylesheet',
         href: 'https://necolas.github.io/normalize.css/8.0.1/normalize.css'
      },
      {
         rel: 'preconnect',
         href: 'https://fonts.googleapis.com'
      },
      {
         rel: 'preconnect',
         href: 'https://fonts.gstatic.com',
         crossOrigin: 'true'
      },
      {
         href: 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap',
         rel: 'stylesheet'
      },
      {
         href: 'https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css',
         rel: 'stylesheet'
      },
      {
         rel: 'stylesheet',
         href: styles
      }
   ]
}

export default function App() {
   const [carrito, setCarrito] = useState([]);
   const agregarCarrito = guitarra =>{
      setCarrito([...carrito, guitarra])

      if(carrito.some( guitarraState => guitarraState.id === guitarra.id)){
         const carritoActu = carrito.map( guitarraState => {
            if(guitarraState.id === guitarra.id){
               guitarraState.cantidad /* + */ =  guitarra.cantidad;
            }
            return guitarraState;
         })
         setCarrito(carritoActu)
      }else{
         setCarrito([...carrito, guitarra])
      }
   }
   const actualizarCantidad = guitarra =>{
      const carritoActualizado = carrito.map( guitarraState => {
         if(guitarraState.id === guitarra.id){
            guitarraState.cantidad = guitarra.cantidad;
         }
         return guitarraState;
      })
      setCarrito(carritoActualizado)
   }

   const eliminarArticulo = id => {
      const articuloActualizada = carrito.filter(guitarraState => guitarraState.id !== id);
      setCarrito(articuloActualizada);
   }
   return (
      <Document>
         <Outlet 
            context={{
               agregarCarrito,
               carrito,
               actualizarCantidad,
               eliminarArticulo
            }}
         />
      </Document>
   )
}
function Document({ children }) {
   return (
      <html lang="es">
         <head>
            <Meta />
            <Links />
         </head>
         <body>
            <Header/>
               {children}
            <Footer/>
            <Scripts/>
            <LiveReload/>
         </body>
      </html>
   )
}

// recuperar errores

export function CatchBoundary(){
   const error = useCatch();
   return(
      <Document>
         <p className='error'>{error.status} {error.statusText}</p>
      </Document>
   )
}

export function ErrorBoundary({error}){
   return(
      <Document>
         <p className='error'>{error.status} {error.statusText}</p>
      </Document>
   )
}