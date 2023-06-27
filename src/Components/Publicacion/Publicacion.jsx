import { useContext } from "react"
import GitHub from "../../assets/github2.png"
import Url from "../../assets/url.png"
import { Context } from "../../context/context"
import "./Publicacion.css"

const Publicacion = ({titulo, img, contenido, github, web, tecnologias, cover, hover}) => {
    const { english } = useContext(Context)

    const style = {
        backgroundImage: `url(${img})`,
        backgroundSize: !cover ? "contain" : "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50%",
    }
    
    return (
        <article className="publicacion-trabajo">
            <div className="div-img">
                <img src={img} className={"img-post " + hover}/>
            </div>

            <div className="publicacion-contenido">
                <header className="header-publicacion">
                    <span className="titulo-publicacion-trabajo"> {titulo} </span>
                    <span className="div-iconos">
                        <a href={github} title={github}>
                            <img src={GitHub} alt=""  className="github-publicacion hipervinculos-proyecto"/>
                        </a>
                        <a href={web} title={web}>
                            <img src={Url} alt=""  className="url hipervinculos-proyecto"/>
                        </a>
                    </span>
                </header>

            
                <div>
                    <span className="contenido-proyecto"> {contenido} </span>

                </div>

                <div className="tecnologias-utilizadas">
                    {
                        tecnologias.map((tecnologia, index) => {
                            {
                                {}
                            }
                            return <span key={index}> {tecnologia }</span>
                        })
                    }
                
                </div>

            </div>
      </article>
    )
}


export default Publicacion