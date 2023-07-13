//import { Link } from 'react-scroll'
import { useContext } from "react"
import { Context } from "../../context/context"
import  "./navbar.css"

import English from "../../assets/reino-unido.png"
import Spanish from "../../assets/esp.png"
import Home from "../../assets/home.png"
import Projects from "../../assets/project.png"
import Nave from "../../assets/nave.png"
import Contact from "../../assets/contact.png"

import Scroll from "react-scroll";
const Link      = Scroll.Link;
const scroll    = Scroll.animateScroll;


const NavBar = () => {
    const { cambiarLenguaje, english } = useContext(Context)
    let chau = "</>"

    const scrollMore = (e) => {
        console.log(window.innerWidth)
        console.log(e.classList.contains("project"))
        if(e.classList.contains("main")) scroll.scrollToTop(0);
        if(e.classList.contains("project")) scroll.scrollTo(580);
        if(e.classList.contains("habilidades")) scroll.scrollTo(1850);
        if(e.classList.contains("contactar")) scroll.scrollTo(3180);
    }
    
    return (
        <>
        <nav className="flex-between">

            <span className="logo">
                <Link to="main">
                    <span> GN </span>
                    <span className="simbolo"> {chau} </span>      
                </Link>
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
                <li className="p-2 especial li-nav contactar">
                    <Link to="" className="flex-center-column contactar"  isDynamic={true} onClick={(e) => scrollMore(e.target.parentNode)}>
                        <img src={Contact} alt="" className="icon-navbar"/>
                        <span>
                            {english ? "Contact" : "Contacto"}
                        </span>
                    </Link>
                </li>
                <li className="p-2 li-nav habilidades">
                    <Link to="" className="flex-center-column habilidades"  isDynamic={true} onClick={(e) => scrollMore(e.target.parentNode)} >
                        <img src={Nave} alt="" className="icon-navbar"/>
                        <span>
                            {english ? "Skills" : "Habilidades"}
                        </span>
                    </Link>
                    
                </li>
                <li className="p-2 li-nav project">
                    <Link to="" className="flex-center-column project"  isDynamic={true} onClick={(e) => scrollMore(e.target.parentNode)}>
                         <img src={Projects} alt="" className="icon-navbar"/>
                        <span>
                            {english ? "Projects" : "Proyectos"}
                        </span>
                    </Link>
                    
                </li>
                <li className="p-2 li-nav main">
                    <Link to="main" className="flex-center-column a main" isDynamic={true} onClick={(e) => scrollMore(e.target.parentNode)}>
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