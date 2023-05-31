import { NavLink } from "react-router-dom"
import  "./navbar.css"


const NavBar = () => {
    return (
        <ul className="lista-navbar">
            <li className="p-2">
                <NavLink to="/contact">
                    Contacto
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
    )
}
export default NavBar