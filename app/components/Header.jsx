import { Link} from "@remix-run/react";
import { useState } from "react";
import logo from '../../public/img/logo.svg'

const Header = () => {
   const [toggle, setToggle] = useState(false)
  return (
      <header className="header">
         <nav className="navbar container">
            <Link to="/">
               <figure className="navbar__logo">
                  <img src={logo} alt="imagen logo" />
               </figure>
            </Link>
            <ul className={`${toggle ? 'active' : ''} navbar__ul`}>
               <li className="navbar__li">
                  <Link to="/">Inicio</Link>
               </li>
               <li className="navbar__li">
                  <Link to="/nosotros">Nosotros</Link>
               </li>
               <li className="navbar__li">
                  <Link to="/tienda">Tienda</Link>
               </li>
               <li className="navbar__li">
                  <Link to="/blog">Blog</Link>
               </li>
               <div 
                  onClick={()=> setToggle(false)}
                  className="toggle-Close">
                  <i className='bx bx-x' ></i>
               </div>
            </ul>
            <div 
               onClick={()=> setToggle(true)}
               className="toggle-Open">
                  <i className='bx bx-grid-small'></i>
            </div>
         </nav>
      </header>
  )
}

export default Header