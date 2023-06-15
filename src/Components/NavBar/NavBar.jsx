import { NavLink } from "react-router-dom"
import  "./navbar.css"
import { useContext } from "react"
import { Context } from "../../context/context"
import English from "../../assets/reino-unido.png"
import Spanish from "../../assets/esp.png"
import { Link } from 'react-scroll'


const NavBar = () => {
    const { cambiarLenguaje, english } = useContext(Context)
    let chau = "</>"
    
    return (
        <>
        <nav className="flex-between">

            <span className="logo">
                <span> GN </span>
                <span className="simbolo"> {chau} </span>
            </span>

            <ul className="lista-navbar">
                <li className="p-2">
                    <img 
                        className="img-idioma" 
                        src={english ? English : Spanish} 
                        alt=""  
                        title={english ? "Cambiar a Español" : "Change to English"}
                        onClick={() => cambiarLenguaje()}/>
                </li>
                <li className="p-2 especial">
                    <Link to="contact">
                        {english ? "Contact" : "Contacto"}
                    </Link>
                </li>
                <li className="p-2">
                    <Link to="tecnologias">
                        {english ? "Technologies" : "Tecnologias"}
                    </Link>
                    
                </li>
                <li className="p-2">
                    <Link to="projects">
                        {english ? "Projects" : "Proyectos"}
                    </Link>
                    
                </li>
                <li className="p-2">
                    <Link to="main">
                        {english ? "Home" : "Inicio"}
                    </Link>
                </li>
                
            </ul>
        </nav>
        </>
    )
}
export default NavBar