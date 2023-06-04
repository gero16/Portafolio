
const Tecnologia = (imagen1, imagen2, imagen3) => {
    return (
    <section className="grid-tecnologias">
        <img src={imagen1} alt="" className="html"/>
        <img src={imagen2} alt="" className="css"/>
        <img src={imagen3} alt=""/>
    </section>
    )
}

export default Tecnologia;