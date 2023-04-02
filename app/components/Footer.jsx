import Navigation from "./navigation"

const Footer = () => {
  return (
      <footer className="footer">
         <div className="container content">
            <nav className="nav__footer">
               <Navigation/>
            </nav>
            <p className="copyright">Todos los derechos reservados {new Date().getFullYear()}</p>
         </div>
      </footer>
  )
}

export default Footer