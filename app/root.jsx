import {Meta,Links} from '@remix-run/react';
import styles from './styles/app.css';

export function meta(){
   return(
      {
         charset : 'utf-8',
         title : 'Remix',
         viewport : 'width=device-width,initial-scale-1'
      }
   )
}

export function links(){
   return[
      {   
         rel :'stylesheet',
         href: styles
      }
   ]   
}

export default function App(){
   return(
      <Document>
         <h1>From the App 🥵</h1>
      </Document>
   )
}
function Document({children}){
   return(
      <html lang="es">
         <head>
            <Meta/>         
            <Links/>
         </head>
         <body>
            {children}
         </body>
      </html>
   )
}