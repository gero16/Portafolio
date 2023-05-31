import GitHub from "../../assets/github2.png"
import Url from "../../assets/url.png"
import "./Publicacion.css"

const Publicacion = ({titulo, img, contenido, github, web}) => {

    return (
        <article className="publicacion-trabajo">
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
                <img className="img-post" src={img} alt="" />
            </div>
            <div>
                <span className="contenido-proyecto"> {contenido} </span>

            </div>
      </article>
    )
}


export default Publicacion