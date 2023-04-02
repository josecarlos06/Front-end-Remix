const Banner = ({curso}) => {
   const {contenido,imagen,titulo} = curso;
   console.log(imagen);
  return (
    <section className="curso">
      <style jsx="true">{`
         .curso{
            background:linear-gradient(to right, rgb(0 0 0/.65), rgb(0 0 0/.7) ), url(${imagen.data.attributes.url})
         }
      `}</style>
      <div className="container content__cursos">
         <h2 className="heading">{titulo}</h2>
         <p className="paragraph">{contenido}</p>
      </div>
    </section>
  )
}

export default Banner