import { NavLink } from "react-router-dom"
import  "./navbar.css"
import { useContext } from "react"
import { Context } from "../../context/context"
import English from "../../assets/reino-unido.png"
import Spanish from "../../assets/esp.png"
import { useEffect } from "react"

const NavBar = () => {
    const { cambiarLenguaje, english } = useContext(Context)
    console.log(english)
    let chau = "</>"
    return (
        <>
        <nav className="flex-between">

            <span className="logo">
                <span> GN </span>
                <span className="simbolo"> {chau} </span>
            </span>

            <ul className="lista-navbar menu">
                <li className="p-2">
                    <img 
                        className="img-idioma" 
                        src={english ? English : Spanish} 
                        alt=""  
                        title={english ? "Cambiar a Español" : "Change to English"}
                        onClick={() => cambiarLenguaje()}/>
                </li>
                <li className="p-2 especial">
                    <NavLink to="/contact">
                        {english ? "Contact" : "Contacto"}
                
                    </NavLink>
                </li>
                <li className="p-2">
                    <a href="/#tecnologias">
                    {english ? "Technologies" : "Tecnologias"}
                    </a>
                </li>
                <li className="p-2">
                    <a href="/#projects">
                    {english ? "Projects" : "Proyectos"}
                    </a>
                </li>
                <li className="p-2">
                    <a href="/#main">
                        {english ? "Home" : "Inicio"}
                    </a>
                </li>
                
            </ul>
        </nav>
        </>
    )
}
export default NavBar