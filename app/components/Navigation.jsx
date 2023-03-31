import {Link, useLocation} from "@remix-run/react";
const Navigation = () => {
   const location = useLocation();
   return (
      <>
         <li className="navbar__li">
            <Link to="/" className={location.pathname === '/' ? 'nav__active' : ''}>Inicio</Link>
         </li>
         <li className="navbar__li">
            <Link to="/nosotros" className={location.pathname === '/nosotros' ? 'nav__active' : ''}>Nosotros</Link>
         </li>
         <li className="navbar__li">
            <Link to="/tienda" className={location.pathname === '/tienda' ? 'nav__active' : ''}>Tienda</Link>
         </li>
         <li className="navbar__li">
            <Link to="/blog" className={location.pathname === '/blog' ? 'nav__active' : ''}>Blog</Link>
         </li>
      </>
   )
}

export default Navigation