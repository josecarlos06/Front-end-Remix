import Guitarra from "~/components/guitarra"

const ListadoGuitarras = ({guitarras}) => {
  return (
   <>
      <h2 className="heading">Colección de Guitarras</h2>
      {guitarras?.length && (
         <div className="guitarra__grid">
            {guitarras.map( guitarra => (
               <Guitarra
                  key = {guitarra?.id}
                  guitarra = {guitarra?.attributes}
               />
            ))}
         </div>
      )}
   </>
  )
}

export default ListadoGuitarras