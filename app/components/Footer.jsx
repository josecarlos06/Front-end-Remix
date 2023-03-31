import Navegation from "./Navegation"

const Footer = () => {
  return (
      <footer className="footer">
         <div className="container content">
            <nav className="nav__footer">
               <Navegation/>
            </nav>
            <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
         </div>
      </footer>
  )
}

export default Footer