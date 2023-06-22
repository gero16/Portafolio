import { NavLink } from "react-router-dom"
import  "./navbar.css"
import { useContext } from "react"
import { Context } from "../../context/context"
import English from "../../assets/reino-unido.png"
import Spanish from "../../assets/esp.png"
import { Link } from 'react-scroll'
import Home from "../../assets/home.png"
import Projects from "../../assets/project.png"
import Nave from "../../assets/nave.png"
import Contact from "../../assets/contact.png"

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

            <ul className="lista-navbar flex-center-column">
                <li className="p-2">
                    <img 
                        className="img-idioma" 
                        src={english ? English : Spanish} 
                        alt=""  
                        title={english ? "Cambiar a Español" : "Change to English"}
                        onClick={() => cambiarLenguaje()}/>
                </li>
                <li className="p-2 especial">
                    <Link to="contact" className="flex-center-column">
                        <img src={Contact} alt="" className="icon-navbar"/>
                        <span>
                            {english ? "Contact" : "Contacto"}
                        </span>
                    </Link>
                </li>
                <li className="p-2">
                    <Link to="tecnologias" className="flex-center-column">
                        <img src={Nave} alt="" className="icon-navbar"/>
                        <span>
                            {english ? "Technologies" : "Tecnologias"}
                        </span>
                    </Link>
                    
                </li>
                <li className="p-2">
                    <Link to="projects" className="flex-center-column">
                         <img src={Projects} alt="" className="icon-navbar"/>
                        <span>
                            {english ? "Projects" : "Proyectos"}
                        </span>
                    </Link>
                    
                </li>
                <li className="p-2">
                    <Link to="main" className="flex-center-column">
                            <img src={Home} alt="" className="icon-navbar"/>
                            <span>
                            {english ? "Home" : "Inicio"}
                            </span>
                    
                    </Link>
                </li>
                
            </ul>
        </nav>
        </>
    )
}
export default NavBar