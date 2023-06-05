import { NavLink } from "react-router-dom"
import  "./navbar.css"


const NavBar = () => {
    let hola= "<>"
    let chau = "</>"
    return (
        <>
        <nav className="flex-between">
            <span className="logo">
                <span> GN </span>
                <span className="simbolo"> {chau} </span>
            </span>
            <ul className="lista-navbar menu">
                <li className="p-2 especial">
                    <NavLink to="/contact">
                        Contacto
                        <span className="border border-top">  </span>
                        <span className="border border-right">  </span>
                        <span className="border border-bottom">  </span>
                        <span className="border border-left">  </span>
                    </NavLink>
                </li>
                <li className="p-2">
                    <NavLink to="/">
                        Sobre Mi
                    </NavLink>
                </li>
                <li className="p-2">
                    <a href="/#tecnologias">
                        Tecnologias
                    </a>
                </li>
                <li className="p-2">
                    <a href="/#projects">
                        Proyectos
                    </a>
                </li>
                <li className="p-2">
                    <a href="/#main">
                        Inicio
                    </a>
                </li>
            </ul>
        </nav>
        </>
    )
}
export default NavBar