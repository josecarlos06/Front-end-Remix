export default function App(){
   return(
      <Layout>
         <h1>From the App 🥵</h1>
      </Layout>
   )
}
function Layout({children}){
   return(
      <html lang="es">
         <thead>
            <title>Remix</title>
         </thead>
         <body>
            {children}
         </body>
      </html>
   )
}