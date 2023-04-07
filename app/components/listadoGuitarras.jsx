import GuitarLa from "./guitarLa"

const ListadoGuitarras = ({guitarras}) => {
  return (
   <>
      <h2 className="heading">Colección de Guitarras</h2>
      {guitarras?.length && (
         <div className="guitarra__grid">
            {guitarras.map( guitarra => (
               <GuitarLa
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