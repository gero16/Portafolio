const Publicacion = ({titulo, img, contenido}) => {

    return (
        <article className="publicacion-trabajo">
            <h4 className="titulo-publicacion-trabajo"> {titulo} </h4>
            <div cl>
                <img className="img-post" src={img} alt="" />
            </div>
            <div>
                <span className="contenido-proyecto"> {contenido} </span>
            </div>
      </article>
    )
}


export default Publicacion